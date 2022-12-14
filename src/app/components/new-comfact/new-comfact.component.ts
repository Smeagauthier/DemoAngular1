import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../entities/client.entities";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Comfact} from "../../entities/comfact.entities";
import {ComfactsService} from "../../services/comfacts.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-new-comfact',
  templateUrl: './new-comfact.component.html',
  styleUrls: ['./new-comfact.component.css']
})
export class NewComfactComponent implements OnInit {
  @Input() cliact?: FormGroup;
  @Output() newComfact = new EventEmitter<Comfact>();
  comfactFormGroup?: FormGroup;
  submitted = false;
  cf?: Comfact;

  constructor(private fb: FormBuilder, private comfactsService:
    ComfactsService) {
  }

  ngOnInit(): void {
    this.comfactFormGroup = this.fb.group({
      datecom: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      etat: ['C'],
      montant: ['0'],
    });
  }

  onSaveComfact(): void {
    this.submitted = true;
    this.comfactsService.save(this.comfactFormGroup?.value, this.cliact?.value).subscribe({
      next: data => {
        alert('sauvegarde OK');
        this.cf = data;
        this.newComfact.emit(data)
      },
      error: err => alert(err.headers.get("error"))
    });
  }

}
