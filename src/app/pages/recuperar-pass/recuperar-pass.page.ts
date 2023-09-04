import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperServiceService } from 'src/app/services/helper-service.service';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  email:string = "";

  constructor(private router:Router,private helperService:HelperServiceService) { }

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
    }
    this.router.navigateByUrl("pass-recuperada");
  }

}
