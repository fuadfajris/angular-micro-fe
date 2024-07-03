import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudfeatureRoutingModule } from './crudfeature-routing.module';
import { CrudfeatureComponent } from './crudfeature.component';


@NgModule({
  declarations: [
    CrudfeatureComponent
  ],
  imports: [
    CommonModule,
    CrudfeatureRoutingModule
  ]
})
export class CrudfeatureModule { }
