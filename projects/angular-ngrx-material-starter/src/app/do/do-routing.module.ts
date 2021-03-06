import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test1',
    pathMatch: 'full'
  },
  {
    path: 'test1',
    component: Test1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoRoutingModule { }
