import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{

    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Maria', 'Juares'),
      ];
      
      saludar = new EventEmitter<number>();
      
      constructor(private loggingService: LoggingService){}

      agregarPersonaServ(persona: Persona){
        this.loggingService.enviaMensajeAConsola("Agregamos persona: "+persona.nombre+" "+persona.apellido);
        this.personas.push(persona);
       }

}