import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ConsumerModule } from './consumer/consumer.module';
import { SupplierModule } from './supplier/supplier.module';

const routes: Routes = [
  { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [AuthModule, AdminModule, ConsumerModule, SupplierModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
