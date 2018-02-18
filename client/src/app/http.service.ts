console.log( "******** http.service.ts ********" );

import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http"; //STITCHING

@Injectable()
export class HttpService {

  constructor( private _http: HttpClient ) { //STITCHING
    // this.getTasks(); //STITCHING //STITCHING2
   }

  getTasks(){ //STITCHING
    // let tempObservable = this._http.get("/tasks" ); //STITCHING2
    // tempObservable.subscribe( data => console.log( "Got our tasks", data ) );//STITCHING2
    return this._http.get( "/tasks" ); //STITCHING2
  }
}
