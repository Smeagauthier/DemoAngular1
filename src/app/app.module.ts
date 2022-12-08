import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ExercicesComponent } from './components/exercices/exercices.component';
import { NewclientComponent } from './components/newclient/newclient.component';
import { EditclientComponent } from './components/editclient/editclient.component';
import { EditcommandeComponent } from './components/editcommande/editcommande.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    ClientsComponent,
    CommandesComponent,
    ExercicesComponent,
    NewclientComponent,
    EditclientComponent,
    EditcommandeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
