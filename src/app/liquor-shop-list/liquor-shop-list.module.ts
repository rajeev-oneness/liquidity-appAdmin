import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiquorShopListPageRoutingModule } from './liquor-shop-list-routing.module';

import { LiquorShopListPage } from './liquor-shop-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiquorShopListPageRoutingModule
  ],
  declarations: [LiquorShopListPage]
})
export class LiquorShopListPageModule {}
