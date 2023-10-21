import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth : AngularFireAuth) { }

  async login(email:string, password:string){
    return await this.auth.signInWithEmailAndPassword(email,password);
  }

  async registrarUsuario(email:string, password:string){
    return await this.auth.createUserWithEmailAndPassword(email,password);
  }

  async salir(){
    return await this.auth.signOut();
  }

  async resetPassword(email:string){
    return await this.auth.sendPasswordResetEmail(email);
  }
}
