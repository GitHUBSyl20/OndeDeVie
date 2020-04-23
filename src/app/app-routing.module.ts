import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { YogaComponent } from './yoga/yoga.component';
import { InitiationComponent } from './initiation/initiation.component';
import { AteliersComponent } from './ateliers/ateliers/ateliers.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { SoinsComponent } from './soins/soins.component';
import { SoinsChamaniquesComponent } from './soins-chamaniques/soins-chamaniques.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'soins', component: SoinsComponent },
  { path: 'soins-chamaniques', component: SoinsChamaniquesComponent },
  { path: 'initiations', component: InitiationComponent },
  { path: 'yoga', component: YogaComponent },
/*   { path: 'ateliers',
    loadChildren : () =>
    import ('./ateliers/ateliers.module').then (m => m.AteliersModule)
  }, */
  { path: 'ateliers', component: AteliersComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'evenements', component: EvenementsComponent },
  { path: 'temoignages', component: TemoignagesComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
