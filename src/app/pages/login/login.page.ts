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

  RecuperarPass(){
    this.router.navigateByUrl("/recuperar-pass");
  }

  Registro(){
    this.router.navigateByUrl("/registro")
  }
}
