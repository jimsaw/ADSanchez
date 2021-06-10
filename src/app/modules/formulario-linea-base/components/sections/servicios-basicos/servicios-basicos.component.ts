import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-servicios-basicos',
  templateUrl: './servicios-basicos.component.html',
  styleUrls: ['./servicios-basicos.component.css']
})
export class ServiciosBasicosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  agua: string;
  tiposAgua: string[] = ["POTABLE", "ENTUBADA", "POZO", "VERTIENTE NAT", "LLUVIA", "ESTERO", "RIO", "OTRO"];

  hayEnergia: string;
  opciones: string[] = ["SI", "NO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
