import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateServPageRoutingModule } from './update-serv-routing.module';

import { UpdateServPage } from './update-serv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateServPageRoutingModule
  ],
  declarations: [UpdateServPage]
})
export class UpdateServPageModule {}
