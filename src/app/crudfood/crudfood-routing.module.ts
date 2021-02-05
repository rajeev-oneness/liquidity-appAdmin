import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CRUDFoodPage } from './crudfood.page';

const routes: Routes = [
  {
    path: '',
    component: CRUDFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRUDFoodPageRoutingModule {}
