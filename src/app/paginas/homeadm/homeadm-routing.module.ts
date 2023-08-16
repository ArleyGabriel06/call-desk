import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeadmPage } from './homeadm.page';

const routes: Routes = [
  {
    path: '',
    component: HomeadmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeadmPageRoutingModule {}
