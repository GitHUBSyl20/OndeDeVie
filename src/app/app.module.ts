import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { YogaComponent } from './yoga/yoga.component';
import { SoinsComponent } from './soins/soins.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { InitiationComponent } from './initiation/initiation.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    YogaComponent,
    SoinsComponent,
    AteliersComponent,
    TarifsComponent,
    EvenementsComponent,
    InitiationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
