import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassRecuperadaPage } from './pass-recuperada.page';

const routes: Routes = [
  {
    path: '',
    component: PassRecuperadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassRecuperadaPageRoutingModule {}
