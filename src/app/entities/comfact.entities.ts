import {Client} from './client.entities';

export interface Comfact {
  numcommande : number;
  numfact :number;
  datecom:string;
  etat:string;
  montant:number
  client:Client
}
