import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ClientsComponent} from "./components/clients/clients.component";
import {CommandesComponent} from "./components/commandes/commandes.component";
import {ExercicesComponent} from "./components/exercices/exercices.component";
import {NewclientComponent} from "./components/newclient/newclient.component";
import {EditclientComponent} from "./components/editclient/editclient.component";

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "clients", component : ClientsComponent},
  {path : "commandes", component : CommandesComponent},
  {path : "exercices", component : ExercicesComponent},
  {path : "newClient", component : NewclientComponent},
  {path : "editClient/:idclient", component : EditclientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
