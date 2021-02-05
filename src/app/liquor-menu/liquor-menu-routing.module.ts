import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquorMenuPage } from './liquor-menu.page';

const routes: Routes = [
  {
    path: '',
    component: LiquorMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiquorMenuPageRoutingModule {}
