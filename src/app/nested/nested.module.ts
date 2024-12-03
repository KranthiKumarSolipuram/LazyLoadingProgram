import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedRoutingModule } from './nested-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    CommonModule,
    NestedRoutingModule
  ]
})
export class NestedModule { }
