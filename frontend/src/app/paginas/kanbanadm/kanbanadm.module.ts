import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KanbanadmPageRoutingModule } from './kanbanadm-routing.module';

import { KanbanadmPage } from './kanbanadm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KanbanadmPageRoutingModule
  ],
  declarations: [KanbanadmPage]
})
export class KanbanadmPageModule {}
