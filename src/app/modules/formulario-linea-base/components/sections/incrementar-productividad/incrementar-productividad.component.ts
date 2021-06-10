import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-incrementar-productividad',
  templateUrl: './incrementar-productividad.component.html',
  styleUrls: ['./incrementar-productividad.component.css']
})
export class IncrementarProductividadComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  proyectos: string[] = [
    "RECIBIR PLANTAS DE CACAO NACIONAL",
    "APRENDER ELAB. PRODUCTOS NATURALES"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
