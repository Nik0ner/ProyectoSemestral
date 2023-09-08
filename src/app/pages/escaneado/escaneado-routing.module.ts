import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscaneadoPage } from './escaneado.page';

const routes: Routes = [
  {
    path: '',
    component: EscaneadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscaneadoPageRoutingModule {}
