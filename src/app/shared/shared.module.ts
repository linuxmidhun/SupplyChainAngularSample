import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FeaturedItemsComponent } from './components/featured-items/featured-items.component';



@NgModule({
  declarations: [AlertComponent, LogOutComponent, FeaturedItemsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AlertComponent,
    LogOutComponent,
    FeaturedItemsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
