import { Component, OnInit } from '@angular/core';
import {ComfactsService} from "../../services/comfacts.service";
import {Comfact} from "../../entities/comfact.entities";

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  comfact : Comfact|null = null;
  numcommande:number=0;

  constructor(private comfactsService:ComfactsService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.comfact=null;
    this.comfactsService.search(this.numcommande).subscribe({
      next : data => this.comfact=data,
      error : err => alert("Commande introuvable")
    })
  }

}
