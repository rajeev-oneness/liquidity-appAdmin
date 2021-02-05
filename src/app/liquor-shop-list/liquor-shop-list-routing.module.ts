import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquorShopListPage } from './liquor-shop-list.page';

const routes: Routes = [
  {
    path: '',
    component: LiquorShopListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiquorShopListPageRoutingModule {}
