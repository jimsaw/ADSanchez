import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salud-seguridad-ocupacional',
  templateUrl: './salud-seguridad-ocupacional.component.html',
  styleUrls: ['./salud-seguridad-ocupacional.component.css']
})
export class SaludSeguridadOcupacionalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
