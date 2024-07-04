import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudfeatureRoutingModule } from './crudfeature-routing.module';
import { CrudfeatureComponent } from './crudfeature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudfeatureComponent
  ],
  imports: [
    CommonModule,
    CrudfeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrudfeatureModule { }
