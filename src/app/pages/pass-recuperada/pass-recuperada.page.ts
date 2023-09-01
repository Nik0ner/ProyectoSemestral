import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pass-recuperada',
  templateUrl: './pass-recuperada.page.html',
  styleUrls: ['./pass-recuperada.page.scss'],
})
export class PassRecuperadaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.router.navigateByUrl("login");
  }

}
