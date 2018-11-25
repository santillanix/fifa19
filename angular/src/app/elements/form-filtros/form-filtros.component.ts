import { Component, Output, EventEmitter } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-form-filtros',
  templateUrl: './form-filtros.component.html',
  styleUrls: ['./form-filtros.component.css']
})
export class FormFiltrosComponent {

  constructor() { }

  //Evento de envio de filtros al Padre
  @Output() sendFiltros = new EventEmitter();
  //listados de filtros (select)
  ligas = require('../../../assets/js/ligas.json');
  nacionalidad = require('../../../assets/js/nacionalidad.json');
  position = require('../../../assets/js/posicion.json');
  club = require('../../../assets/js/club.json');
  quality = require('../../../assets/js/calidad.json');
  //Objeto filtros
  filtros = {
    calidad: "-1",
    posicion: "-1",
    nacionalidad: "-1",
    liga: "-1",
    club: "-1"
  }

  //Lanzador de Evento al padre
  lanzar() {
    //recorremos objeto para borrar filtros no seleccionados "Any"
    var copiafiltros = Object.assign({}, this.filtros)
    for (var f in copiafiltros) {
      if (copiafiltros[f] == "-1") {
        delete copiafiltros[f]
      }
    }
    this.sendFiltros.emit(copiafiltros);
  }

  //Ponemos todos los filtros como no selecionados
  reset() {
    for (var f in this.filtros) {
      this.filtros[f] = "-1"
    }
  }



}
