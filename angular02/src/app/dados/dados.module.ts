import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarComponent } from './enviar/enviar.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ReceberDadosComponent,
    EnviarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class DadosModule { }
