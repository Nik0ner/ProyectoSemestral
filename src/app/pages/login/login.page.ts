import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperServiceService } from 'src/app/services/helper-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasena:string = "";


  constructor(private router:Router, private helperService:HelperServiceService) { }

  ngOnInit() {
  }

  login(){
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
      // alert("Login correcto.");
      this.router.navigateByUrl("home");
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
