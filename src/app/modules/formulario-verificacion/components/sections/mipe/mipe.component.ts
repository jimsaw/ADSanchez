import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mipe',
  templateUrl: './mipe.component.html',
  styleUrls: ['./mipe.component.css']
})
export class MIPEComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  MIPE: FormGroup;

  yesNoAnswer: string[];
  tipoControl: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.MIPE = this.formBuilder.group({
      realizaPracticasMPE: new FormControl(''),
      tipoControlMPE: new FormControl(''),
      corrigioProblemasMPE: new FormControl(''),
      fincaLibreAplicacionQuimica: new FormControl(''),
      controlaEnfermedades: new FormControl(''),
      reduccionIncidenciaPlagasEnfermedades: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoControl = environment.constantes.formularioVerificacion.mipeTipoControl;
  }

  onSubmit() {

  }

  realizaPracticasMPE(): boolean {
    return this.MIPE.get('realizaPracticasMPE').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        realizaPracticasMPE: {
          respuesta: this.MIPE.value.realizaPracticasMPE,
          preguntas: {
            tipoControlMPE: {
              respuesta: this.MIPE.value.tipoControlMPE
            }
          }
        },
        corrigioProblemasMPE: {
          respuesta: this.MIPE.value.corrigioProblemasMPE
        },
        fincaLibreAplicacionQuimica: {
          respuesta: this.MIPE.value.fincaLibreAplicacionQuimica
        },
        controlaEnfermedades: {
          respuesta: this.MIPE.value.controlaEnfermedades
        },
        reduccionIncidenciaPlagasEnfermedades: {
          respuesta: this.MIPE.value.reduccionIncidenciaPlagasEnfermedades
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.MIPE.get('realizaPracticasMPE')
      .setValue(formularioVerificacion.secciones.MIPE.preguntas.realizaPracticasMPE.respuesta);
    this.MIPE.get('tipoControlMPE')
      .setValue(formularioVerificacion.secciones.MIPE.preguntas.realizaPracticasMPE.preguntas.tipoControlMPE.respuesta);
    this.MIPE.get('corrigioProblemasMPE')
      .setValue(formularioVerificacion.secciones.MIPE.preguntas.corrigioProblemasMPE.respuesta);
    this.MIPE.get('fincaLibreAplicacionQuimica')
      .setValue(formularioVerificacion.secciones.MIPE.preguntas.fincaLibreAplicacionQuimica.respuesta);
    this.MIPE.get('controlaEnfermedades')
      .setValue(formularioVerificacion.secciones.MIPE.preguntas.controlaEnfermedades.respuesta);
    this.MIPE.get('reduccionIncidenciaPlagasEnfermedades')
      .setValue(formularioVerificacion.secciones.MIPE.preguntas.reduccionIncidenciaPlagasEnfermedades.respuesta);
  }

}
