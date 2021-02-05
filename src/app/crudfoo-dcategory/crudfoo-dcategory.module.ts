import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CRUDFooDCategoryPageRoutingModule } from './crudfoo-dcategory-routing.module';

import { CRUDFooDCategoryPage } from './crudfoo-dcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CRUDFooDCategoryPageRoutingModule
  ],
  declarations: [CRUDFooDCategoryPage]
})
export class CRUDFooDCategoryPageModule {}
