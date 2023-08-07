import { PersonasService } from './../personas.service';
import { LoggingService } from './../LoggingService.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  
  // @Output() personaCreada = new EventEmitter<Persona>();
  
  nombreInput: string  ="";
  apellidoInput: string  = "";

  constructor(private loggingService:LoggingService, private personasService: PersonasService)
  {
    this.personasService.saludar.subscribe((indice:number) => alert("el indice es "+(indice +1)));
  }

  agregarPersona() {

    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(persona1);
    // this.loggingService.enviaMensajeAConsola("Enviamos persona:"+' '+persona1.nombre+ ' '+ persona1.apellido);
    // this.personaCreada.emit(persona1); 
    this.personasService.agregarPersonaServ(persona1);
    this.nombreInput = ''
    this.apellidoInput = ''
  }
}
