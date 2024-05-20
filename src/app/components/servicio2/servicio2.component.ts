import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-servicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio2.component.html',
  styleUrl: './servicio2.component.css'
})
export class Servicio2Component {

  noticias: Array<any>;
  detalles: Array<any>;

  constructor(private noticiaService:NoticiaService){
    this.noticias = [];
    this.detalles = [];
  }

  obtenerNoticias():void{
    this.noticiaService.getNoticias().subscribe(
     (response)=>{
      for(let e of response.homepageArticles[0].articles){
        this.noticias.push(e);
        this.obtenerDetalles(e.id, e);
      }
      console.log(this.noticias);
      console.log(this.detalles);
     },
     (error)=>{
      console.log(error);
     } 
    )
  }
  obtenerDetalles(id:string, e:any):void{
    this.noticiaService.getDetalles(id).subscribe(
        (response)=>{
          e.shortTitle = response.article.subTitle;
        },
        (error)=>{
          console.log(error);
        } 
      )
  }  
}
