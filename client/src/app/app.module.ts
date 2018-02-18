console.log( "******** app.module.ts ********" );

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HttpService } from "./http.service"; // STITCHING

import { HttpClientModule } from "@angular/common/http" //STITCHING

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //STITCHING
  ],
  providers: [
    HttpService //STITCHING
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
