import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PicComponent } from './pic/pic.component';
import { DatePipe } from '@angular/common';
import { IotComponent } from './iot/iot.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    PicComponent,
    IotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
