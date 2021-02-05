import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CRUDFooDCategoryPage } from './crudfoo-dcategory.page';

const routes: Routes = [
  {
    path: '',
    component: CRUDFooDCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRUDFooDCategoryPageRoutingModule {}
