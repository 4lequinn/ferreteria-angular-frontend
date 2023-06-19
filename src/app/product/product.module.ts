import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
