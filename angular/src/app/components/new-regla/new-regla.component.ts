import { Component } from '@angular/core';
import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-new-regla',
  templateUrl: './new-regla.component.html',
  styleUrls: ['./new-regla.component.css']
})
export class NewReglaComponent {

  constructor(
    public _fifa: FifaService
  ) { }

  buscar(filtros) {
    console.log(filtros)
    this._fifa.buscarMercado().subscribe(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
