import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperServiceService } from 'src/app/services/helper-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  email:string = "";

  constructor(private router:Router,private helperService:HelperServiceService, public auth : AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this.router.navigateByUrl("login");
  }

  PassRecuperada() {
    if (this.email == "") {
      //alert("Debe ingresar un email.");
      this.helperService.showAlert("Debe ingresar un email", "Advertencia");
      return;
    } else {
      this.auth.resetPassword(this.email)
      .then(() => {
      this.router.navigateByUrl("pass-recuperada");
      })
    }
  }
}
