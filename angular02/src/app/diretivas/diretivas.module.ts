import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DiretivaIfComponent,
    DiretivaForComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DiretivasModule { }
