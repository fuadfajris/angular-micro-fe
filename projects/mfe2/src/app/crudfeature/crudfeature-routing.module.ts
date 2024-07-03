import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudfeatureComponent } from './crudfeature.component';

const routes: Routes = [
  {
    path: '',
    component: CrudfeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudfeatureRoutingModule { }
