import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conservacion-suelos-biodiversidad',
  templateUrl: './conservacion-suelos-biodiversidad.component.html',
  styleUrls: ['./conservacion-suelos-biodiversidad.component.css']
})
export class ConservacionSuelosBiodiversidadComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
