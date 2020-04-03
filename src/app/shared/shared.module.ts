import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [AlertComponent, LogOutComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AlertComponent,
    LogOutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
