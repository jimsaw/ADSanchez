import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../core/services/formulario/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    private formularioService: FormularioService
  ) { }

  ngOnInit(): void {
  }

}
