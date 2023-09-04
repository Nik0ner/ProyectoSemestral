import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = '';

  constructor(private router: Router) {
  
    const userString = localStorage.getItem('user');

    if(userString) {
      const user = JSON.parse(userString);
      
      if(user) {
        this.username = user.nombre;
      }
    }

  }

  ngOnInit() {

  }

  logOut(){
    this.router.navigateByUrl('login');
    localStorage.removeItem('user');
  }

  escanear(){
    this.router.navigateByUrl('escanear')
  }

  asistencia(){
    this.router.navigateByUrl('asistencia')
  }

  cuenta(){
    this.router.navigateByUrl('cuenta')
  }


}
