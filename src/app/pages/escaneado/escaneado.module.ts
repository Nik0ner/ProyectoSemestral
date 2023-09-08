import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscaneadoPageRoutingModule } from './escaneado-routing.module';

import { EscaneadoPage } from './escaneado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscaneadoPageRoutingModule
  ],
  declarations: [EscaneadoPage]
})
export class EscaneadoPageModule {}
