import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proteccion-areas-riberenias',
  templateUrl: './proteccion-areas-riberenias.component.html',
  styleUrls: ['./proteccion-areas-riberenias.component.css']
})
export class ProteccionAreasRibereniasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
