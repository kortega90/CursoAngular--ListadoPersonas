import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
   firebase.initializeApp({
    apiKey: "AIzaSyCFcvXRYpi_gfXxb2ffk-v1-SMaBLlPaOg",
    authDomain: "listado-persona-afc62.firebaseapp.com",
   })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }

}
