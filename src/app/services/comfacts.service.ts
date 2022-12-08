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

  deleteComfact(c: Comfact): Observable<void> {
    return this.httpClient.delete<void>(this.host + '/comfacts/' + c.numcommande);
  }

  save(c: Comfact, cl: Client): Observable<Comfact> {
    c.client = cl;
    return this.httpClient.post<Comfact>(this.host + '/comfacts/', c);
  }

  updateComfact(c: Comfact): Observable<Comfact> {
    return this.httpClient.put<Comfact>(this.host + '/comfacts/' + c.numcommande, c);
  }

  getComfactsClient(idClient: number): Observable<Comfact[]> {
    return this.httpClient.get<Comfact[]>(this.host + '/comfacts/idclient=' + idClient);
  }

  search(id:number):Observable<Comfact>{
    return this.httpClient.get<Comfact>(this.host+"/comfacts/"+id);
  }

}
