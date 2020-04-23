import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AteliersComponent } from './ateliers/ateliers.component';

const routes: Routes = [
  { path: '', component : AteliersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AteliersRoutingModule { }
