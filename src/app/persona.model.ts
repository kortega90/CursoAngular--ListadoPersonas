export class Persona {
  nombre?: string = '';
  apellido?: string = '';

  constructor(nome?: string, sobrenome?: string) {
    this.nombre = nome;
    this.apellido = sobrenome;
  }
}
