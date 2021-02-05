import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquiryListPageRoutingModule } from './enquiry-list-routing.module';

import { EnquiryListPage } from './enquiry-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquiryListPageRoutingModule
  ],
  declarations: [EnquiryListPage]
})
export class EnquiryListPageModule {}
