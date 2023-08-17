import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KanbanadmPage } from './kanbanadm.page';

const routes: Routes = [
  {
    path: '',
    component: KanbanadmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KanbanadmPageRoutingModule {}
