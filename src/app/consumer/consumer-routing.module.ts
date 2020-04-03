import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ItemsComponent } from './components/items/items.component';
import { AuthGuard } from '../_helpers/auth.guard';
import { Role } from '../_models/role';



const routes: Routes = [
  {
    path: 'consumer', component: MasterComponent, children: [
      { path: 'items', component: ItemsComponent }
    ], canActivate: [AuthGuard], data: {roles: [Role.Consumer]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
