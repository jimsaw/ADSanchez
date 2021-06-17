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

  opciones: string[] = ["SI", "NO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayAreaLibre() {
    const hayAreaLibre = this.parentForm.get('preguntasAdicionales').get('tieneAreaLibreParaSembrar').value;
    return hayAreaLibre === 'SI';
  }

  necesitaRehab() {
    const necesitaRehab = this.parentForm.get('preguntasAdicionales').get('necesitaRehaReinjerto').value;
    return necesitaRehab === 'SI';
  }

}
