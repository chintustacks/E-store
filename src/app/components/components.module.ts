import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardListComponent
  ],
  exports:[
    CardListComponent
  ]
})
export class ComponentsModule { }
