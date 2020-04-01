import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ItemsComponent } from './components/items/items.component';



const routes: Routes = [
  {
    path: 'consumer', component: MasterComponent, children: [{ path: 'items', component: ItemsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
