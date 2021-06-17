import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hectareaje',
  templateUrl: './hectareaje.component.html',
  styleUrls: ['./hectareaje.component.css']
})
export class HectareajeComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  hectareajeTipoTerreno;
  hectareajeCultivoCacao;
  hectareajeAsociadoConTiene;
  hectareajeDistanciaPlantas;
  hectareajeTipoUbicacionZona;

  otrosAsociados: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.hectareajeTipoTerreno = environment.constantes.formularioLineaBase.hectareajeTipoTerreno;
    this.hectareajeCultivoCacao = environment.constantes.formularioLineaBase.hectareajeCultivoCacao;
    this.hectareajeAsociadoConTiene = environment.constantes.formularioLineaBase.hectareajeAsociadoConTiene;
    this.hectareajeDistanciaPlantas = environment.constantes.formularioLineaBase.hectareajeDistanciaPlantas;
    this.hectareajeTipoUbicacionZona = environment.constantes.formularioLineaBase.hectareajeTipoUbicacionZona;
  }

  onSubmit() {
  }

  otroSelected(): boolean {
    const otrosSelected = this.parentForm.get('hectareaje').get('asociadoConTiene').value;
    return otrosSelected.includes('OTRO');
  }

}
