import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { HelperServiceService } from 'src/app/services/helper-service.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(private router:Router, public fb: FormBuilder, private helperService:HelperServiceService) { 
    this.formularioRegistro = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
      'pass': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  guardar() {
  
    const f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      this.helperService.showAlert("Debe ingresar un email", "Advertencia");
      return;
    }

    const user = {
      correo: f.correo,
      nombre: f.nombre,
      pass: f.pass 
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl("login");

  }


  logOut(){
    this.router.navigateByUrl("login");
  }

}
