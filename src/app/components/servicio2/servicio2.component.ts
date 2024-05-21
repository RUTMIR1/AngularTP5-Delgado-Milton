import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { concat, from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

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
      this.noticias = response.homepageArticles[0].articles
      this.obtenerDetalles(this.noticias);
      console.log(this.noticias);
      console.log(this.detalles);
     },
     (error)=>{
      console.log(error);
     } 
    )
  }
  obtenerDetalles(noticias:any[]):void{
    from(noticias).pipe(
      concatMap(( noticia, index)=>
      this.noticiaService.getDetalles(noticia.id).pipe(
        delay(250)
      ))
    ).subscribe(
      (response)=>{
        let noticia = this.noticias.find(noticia => noticia.id == response.articleId);
        if(noticia != null){
          noticia.shortTitle = response.article.subTitle;
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }  
}
