import { Component } from '@angular/core';
import { Prueba1Service } from '../../services/prueba1.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prueba1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prueba1.component.html',
  styleUrl: './prueba1.component.css'
})
export class Prueba1Component {

  informacion:any;
  ip:string = "";
  aviso:boolean = false;
  url:string = "";
  cordenadas:any;
  aviso2:boolean = false;
  constructor(private prueba1Service:Prueba1Service){
    this.informacion = null;
    this.cordenadas = null;
  }

  obtenerInformacion(ip:string):void{
    this.prueba1Service.obtenerInfo(ip).subscribe(
      (response)=>{
        this.informacion = response;
        this.url = "https://maps.google.com/?q="+response.latitude+","+response.longitude;
        console.log(response);
      },
      (error)=>{
        console.log(error)
      }
    );
  }
  obtenerCordenadas(latitud:string, longitud:string){
    this.prueba1Service.obtenerCordenas(latitud,longitud).subscribe(
      (response)=>{
        this.cordenadas = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  cambiarEstado():void{
    this.aviso = !this.aviso;
  }
  cambiarEstado2():void{
    this.aviso2 =!this.aviso2;
  }
}
