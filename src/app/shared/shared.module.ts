import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { LogOutComponent } from './components/log-out/log-out.component';



@NgModule({
  declarations: [AlertComponent, LogOutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LogOutComponent
  ]
})
export class SharedModule { }
