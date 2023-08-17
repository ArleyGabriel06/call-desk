import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadServPageRoutingModule } from './cad-serv-routing.module';

import { CadServPage } from './cad-serv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadServPageRoutingModule
  ],
  declarations: [CadServPage]
})
export class CadServPageModule {}
