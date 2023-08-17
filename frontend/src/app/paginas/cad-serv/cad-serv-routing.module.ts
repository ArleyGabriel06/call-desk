import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadServPage } from './cad-serv.page';

const routes: Routes = [
  {
    path: '',
    component: CadServPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadServPageRoutingModule {}
