import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {
  
  parametronumeroUno:number | undefined;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.parametronumeroUno = this.activatedRoute.snapshot.params['num'];
    console.log("parametro: ", this.parametronumeroUno);
  }

  logOut(){
    this.router.navigateByUrl('home');
    //localStorage.removeItem('user');
  }

}
