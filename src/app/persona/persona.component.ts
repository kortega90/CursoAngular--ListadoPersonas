import { PersonasService } from './../personas.service';
import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() people!: Persona;
  @Input() i!: number;

  constructor(private personasService: PersonasService){ }
 
  emitirSaludo(){
      this.personasService.saludar.emit(this.i)
  }
}
