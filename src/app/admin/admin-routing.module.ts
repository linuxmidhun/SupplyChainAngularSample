import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ItemsComponent } from './components/items/items.component';
import { ConsumerListComponent } from './components/consumer-list/consumer-list.component';
import { SupplierListComponent } from './components/supplier-list/supplier-list.component';
import { AuthGuard } from '../_helpers/auth.guard';
import { Role } from '../_models/role';
import { ItemAddComponent } from './components/item-add/item-add.component';


const routes: Routes = [
  {
    path: 'admin', component: MasterComponent, children: [
      {
        path: 'items', component: ItemsComponent, children: [
          { path: 'add', component: ItemAddComponent }
        ]
      },
      { path: 'add-item', component: ItemAddComponent },
      { path: 'consumers', component: ConsumerListComponent },
      { path: 'suppliers', component: SupplierListComponent }
    ], canActivate: [AuthGuard], data: { roles: [Role.Admin] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
