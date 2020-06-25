import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-url-generator',
  templateUrl: './url-generator.component.html',
  styleUrls: ['./url-generator.component.css']
})
export class UrlGeneratorComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  user_data:any = {
    name: null,
    email: null,
    url: null
  }

  url_id:string;

  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.reg),
  ]);
  
  ngOnInit(): void {
  }

  getShortened(user_data:any) {
    
    let body = {
      name: user_data.name,
      email: user_data.email,
      url: user_data.url
    }
    if(user_data.name != null && user_data.email != null && user_data.url != null){
      
      return this.http.post( `${environment.domain }get_url_id`,body).subscribe( (res)=> {
        if(res['success'] == true){
          this.url_id = environment.domain + res['response'];
          this.openSnackBar("URL Generated...!", "Success!");
        }
        else{
          this.openSnackBar("URL not Generated...!", "Failed!");
        }
      }, (err)=> {
        console.log("Error");
        this.openSnackBar("Server Error...!", "Sorry!");
      });
  
    }
    else{
      this.openSnackBar("Bad Request...!", "Try again!");
    }
  
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
