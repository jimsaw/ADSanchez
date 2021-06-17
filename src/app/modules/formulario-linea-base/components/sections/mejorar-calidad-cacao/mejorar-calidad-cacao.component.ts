import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mejorar-calidad-cacao',
  templateUrl: './mejorar-calidad-cacao.component.html',
  styleUrls: ['./mejorar-calidad-cacao.component.css']
})
export class MejorarCalidadCacaoComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  proyectos: string[] = [
    "BANDEJAS O CAJONES DE FERMENTACION",
    "TENDALES ELEVADOS DE CAÑA",
    "SECADORAS COMUNITARIAS"
  ];

  opciones: string[] = [
    "SI", "NO"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
