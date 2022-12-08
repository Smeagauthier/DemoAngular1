import {Component, Input, OnInit} from '@angular/core';
import {ComfactsService} from '../../services/comfacts.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comfact} from "../../entities/comfact.entities";

@Component({
  selector: 'app-editcommande',
  templateUrl: './editcommande.component.html',
  styleUrls: ['./editcommande.component.css']
})
export class EditcommandeComponent implements OnInit {
  comfactFormGroup?: FormGroup;
  submitted = false;
  @Input() comfact?: Comfact;
  deleted = false;

  constructor(private comfactService: ComfactsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.comfactFormGroup = this.fb.group({
      numcommande: [this.comfact?.numcommande],
      numfact: [this.comfact?.numfact, [Validators.required, Validators.min(1)]],
      datecom: [this.comfact?.datecom, Validators.required],
      etat: [this.comfact?.etat, [Validators.required, Validators.pattern("^(C|F|P)$")]],
      montant: [this.comfact?.montant, [Validators.required, Validators.min(0)]]
    });
  }

  onUpdateComfact(): void {
    this.submitted = true;
    if (this.comfactFormGroup?.invalid) {
      return;
    }
    let comfactmaj: Comfact = this.comfactFormGroup?.value;
    if (this.comfact) {//permet de s'assurer que la commande a bien une valeur et évite les avertissements "possiblement indéfini"
      comfactmaj.client = this.comfact.client; //car le formulaire ne donne une valeur qu' aux champs propres de la commande
      this.comfactService.updateComfact(comfactmaj).subscribe({
        next: data => alert('maj ok'),
        error: err => alert(err.headers.get("error"))
      })
    }
  }

  onDeleteComfact() {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.comfactService.deleteComfact(this.comfactFormGroup?.value).subscribe(data => {
          alert('effacement ok');
          this.deleted = true;
        },
        err => {
          alert(err.headers.get("error"));
        });
    }
  }
}
