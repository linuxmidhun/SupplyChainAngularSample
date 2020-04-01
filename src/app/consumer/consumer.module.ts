import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { MasterComponent } from './components/master/master.component';
import { ItemsComponent } from './components/items/items.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
  declarations: [MasterComponent, ItemsComponent],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [MasterComponent],
  exports: [ItemsComponent]
})
export class ConsumerModule { }
