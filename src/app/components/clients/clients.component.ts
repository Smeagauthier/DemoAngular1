import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientsService:ClientsService) { }

  ngOnInit(): void {
    this.onSearchById(1);
  }

  onSearchById(idclient:number) {
    this.clientsService.getClient(idclient).subscribe({
      next:data=>alert(data.nom),
      error:error=>alert(error)
    })
  }

}
