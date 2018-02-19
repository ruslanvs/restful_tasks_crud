console.log( "******** app.component.ts ********" );

import { 
  Component,
  OnInit
} from '@angular/core';

import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  new_task: any;
  updated_task: any;
  tasks_all = [];
  task = {};

  num: number;
  randNum: number;
  str: string;
  first_name: string;
  loggedIn: boolean;

  constructor( private _httpService: HttpService ){}
  
  ngOnInit(){
    this.new_task = { title: "", description: "" }
    this.updated_task = { title: "", description: "" }

    //OTHER EXAMPLES
    this.num = 7;
    this.randNum = Math.floor( (Math.random() * 2 ) +1 );
    this.str = "Hello Angular Developer!";
    this.first_name = "Alpha";
    this.loggedIn = true;
  }

  tasks_create(){
    let observable = this._httpService.tasks_create( this.new_task );
    observable.subscribe( data => {
      console.log ( "tasks_create says:", data )
    })
    this.new_task = { title: "", description: "" }
  }

  tasks(){
    let observable = this._httpService.tasks();
    observable.subscribe( data => {
      this.tasks_all = data["data"];
      console.log( "Got our tasks!", data );
    });
  }

  tasks_one( id ){
    let observable = this._httpService.tasks_one( id );
    observable.subscribe( data => {
      this.task = data["data"][0];
      console.log( this.task );
    });
  }

  tasks_update( id ){
    let observable = this._httpService.tasks_update( id, this.updated_task );
    observable.subscribe( data => {
      console.log( data )
    })
    this.updated_task = { title: "", description: "" }
  }
  
  tasks_delete( id ){
    let observable = this._httpService.tasks_delete( id );
    observable.subscribe( data => {
      console.log( data );
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

