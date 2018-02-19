console.log( "******** http.service.ts ********" );

import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor( private _http: HttpClient ){}

  tasks(){
    return this._http.get( "/tasks" );
  }

  tasks_one( id ){
    return this._http.get( `/tasks/${id}` );
  }

  tasks_create( new_task ){
    return this._http.post( "/tasks", new_task );
  }

  tasks_update( id, updated_task ){
    return this._http.put( `/tasks/${id}`, updated_task )
  }

  tasks_delete( id ){
    return this._http.delete( `/tasks/${id}`)
  }
}
