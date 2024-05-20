import { Component } from '@angular/core';
import { MusicaService } from '../../services/musica.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-servicio4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './servicio4.component.html',
  styleUrl: './servicio4.component.css'
})
export class Servicio4Component {
  nombre:string;
  musica: string;
  mostrar:boolean;
  musicaUrl: SafeResourceUrl | undefined;
  constructor(private musicaService: MusicaService, private sanitizer: DomSanitizer){
    this.nombre = "";
    this.musica = "";
    this.mostrar = false;
  }

  buscaMusica():void{
    this.musicaService.buscarMusica(this.modificarNombre(this.nombre)).subscribe(
      (response)=>{
        let id:string = response.tracks.items[0].data.id;
        this.mostrar = false;
        this.obtenerMusica(id);
        console.log(this.musica);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  obtenerMusica(id:string):void{
    this.musicaService.obtenerMusica(id).subscribe(
      (response)=>{
        this.musica = response.tracks[0].preview_url;
        this.musicaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/track/${id}`);
        this.mostrar = true;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  modificarNombre(nom:string):string{
    let modificado:string = "";
    for(let i = 0; i < nom.length; i++){
      if(nom[i] == " "){
        modificado += "%20";
      }else{
        modificado += nom[i];
      }
    }
    return modificado;
  }
}
