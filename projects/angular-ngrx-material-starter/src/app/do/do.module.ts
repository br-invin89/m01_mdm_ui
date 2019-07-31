import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DoRoutingModule } from './do-routing.module';
import { Test1Component } from './test1/test1.component';
import { CategoryComponent } from './test1/category/category.component';
import { ValueComponent } from './test1/value/value.component';
import { AddFormComponent } from './test1/category/add-form.component';
import { AddFormComponent as AddFormComponentForValue } from './test1/value/add-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Test1Component, CategoryComponent, ValueComponent, AddFormComponent, AddFormComponentForValue],
  imports: [
    CommonModule,
    DoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DoModule { }
