import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { Router } from '@angular/router';
@Injectable()
export class LoginService {

    token!: string;
    

    constructor(private router:Router){}

    

    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response:any) => {
                    console.log(response);
                    firebase.auth().currentUser?.getIdToken().then(
                        (token:any) => {
                            this.token= token;
                            console.log("token obtenido:" + this.token);
                        }
                    )
                    this.router.navigate(['/']);
                }
            )
    }

    getIdToken() {
        return this.token;
    }

    isAutenticado(){
        return this.token != null;
    }

    logout(){
        console.log("logout");
        firebase.auth().signOut().then(() =>{
            this.token = "";
            console.log("dentro de signout")
            this.router.navigate(['login']);
        }).catch((error: any) => console.log(error));
    }
    
}
