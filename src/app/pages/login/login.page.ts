import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { HelperServiceService } from 'src/app/services/helper-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasena:string = "";

  formularioLogin: FormGroup;


  constructor(private router:Router ,private helperService:HelperServiceService, private formBuilder: FormBuilder) { 

    this.formularioLogin = this.formBuilder.group({
      'correo': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
      'pass': new FormControl("",Validators.required)
    });

  }

  ngOnInit() {
  }

  ingresar() {

    const f = this.formularioLogin.value;  
    const usuario = localStorage.getItem('user');

  if(f.correo === 'admin' && f.pass === '123') {
    console.log('Bienvenido administrador!');
    this.router.navigateByUrl("/home");
    return;
  }

  if(!usuario) {
    this.helperService.showAlert("Usuario no existente", "Advertencia");
    return;
  }

  const user = JSON.parse(usuario);

  if(user.correo !== f.correo) {
    this.helperService.showAlert("Nombre de usuario incorrecto", "Advertencia");
    return;
  }

  if(user.pass !== f.pass) {
    this.helperService.showAlert("Contrasena incorrecta", "Advertencia");
    return; 
  }

  console.log('Login correcto');
  this.router.navigateByUrl("/home");

  }

  admin(){

    if (this.email == "") {
      //alert("Debe ingresar un email.");
      this.helperService.showAlert("Debe ingresar un email", "Advertencia");
      return;
    }
    if (this.contrasena == "") {
      alert("Debe ingresar una contraseña.")
      return;
    }
    
    if (this.email == "micorreo" && this.contrasena == "123") {
      //alert("Login correcto.");
      this.router.navigateByUrl('home');
    }else{
      alert("Crdeneciales no validas.");
    }

  }

  RecuperarPass(){
    this.router.navigateByUrl("/recuperar-pass");
  }

  Registro(){
    this.router.navigateByUrl("/registro")
  }
}
