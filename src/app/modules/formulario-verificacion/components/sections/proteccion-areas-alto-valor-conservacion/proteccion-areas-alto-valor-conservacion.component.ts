import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proteccion-areas-alto-valor-conservacion',
  templateUrl: './proteccion-areas-alto-valor-conservacion.component.html',
  styleUrls: ['./proteccion-areas-alto-valor-conservacion.component.css']
})
export class ProteccionAreasAltoValorConservacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
