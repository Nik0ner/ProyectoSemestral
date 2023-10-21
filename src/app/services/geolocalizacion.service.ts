import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  constructor(public toastCon : ToastController) { }

  async obtenerPosicion() {
    let valor = await Geolocation.getCurrentPosition().then((valor) => {
      let posicion = "Actualmente me encuentro en: " + valor.coords.latitude + ", " + valor.coords.longitude;
      return posicion;
    });
    return valor;
  }

  async mostrarPosicion(valor : string) {
    const toast = await this.toastCon.create({
      message: valor,
      duration: 3000,
      position: 'bottom',
    });

    await toast.present();
  }
} 
  
  

