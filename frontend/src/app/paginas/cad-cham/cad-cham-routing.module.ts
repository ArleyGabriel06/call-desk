import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadChamPage } from './cad-cham.page';

const routes: Routes = [
  {
    path: '',
    component: CadChamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadChamPageRoutingModule {}
