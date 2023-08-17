import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadChamPageRoutingModule } from './cad-cham-routing.module';

import { CadChamPage } from './cad-cham.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadChamPageRoutingModule
  ],
  declarations: [CadChamPage]
})
export class CadChamPageModule {}
