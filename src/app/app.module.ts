import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from '@angular/forms';
import {carsReducer} from './redux/cars.reducer';
import {CarsService} from './cars.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({carPage: carsReducer}),
    HttpClientModule,
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
