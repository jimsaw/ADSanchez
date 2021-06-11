import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proyectos-inversion',
  templateUrl: './proyectos-inversion.component.html',
  styleUrls: ['./proyectos-inversion.component.css']
})
export class ProyectosInversionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
