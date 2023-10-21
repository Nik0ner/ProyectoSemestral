import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PrefeStorageService {

  constructor() { }

  async guardarValor(clave: string, valor: string) {
    let lista = [];
    let valorObjeto = JSON.parse(valor);
    lista.push(valorObjeto);
    await Preferences.set({ key: clave, value: JSON.stringify(lista) });
  }

  async agregarValor(clave: string, valor: string) {
    let lista = await Preferences.get({ key: clave });
    if (lista.value) {
      let listaObjeto = JSON.parse(lista.value);
      let valorObjeto = JSON.parse(valor);
      listaObjeto.push(valorObjeto);
      await Preferences.set({ key: clave, value: JSON.stringify(listaObjeto) });
    } else {
      let lista = [];
      let valorObjeto = JSON.parse(valor);
      lista.push(valorObjeto);
      await Preferences.set({ key: clave, value: JSON.stringify(lista) });
    }
  }

  async obtenerValor(clave: string) {
    let valor = await Preferences.get({ key: clave });
    return valor.value;
  }


  async eliminarValor(clave: string) {
    await Preferences.remove({ key: clave });
  }

}
