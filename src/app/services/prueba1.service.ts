import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Prueba1Service {

  constructor(private _http:HttpClient) { }

  obtenerInfo(ip:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      'x-rapidapi-key': '0ac0154f6fmsh4159c24df86f916p165f04jsn7526a29f810f',
      'x-rapidapi-host': 'community-neutrino-ip-info.p.rapidapi.com',
      'Content-Type': 'application/json'
      })
    }
    //'content-type': 'application/x-www-form-urlencoded',
    let body = {
      'ip': ip,
      'reverse-lookup':'checked'
    }
    //let body = new HttpParams()
    //.set('ip',ip)
    //.set('reverse-lookup','checked');
    return this._http.post('https://community-neutrino-ip-info.p.rapidapi.com/ip-info',body,httpOptions);
  }
  obtenerCordenas(latitud:string, longitud:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '0ac0154f6fmsh4159c24df86f916p165f04jsn7526a29f810f',
        'x-rapidapi-host': 'address-from-to-latitude-longitude.p.rapidapi.com'
      })
    }
    return this._http.get('https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat='+ latitud + '&lng='+ longitud,httpOptions);
  }
}
