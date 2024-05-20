import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _http:HttpClient){}

  getMarcas():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      })
    }
    return this._http.get("https://car-specs.p.rapidapi.com/v2/cars/makes",httpOptions);
  }

  getModelosById(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      })
    }
    return this._http.get("https://car-specs.p.rapidapi.com/v2/cars/makes/"+id+"/models",httpOptions);
  }
}
