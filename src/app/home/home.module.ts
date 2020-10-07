import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { 
  constructor(){
     console.log("home Module");
  }
}
