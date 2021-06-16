import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicLinechartModule } from 'basic-linechart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicLinechartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
