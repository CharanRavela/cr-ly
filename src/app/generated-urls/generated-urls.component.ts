import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {TooltipPosition} from '@angular/material/tooltip';
import {MatSnackBar} from '@angular/material/snack-bar';


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
    name: '',
    email: '',
    url: '',
    url_id: ''
  }];

  domain:string = "http://localhost:3000/";


  columnsToDisplay = ['name','email','url','url_id'];

  ngOnInit(): void {
    this.getData();
  }

  getData() {

    return this.http.get( this.domain +  "/get_all_url_ids").subscribe( (res)=> {
      if(res['success'] == true){

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
