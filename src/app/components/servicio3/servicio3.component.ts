import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-servicio3',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './servicio3.component.html',
  styleUrl: './servicio3.component.css'
})
export class Servicio3Component {
  marcas:Array<any>;
  modelos:Array<any>;
  nombre:string;
  constructor(private carService: CarService){
    this.marcas = [];
    this.modelos = [];
    this.nombre = "MODELOS";
  }

  obtenerMarcas():void{
    this.carService.getMarcas().subscribe(
      (response)=>{
        for(let e of response){
          this.marcas.push(e);
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  obtenerModelos(id:string):void{
    this.carService.getModelosById(id).subscribe(
      (response)=>{
        this.modelos = [];
        for(let e of response){
          this.modelos.push(e);
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
