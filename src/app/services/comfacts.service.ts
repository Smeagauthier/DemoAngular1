import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Client} from "../entities/client.entities";
import {Comfact} from "../entities/comfact.entities";

@Injectable({providedIn: "root"})
export class ComfactsService {
  private host = environment.host

  constructor(private httpClient: HttpClient) {

  }

  getCommande(numcommande: number): Observable<Comfact> {
    return this.httpClient.get<Comfact>(this.host + "/comfact/" + numcommande);
  }
}
