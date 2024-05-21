import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private _http: HttpClient){

  }

  getIdiomas():Observable<any>{
    let httpHeader = {
      headers: new HttpHeaders({
        //'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      })
    };
    return this._http.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=es',httpHeader);
  }

  traducir(texto:string, contenido:string, target:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
		    'X-RapidAPI-Key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
		    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }),
    }
    let body = new HttpParams()
    .set('q', texto)
    .set('target', target)
    .set('source', contenido);
    return this._http.post('https://google-translate1.p.rapidapi.com/language/translate/v2',body,httpOptions)
  }
}
