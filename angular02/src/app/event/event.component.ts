import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  resultado!: number
  tamanho: number = 200

  constructor() { }

  ngOnInit(): void {
  }

  minhafunc() {
    alert("ATENÇÃO")
  }

  somar() {
    this.resultado = (1 + 2)
  }

  subtrair(a: number, b: number) {
    this.resultado = (a - b)
  }

  multiplicar() {
    let numeroA: number = Number(prompt("Informe o primeiro número"))
    let numeroB: number = Number(prompt("Informe o segundo número"))

    this.resultado = numeroA * numeroB
  }

  dividir() {
    let numeroA: number = Number(prompt("Informe o primeiro número"))
    let numeroB: number = Number(prompt("Informe o segundo número"))

    this.resultado = numeroA / numeroB
  }

  aumentar() {
    this.tamanho += 10
  }

  diminuir() {
    this.tamanho -=5
  }
}
