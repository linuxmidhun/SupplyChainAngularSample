import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { MasterComponent } from './components/master/master.component';
import { ItemsComponent } from './components/items/items.component';
import { AngularMaterialModule } from '../angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MasterComponent, ItemsComponent],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [MasterComponent],
  exports: [ItemsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConsumerModule { }
