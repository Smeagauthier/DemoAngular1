import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {Client} from "../../entities/client.entities";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comfact} from "../../entities/comfact.entities";
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
  comTrouv ?: Comfact;
  submitted = false;

  clientFormGroup?: FormGroup;
  comfactFormGroup?: FormGroup;

  constructor(private clientService: ClientsService, private fb: FormBuilder, private comfactService: ComfactsService) {
  }


  ngOnInit(): void {
    this.clientFormGroup = this.fb.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      tel: ["+(32)(0)", Validators.required]
    })
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
      error: error => {
        alert("erreur ");
        this.client = null;
      }
    })
  }

  saveClient() {
    this.submitted = true;
    if (this.clientFormGroup?.invalid) alert("Encodage invalide");
    else {
      alert(this.clientFormGroup?.value.nom + " " +
        this.clientFormGroup?.value.prenom + " "
        + this.clientFormGroup?.value.tel);
    }
  }

  rechercheParID(value: any) {
    let numero: number = value.idclient;
    this.clientService.getClient(numero).subscribe({
      next: data => {
        this.client = data;
        this.clientFormGroup = this.fb.group(
          {
            nom: [data.nom, Validators.required],
            prenom: [data.prenom, Validators.required],
            tel: [data.tel, Validators.required]
          }
        )
      },
      error: error => {
        alert("erreur ");
        this.client = null
      }
    })
  }

  majClient() {
    this.submitted = true;
    if (this.clientFormGroup?.invalid) {
      return
    }
    alert("maj OK");
  }

  rechercheComParID(value: any) {
    this.comfactService.search(value.idcom).subscribe({
        next: data => {
          this.comfactFormGroup = this.fb.group(
            {
              etat: [data.etat, [Validators.required, Validators.pattern("^(C|F|P)$")]],
              montant: [data.montant, Validators.required],
            }
          )
        },
        error: error => alert("commande introuvable")
      }
    )
  }
}
