import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { HelperServiceService } from 'src/app/services/helper-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { PrefeStorageService } from 'src/app/services/prefe-storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(private router:Router, public fb: FormBuilder, private helperService:HelperServiceService, public auth : AuthService,
    private prefeStorageService: PrefeStorageService) { 
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

     let correo = f.correo;
     let nombre = f.nombre;
     let pass = f.pass;

    this.auth.registrarUsuario(correo, pass)
    .then((res)=>{
      this.helperService.showAlert("Usuario registrado correctamente", "Exito");
      let usuario = {
        correo: correo,
        nombre: nombre,
        pass: pass
      }
      this.prefeStorageService.agregarValor("usuariosRegistrados", JSON.stringify(usuario));
      this.router.navigateByUrl("login");
    })

    //localStorage.setItem('user', JSON.stringify(user));
    //this.router.navigateByUrl("login");

  }

  logOut(){
    this.auth.salir();
  }
}
