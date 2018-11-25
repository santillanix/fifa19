import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class FifaService {

  constructor(
    public http: HttpClient,
    public _app: AppService
  ) { }

  cors = "https://cors-anywhere.herokuapp.com/"

  //Buscar en el Mecado
  buscarMercado() {
    var url = this.cors + "https://utas.external.s3.fut.ea.com/ut/game/fifa19/transfermarket?start=0&num=21" + "&type=player&pos=GK&lev=bronze&nat=52&leag=16&team=1816" + "&_=1543061254455"
    var headers = new HttpHeaders({
      'Accept': 'text/plain, */*; q=0.01',
      'Content-Type': 'application/json',
      'Easw-Session-Data-Nucleus-Id': this._app.NucleusId,
      'Origin': 'https://www.easports.com',
      'Referer': 'https://www.easports.com/es/fifa/ultimate-team/web-app/',
      'X-UT-SID': this._app.XUTSID
    })
    return this.http.get(url, { headers })
  }
}
