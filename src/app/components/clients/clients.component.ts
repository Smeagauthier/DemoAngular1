import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientsService} from '../../services/clients.service';
import {Observable} from 'rxjs';
import {Client} from '../../entities/client.entities';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients?: Client[]; //le ? signifie que la valeur undefinied est acceptée
  constructor(private clientsService: ClientsService, private router:
    Router) {
  }

  ngOnInit(): void {
  }

  onSearch(value: any) {
    this.clientsService.getClientNom(value.nom).subscribe(
      {
        next: data => {
          this.clients = data
        }
      });
  }

  onNewClient() {
    this.router.navigateByUrl("newClient")
  } //développé plus tard
  onDelete(c: Client) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.clientsService.deleteClient(c).subscribe(
        {
          next: data => {
            this.onSearch(c); //rafraîchissement de la page actuelle
            //la solution ci-dessous permet de ne pas recharger la liste à partir du backend
            /* const index = this.clients?.indexOf(c, 0); //élement à rechercher, position de départ de la recherche
            alert("index = "+index);
            if (!(index === undefined) && index > -1) {
            this.clients?.splice(index, 1);//position de l'élément à ôter,nombre d'éléments à ôter
            }*/
          },
          error: err => {
            alert(err.headers.get("error"));
          }
        }
      );
    }
  }

  onEdit(c: Client) {
  }//développé plus tard
}
