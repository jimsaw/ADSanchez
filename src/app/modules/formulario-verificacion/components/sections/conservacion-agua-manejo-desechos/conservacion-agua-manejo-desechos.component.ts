import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-conservacion-agua-manejo-desechos',
  templateUrl: './conservacion-agua-manejo-desechos.component.html',
  styleUrls: ['./conservacion-agua-manejo-desechos.component.css']
})
export class ConservacionAguaManejoDesechosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  tipoExtraccion;
  infraestructuraRiego;
  impactoRiego;
  disenioRiego;
  filtroEcologicoParaQueUso;
  criterioClasificarBasuraDomestica;
  tratamientoBasura;
  lugarAlmacenamiento;
  frecuencia;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoExtraccion = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosTipoExtraccion;
    this.infraestructuraRiego = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosInfraestructuraRiego;
    this.impactoRiego = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosImpactoRiego;
    this.disenioRiego = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosDisenioRiego;
    this.filtroEcologicoParaQueUso = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosFiltroEcologicoParaQueUso;
    this.criterioClasificarBasuraDomestica = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosCriterioClasificarBasuraDomestica;
    this.tratamientoBasura = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosTratamientoBasura;
    this.lugarAlmacenamiento = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosLugarAlmacenamiento;
    this.frecuencia = environment.constantes.formularioVerificacion.ventaFrecuencia;
  }

  onSubmit() {

  }
}
