import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { MasterComponent } from './components/master/master.component';
import { ItemsComponent } from './components/items/items.component';
import { AngularMaterialModule } from '../angular-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MasterComponent, ItemsComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class SupplierModule { }
