import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private _http:HttpClient) { }

  getLenguajes():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '18e32d6b73msha1323260338dd77p1acf08jsne215e354b11a',
		    'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
      })
    };
    return this._http.get('https://cloudlabs-text-to-speech.p.rapidapi.com/languages',httpOptions);
  }

  getVoices(codigo:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '18e32d6b73msha1323260338dd77p1acf08jsne215e354b11a',
		    'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
      })
    };
    return this._http.get('https://cloudlabs-text-to-speech.p.rapidapi.com/voices?language_code='+codigo,httpOptions);
  }

  sintetizar(codigoVoz:string, texto:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
		    'X-RapidAPI-Key': '18e32d6b73msha1323260338dd77p1acf08jsne215e354b11a',
		    'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
      })
    };
    let body = new HttpParams()
    .set('voice_code',codigoVoz)
    .set('text',texto)
    .set('speed', '1.00')
    .set('pitch', '1.00')
    .set('output_type', 'audio_url');
    return this._http.post('https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',body,httpOptions);  
  }
}
