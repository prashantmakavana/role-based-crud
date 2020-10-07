import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormPageComponent } from './reactive-form-page.component';


const routes: Routes = [
  {
    path: '',
    component: ReactiveFormPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormPageRoutingModule { }