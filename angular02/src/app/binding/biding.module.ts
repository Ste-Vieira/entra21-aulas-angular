import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { EventComponent } from './event/event.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { PropertyComponent } from './property/property.component';



@NgModule({
  declarations: [
    PropertyComponent,
    EventComponent,
    MaoDuplaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class BidingModule { }
