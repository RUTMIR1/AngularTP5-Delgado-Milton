import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() objetos?:Array<any>;
  @Input() nombre?:string;

  public obtenerCantidad(vector:Array<any>):number {
    return vector.length;
  }
  public valorTotal(vector:Array<any>):number{
    let total:number = 0;
    vector.forEach(el => {
      total = total + el.valor;
    });
    return total;
  }
}
