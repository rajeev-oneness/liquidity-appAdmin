import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiquorMenuPageRoutingModule } from './liquor-menu-routing.module';

import { LiquorMenuPage } from './liquor-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiquorMenuPageRoutingModule
  ],
  declarations: [LiquorMenuPage]
})
export class LiquorMenuPageModule {}
