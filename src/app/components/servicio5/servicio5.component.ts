import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicio5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './servicio5.component.html',
  styleUrl: './servicio5.component.css'
})
export class Servicio5Component {

  codigoVoces:any;
  voces:any;
  texto:string;
  voz:any;
  url = null;
  constructor(private serviceAudio:AudioService){
    this.texto = "";
    this.voz = "";
  }

  obtenerCodigoVoces():void{
    this.serviceAudio.getLenguajes().subscribe(
      (response)=>{
        this.codigoVoces = response.languages;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    ); 
  }
  
  obtenerVoz():void{
    this.serviceAudio.getVoices(this.voz).subscribe(
      (response)=>{
        this.voces = response.voices[0].voice_code;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  obtenerAudio():void{
    console.log(this.voces);
    console.log(this.texto);
    this.url = null;
    this.serviceAudio.sintetizar( this.voces ,this.texto).subscribe(
      (response)=>{
        this.url = response.result.audio_url;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
