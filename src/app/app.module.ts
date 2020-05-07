import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { YogaComponent } from './yoga/yoga.component';
import { SoinsComponent } from './soins/soins.component';
import { AteliersComponent } from './ateliers/ateliers/ateliers.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { InitiationComponent } from './initiation/initiation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SoinsChamaniquesComponent } from './soins-chamaniques/soins-chamaniques.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';
import { NavigationSideComponent } from './navigation-side/navigation-side.component';



@NgModule({
  declarations: [
    SoinsChamaniquesComponent,
    AppComponent,
    AccueilComponent,
    YogaComponent,
    SoinsComponent,
    AteliersComponent,
    TarifsComponent,
    EvenementsComponent,
    InitiationComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    SoinsChamaniquesComponent,
    ContactInfoComponent,
    PageNotFoundComponent,
    TemoignagesComponent,
    NavigationSideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
