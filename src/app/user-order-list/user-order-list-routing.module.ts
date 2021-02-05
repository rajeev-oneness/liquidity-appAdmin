import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserOrderListPage } from './user-order-list.page';

const routes: Routes = [
  {
    path: '',
    component: UserOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserOrderListPageRoutingModule {}
