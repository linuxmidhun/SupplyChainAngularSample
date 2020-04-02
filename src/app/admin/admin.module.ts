import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MasterComponent } from './components/master/master.component';
import { ItemsComponent } from './components/items/items.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
  declarations: [MasterComponent, ItemsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class AdminModule { }
