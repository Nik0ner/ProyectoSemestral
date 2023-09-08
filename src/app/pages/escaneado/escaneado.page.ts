import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escaneado',
  templateUrl: './escaneado.page.html',
  styleUrls: ['./escaneado.page.scss'],
})
export class EscaneadoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  cancel(){
    var parametroN1 = 123456;
    this.router.navigateByUrl(parametroN1 + '/escanear')
  }

  salir(){
    this.router.navigateByUrl('home')
  }

}
