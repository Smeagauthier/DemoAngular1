import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {

  constructor(private clientService:ClientsService) {

  }

  ngOnInit(): void {
    this.onSearchById(1);
  }

  onSearchById(idclient:number) {
    this.clientService.getClient(idclient).subscribe({
      next:data=>alert(data.nom),
      error:error=>alert(error)
    })
  }

}
