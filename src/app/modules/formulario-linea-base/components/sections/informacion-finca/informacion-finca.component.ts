import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-informacion-finca',
  templateUrl: './informacion-finca.component.html',
  styleUrls: ['./informacion-finca.component.css']
})
export class InformacionFincaComponent implements OnInit, AfterViewInit {
  @Input()
  public parentForm: FormGroup;

  public informacionFinca: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.informacionFinca = this.formBuilder.group({
      provincia: new FormControl(''),
      canton: new FormControl(''),
      parroquia: new FormControl(''),
      recinto: new FormControl(''),
      nombreFinca: new FormControl(''),
      descripcionLlegarFinca: new FormControl('')
    });
   }

  ngOnInit(): void {

  }
  
  ngAfterViewInit(): void {

  }

  onSubmit() {
    console.log("GUARDANDO INFORMACION FINCA");
  }

  get seccion(): any {
    return {
      preguntas: {
        provincia: {
          respuesta: this.informacionFinca.value.provincia
        },
        canton: {
          respuesta: this.informacionFinca.value.canton
        },
        parroquia: {
          respuesta: this.informacionFinca.value.parroquia
        },
        recinto: {
          respuesta: this.informacionFinca.value.recinto
        },
        nombreFinca: {
          respuesta: this.informacionFinca.value.nombreFinca
        },
        descripcionLlegarFinca: {
          respuesta: this.informacionFinca.value.descripcionLlegarFinca
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.informacionFinca.get('provincia')
      .setValue(formularioLineaBase.secciones.informacionFinca.preguntas.provincia.respuesta);
    this.informacionFinca.get('canton')
      .setValue(formularioLineaBase.secciones.informacionFinca.preguntas.canton.respuesta);
    this.informacionFinca.get('parroquia')
      .setValue(formularioLineaBase.secciones.informacionFinca.preguntas.parroquia.respuesta);
    this.informacionFinca.get('recinto')
      .setValue(formularioLineaBase.secciones.informacionFinca.preguntas.recinto.respuesta);
    this.informacionFinca.get('nombreFinca')
      .setValue(formularioLineaBase.secciones.informacionFinca.preguntas.nombreFinca.respuesta);
    this.informacionFinca.get('descripcionLlegarFinca')
      .setValue(formularioLineaBase.secciones.informacionFinca.preguntas.descripcionLlegarFinca.respuesta);
  }
  
}
