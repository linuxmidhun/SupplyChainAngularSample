import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AngularMaterialModule } from '../angular-material.module';
// import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [LogInComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // FlexLayoutModule
  ],
  providers: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
