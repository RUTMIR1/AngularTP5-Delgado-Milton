import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(private _http:HttpClient){}

  buscarMusica(nombre:string): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
		    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      })
    }
    return this._http.get("https://spotify23.p.rapidapi.com/search/?q="+nombre+"&type=tracks&offset=0&limit=1&numberOfTopResults=5"
      , httpOptions);
  }

  obtenerMusica(id:string): Observable<any>{
    let httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
		    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      })
    }
    return this._http.get("https://spotify23.p.rapidapi.com/tracks/?ids="+id, httpOptions);
  }
}
