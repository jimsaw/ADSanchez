import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informacion-finca',
  templateUrl: './informacion-finca.component.html',
  styleUrls: ['./informacion-finca.component.css']
})
export class InformacionFincaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.form = this.formBuilder.group({
      provincia: new FormControl(''),
      canton: new FormControl(''),
      parroquia: new FormControl(''),
      recinto: new FormControl(''),
      nombreFinca: new FormControl(''),
      descripcionLlegarFinca: new FormControl('')
    });
  }

  onSubmit() {

  }

  getInfo(): any {
    return {
      preguntas: {
        provincia: {
          respuesta: this.form.value.informacionFinca.provincia
        },
        canton: {
          respuesta: this.form.value.informacionFinca.canton
        },
        parroquia: {
          respuesta: this.form.value.informacionFinca.parroquia
        },
        recinto: {
          respuesta: this.form.value.informacionFinca.recinto
        },
        nombreFinca: {
          respuesta: this.form.value.informacionFinca.nombreFinca
        },
        descripcionLlegarFinca: {
          respuesta: this.form.value.informacionFinca.descripcionLlegarFinca
        }
      }
    }
  }
  

}
