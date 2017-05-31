import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {IntroductionComponent} from "./intro/intro.component";
import {WorkComponent} from "./work/work.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {CheckoutComponent} from "./checkout/checkout.component";

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    IntroductionComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    CheckoutComponent
  ]
})
export class AppModule { }
