import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLiquorPage } from './add-liquor.page';

const routes: Routes = [
  {
    path: '',
    component: AddLiquorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLiquorPageRoutingModule {}
