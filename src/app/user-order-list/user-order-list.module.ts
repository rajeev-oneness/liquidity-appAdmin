import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserOrderListPageRoutingModule } from './user-order-list-routing.module';

import { UserOrderListPage } from './user-order-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserOrderListPageRoutingModule
  ],
  declarations: [UserOrderListPage]
})
export class UserOrderListPageModule {}
