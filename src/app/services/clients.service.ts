import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Client} from "../entities/client.entities"; // environment.prod si on veut passer en mode prod

@Injectable({providedIn:"root"})
export class ClientsService{
  private host = environment.host

  constructor(private httpClient:HttpClient) {
  }

  getClient(idClient:number):Observable<Client> {
    return this.httpClient.get<Client>(this.host+"/clients/"+idClient);
  }
}

