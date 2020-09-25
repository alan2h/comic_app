import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(i){
    console.log(i, '<==========');
    this.heroeSeleccionado.emit(i);
  }

}
