import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CRUDFoodPageRoutingModule } from './crudfood-routing.module';

import { CRUDFoodPage } from './crudfood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CRUDFoodPageRoutingModule
  ],
  declarations: [CRUDFoodPage]
})
export class CRUDFoodPageModule {}
