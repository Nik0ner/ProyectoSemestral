import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HelperServiceService } from 'src/app/services/helper-service.service';
import { GeolocalizacionService } from 'src/app/services/geolocalizacion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posicion: string = '';
  
  username: string = '';

  constructor(private router: Router, public auth : AuthService, private helperService:HelperServiceService,
    private geolocalizacionService: GeolocalizacionService) {
  
    const userString = localStorage.getItem('CapacitorStorage.usuariosLogeados');

    if(userString) {
      const user = JSON.parse(userString);
      ;
      if(user) {
        this.username = userString;
      }
    }

  }

  ngOnInit() {
    this.obtenerPosicion();
  }

  async obtenerPosicion() {
    let posicion = await this.geolocalizacionService.obtenerPosicion();
    console.log(posicion);
    if(posicion != null) {
      this.posicion = await posicion;
      this.geolocalizacionService.mostrarPosicion(this.posicion);
    } else {
      this.posicion = "No se pudo obtener la posición";
      this.geolocalizacionService.mostrarPosicion(this.posicion);
    }
  }

  logOut(){
    this.auth.salir()
    .then(() => {
      this.helperService.showAlert("Sesión cerrada", "Advertencia");
      this.router.navigateByUrl("login");
    })
  }

  escanear(){
    var parametroN1 = 123456;
    this.router.navigateByUrl(parametroN1 + '/escanear')
  }

  asistencia(){
    this.router.navigateByUrl('asistencia')
  }

  cuenta(){
    this.router.navigateByUrl('cuenta')
  }


}
