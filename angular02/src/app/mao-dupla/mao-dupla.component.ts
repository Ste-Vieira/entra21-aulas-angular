import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mao-dupla',
  templateUrl: './mao-dupla.component.html',
  styleUrls: ['./mao-dupla.component.css']
})
export class MaoDuplaComponent implements OnInit {

  numero1!: number
  numero2!: number
  curso: string = "Angular"
  resultado!: number

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.curso = "Merendar"
    }, 20000);

    // setTimeout(() => {

    // }, 7 * 24 * 60 * 60 * 1000 + 15 * 60 * 1000);

  }

  somar() {
    console.log("Ta acontecendo agora");

    this.resultado = this.numero1 + this.numero2
    return this.resultado
  }

}
