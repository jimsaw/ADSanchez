import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diversificacion-ingresos',
  templateUrl: './diversificacion-ingresos.component.html',
  styleUrls: ['./diversificacion-ingresos.component.css']
})
export class DiversificacionIngresosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
