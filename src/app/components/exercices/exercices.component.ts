import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {Client} from "../../entities/client.entities";
import {Comfact} from "../../entities/comfact.entities";
import {Observable} from "rxjs";
import {ComfactsService} from "../../services/comfacts.service";

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {
  client: Client | null = null;
  numrech: number = 0;
  nom: String = "";
  clistrouv?: Client[];

  constructor(private clientService: ClientsService, private comfactService: ComfactsService) {
  }


  ngOnInit(): void {
    this.onSearchById(1);
  }

  onSearchById(idclient: number) {
    this.clientService.getClient(idclient).subscribe({
      next: data => this.client = data,
      error: error => alert(error)
    })
  }

  recherche() {
    this.client = null;
    this.clientService.getClient(this.numrech).subscribe({
      next: data => this.client = data,
      error: error => alert("erreur " + error.headers.get("error"))
    })
  }

  rechParForm(value: any) {
    this.client = null;
    let numero: number = value.numero;
    this.clientService.getClient(numero).subscribe({
      next: data => this.client = data,
      error: error => {
        alert("erreur ");
        this.client = null;
      }
    })
  }

  rechercheParNom(value: any) {
    this.clientService.getClientNom(value.nom).subscribe({
      next: data => {
        this.clistrouv = data
      }
    })
  }

  effacer(c: Client) {
    this.clientService.deleteClient(c).subscribe({
      next: data => {
        alert("record effacé");
        //this.rechercheParNom(c);},
        const index = this.clistrouv?.indexOf(c, 0);
        if (!(index === undefined) && index > -1) {
          this.clistrouv?.splice(index, 1);
        }
      },
      error: error => {alert("erreur ");this.client = null;}
    })
  }



}
