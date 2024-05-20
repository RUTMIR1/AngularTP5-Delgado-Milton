import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient){

  }

  getNoticias(): Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'X-RapidAPI-Key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
		    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      })
    }
    return this._http.get("https://livescore6.p.rapidapi.com/news/v2/list", httpOptions);
  }

  getDetalles(id:string): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      })
    }
    return this._http.get("https://livescore6.p.rapidapi.com/news/v2/detail?id="+id,httpOptions);
  }
}
