import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormPageRoutingModule } from './reactive-form-page-routing.module';
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormPageRoutingModule
  ]
})
export class ReactiveFormPageModule {
  constructor(){
     console.log("reactive form Module");
  }
 }
