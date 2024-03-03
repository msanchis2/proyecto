import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imagenUrl: string  = "";
  @Input() titulo: string= "";
  @Input() ubicacion: string = "";
  @Input() descripcion: string = "";
  @Input() puntuacion: number= 0;
}
