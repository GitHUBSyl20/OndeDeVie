import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AccueilComponent } from './accueil/accueil.component';
import { YogaComponent } from './yoga/yoga.component';
import { InitiationComponent } from './initiation/initiation.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { SoinsComponent } from './soins/soins.component';

const routes: Routes = [
  { path: "", redirectTo: "presentation", pathMatch: "full" },
  { path: "accueil", component: AccueilComponent },
  { path: "soins", component: SoinsComponent },
  { path: "initiation", component: InitiationComponent },
  { path: "yoga", component: YogaComponent },
  { path: "ateliers", component: AteliersComponent }, 
  { path: "tarifs", component: TarifsComponent },
  { path: "evenement", component: EvenementsComponent },
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
