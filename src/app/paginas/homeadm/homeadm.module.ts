import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeadmPageRoutingModule } from './homeadm-routing.module';

import { HomeadmPage } from './homeadm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeadmPageRoutingModule
  ],
  declarations: [HomeadmPage]
})
export class HomeadmPageModule {}
