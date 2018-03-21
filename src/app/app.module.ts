import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgPipesModule} from 'ngx-pipes';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Pratice1Component } from './pratice1/pratice1.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { HightlightDirective } from './hightlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { Homework2Component } from './homework2/homework2.component';
import { Homework2BtnComponent } from './homework2-btn/homework2-btn.component';
import { DyclassComponent } from './dyclass/dyclass.component';
import { Jq1Component } from './jq1/jq1.component';
import { Lesson7Component } from './lesson7/lesson7.component';

import { BmiService } from './bmi.service';
import { Homework3Component } from './homework3/homework3.component';
import { Homework3BtnComponent } from './homework3-btn/homework3-btn.component';
import { Hw3Service } from './hw3.service';
import { CallHttpComponent } from './call-http/call-http.component';
import { HttpService } from './http.service';
import { NgModelDrivenComponent } from './ng-model-driven/ng-model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Pratice1Component,
    Lesson4Component,
    Lesson5Component,
    InputButtonComponent,
    Lesson6Component,
    HightlightDirective,
    Homework2Component,
    Homework2BtnComponent,
    DyclassComponent,
    Jq1Component,
    Lesson7Component,
    Homework3Component,
    Homework3BtnComponent,
    CallHttpComponent,
    NgModelDrivenComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    NgPipesModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    BmiService,
    Hw3Service,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
