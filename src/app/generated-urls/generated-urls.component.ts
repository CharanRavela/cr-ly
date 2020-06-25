import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {TooltipPosition} from '@angular/material/tooltip';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-generated-urls',
  templateUrl: './generated-urls.component.html',
  styleUrls: ['./generated-urls.component.css']
})
export class GeneratedURLSComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  user_data:any = [{
    name: null,
    email: null,
    url: null,
    url_id: null
  }];

  domain:string = "https://rc-ly.herokuapp.com/";


  columnsToDisplay = ['name','email','url','url_id'];

  ngOnInit(): void {
    this.getData();
  }

  getData() {

    return this.http.get( `${environment.domain}get_all/url_ids`).subscribe( (res)=> {
      if(res['success'] == true){
        
        res['response'].forEach(element => {
          element.url_id = environment.domain + element.url_id;
        });
        this.user_data = res['response'];
        this.openSnackBar("Data Fetched...!", "Enjoy");
  
      }
      else{
        this.openSnackBar("Data Not Found...!", "Bad Luck");
      }
    }, (err)=> {
      console.log("Error");
      this.openSnackBar("Server Error...!", "Sorry!");
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
