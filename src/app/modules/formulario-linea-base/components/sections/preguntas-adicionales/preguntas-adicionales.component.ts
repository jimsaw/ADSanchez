import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preguntas-adicionales',
  templateUrl: './preguntas-adicionales.component.html',
  styleUrls: ['./preguntas-adicionales.component.css']
})
export class PreguntasAdicionalesComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  hayAreaLibre: string;
  necesitaRehab: string;
  opciones: string[] = ["SI", "NO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
