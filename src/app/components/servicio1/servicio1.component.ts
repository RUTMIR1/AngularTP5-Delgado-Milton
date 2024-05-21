import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicio1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './servicio1.component.html',
  styleUrl: './servicio1.component.css'
})
export class Servicio1Component {

  texto:string;
  contenido:string;
  target:string;
  traduccion:string;
  listaIdioma:any[];
  constructor(private translateService: TranslateService){
    this.texto = "";
    this.contenido = "";
    this.target = "";
    this.traduccion = "";
    this.listaIdioma = [];
    this.obtenerListaIdioma();
  }

  crearTraduccion(texto:string, contenido:string, target:string):void{
    this.translateService.traducir(texto, contenido, target).subscribe(
      (response) => {
        console.log(response);
        this.traduccion = response.data.translations[0].translatedText;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerListaIdioma():void{
    this.translateService.getIdiomas().subscribe(
      (response) => {
        this.listaIdioma = response.data.languages;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  obtenerCodigo(nombre:string):string{  
    for(let e of this.listaIdioma){
      if(e.name == nombre){
        nombre = e.language;
      }
    }
    return nombre;
  }
}
