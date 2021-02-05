import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLiquorPageRoutingModule } from './add-liquor-routing.module';

import { AddLiquorPage } from './add-liquor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLiquorPageRoutingModule
  ],
  declarations: [AddLiquorPage]
})
export class AddLiquorPageModule {}
