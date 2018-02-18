console.log( "******** app.component.ts ********" );

import { 
  Component,
  OnInit //STITCHING2
} from '@angular/core';

import { HttpService } from "./http.service"; //STITCHING

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { //STITCHING2
  title = 'app';
  num: number;
  randNum: number;
  str: string;
  first_name: string;
  loggedIn: boolean;

  constructor( private _httpService: HttpService ){} //STITCHING
  
  ngOnInit(){ //STITCHING2
    // this.getTasksFromService();
    // this.getTask( "5a88ba8bbced5b11f3e1150a" );
    this.num = 7;
    this.randNum = Math.floor( (Math.random() * 2 ) +1 );
    this.str = "Hello Angular Developer!";
    this.first_name = "Alpha";
    this.loggedIn = true;
  }

  tasks = [];
  
  getTasksFromService(){ //STITCHING2
    let observable = this._httpService.getTasks();
    observable.subscribe( data => {
      this.tasks = data; //ME EDITED
      // this.tasks = data["tasks"]; //ORIGINALLY SUGGESTED
      console.log( "Got our tasks!", this.tasks );
    });
  }

  task = {};
  getTask( id ) {
    let observable = this._httpService.getTask( id );
    observable.subscribe( data => {
      this.task = data;
      console.log( this.task );
    })
  }

  onButtonClick(): void {
    console.log( `Click event is working` );
  }

  onButtonClickParam( num: Number ): void {
    console.log( `Click event is working with the num param: ${num}` );
  }

  onButtonClickParams( num: Number, str: String ): void {
    console.log( `Click event is working with num param: ${num} and str param ${str}` );
  }

  onButtonClickEvent( event: any ): void {
    console.log( `Click event is working with event: `, event);
  }
}

