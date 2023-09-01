import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassRecuperadaPageRoutingModule } from './pass-recuperada-routing.module';

import { PassRecuperadaPage } from './pass-recuperada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassRecuperadaPageRoutingModule
  ],
  declarations: [PassRecuperadaPage]
})
export class PassRecuperadaPageModule {}
