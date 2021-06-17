import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conservacion-recursos-manejo-desechos',
  templateUrl: './conservacion-recursos-manejo-desechos.component.html',
  styleUrls: ['./conservacion-recursos-manejo-desechos.component.css']
})
export class ConservacionRecursosManejoDesechosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  opciones: string[] = ["SI", "NO"];

  lugarDesecho: string[] = [];
  lugaresDesecho: string[] = ["SERVICIO HIGIÉNICO", "POZO SÉPTICO", "LETRINA", "NINGUNO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayEspacio() {
    const hayEspacio = this.parentForm.get('conservacionRecursosManejoDesechos').get('cultivaVegetalesHortalizasFrutas').value;
    return hayEspacio === 'SI';
  }

}
