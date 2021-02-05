import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquiryListPage } from './enquiry-list.page';

const routes: Routes = [
  {
    path: '',
    component: EnquiryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnquiryListPageRoutingModule {}
