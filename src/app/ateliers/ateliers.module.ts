import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AteliersRoutingModule } from './ateliers-routing.module';
import { AteliersComponent } from './ateliers/ateliers.component';

@NgModule({
  declarations: [AteliersComponent],
  imports: [
    CommonModule,
    AteliersRoutingModule
  ]
})

export class AteliersModule { }
