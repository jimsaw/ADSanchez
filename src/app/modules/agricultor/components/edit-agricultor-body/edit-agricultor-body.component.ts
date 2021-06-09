import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { AgricultorService } from 'src/app/modules/core/services/agricultor/agricultor.service';
import { KeymapperService } from 'src/app/modules/core/services/keymapper/keymapper.service';
import { environment } from 'src/environments/environment';
import { EditAgricultorDialogComponent } from '../edit-agricultor-dialog/edit-agricultor-dialog.component';


@Component({
  selector: 'app-edit-agricultor-body',
  templateUrl: './edit-agricultor-body.component.html',
  styleUrls: ['./edit-agricultor-body.component.css']
})
export class EditAgricultorBodyComponent implements OnInit {

  agricultor: Agricultor;

  generos: string[];
  estadosCiviles: string[];
  educacion: string[];
  discapacidad: string[];
  minDate = new Date();
  maxDate18Years: Date;

  form = new FormGroup({
    cedula: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern("^[a-zA-Z ]*$")]),
    fechaNacimiento: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    estadoCivil: new FormControl('', Validators.required),
    nivelEducacion: new FormControl('', Validators.required),
    celulares: new FormArray([]),
    telefono: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(7), Validators.maxLength(7)]),
    isDiscapacitado: new FormControl('', Validators.required),
    tecnico: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern("^[a-zA-Z ]*$")]),
    fechaVisita: new FormControl('', Validators.required)
  });

  constructor(
    private agricultorService: AgricultorService,
    @Inject(MAT_DIALOG_DATA) public agricultorPassed: Agricultor,
    public dialogRef: MatDialogRef<EditAgricultorDialogComponent>,
  ) { }

  ngOnInit() {
    this.agricultor = this.agricultorPassed;
    this.generos = environment.constantes.agricultor.genero;
    this.estadosCiviles = environment.constantes.agricultor.estadoCivil;
    this.educacion = environment.constantes.agricultor.educacion;
    this.discapacidad = environment.constantes.agricultor.discapacidad;
    this.maxDate18Years = this.getMaxDate18YearsFromNow();
  }

  ngAfterContentInit(): void {
    this.setFormDefaultValues();    
  }

  private isRecordEmpty(): boolean {
    return this.agricultor === undefined || this.agricultor === null;
  }

  private getFormItem(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  getFormArray(key: string): FormArray {
    return this.form.get(key) as FormArray;
  }

  setFormDefaultValues(): void {
    if (!this.isRecordEmpty()) {
      this.getFormItem('cedula').setValue(this.agricultor.cedula);
      this.getFormItem('nombre').setValue(this.agricultor.nombre);
      this.getFormItem('fechaNacimiento').setValue(this.agricultor.fechaNacimiento);
      this.getFormItem('genero').setValue(this.agricultor.genero);
      this.getFormItem('estadoCivil').setValue(this.agricultor.estadoCivil);
      this.getFormItem('nivelEducacion').setValue(this.agricultor.nivelEducacion);
      this.agricultor.celulares.forEach((celular, index) => {
        this.addCelular();
        this.getFormArray("celulares").controls[index].get("celular").setValue(celular);
      });
      this.getFormItem('telefono').setValue(this.agricultor.telefono);
      this.getFormItem('isDiscapacitado').setValue(this.agricultor.isDiscapacitado);
      this.getFormItem('tecnico').setValue(this.agricultor.tecnico);
      this.getFormItem('fechaVisita').setValue(this.agricultor.fechaVisita);
    } else {
      this.addCelular();
      this.getFormItem('fechaVisita').setValue(new Date());
    }
  }

  createCelularField(): FormGroup {
    return new FormGroup({
      celular:  new FormControl('', [
        Validators.required, Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)
      ])
    });
  }

  addCelular(): void {
    this.getFormArray("celulares").push(this.createCelularField());
  }

  deleteCelular(index: number): void {
    this.getFormArray("celulares").removeAt(index);
  }

  private toStringArray(objectArray: any[]): string[] {
    const arr: string[] = [];
    objectArray.forEach(obj => {
      arr.push(obj["celular"]);
    });
    return arr;
  }

  onSubmit() {
    let agricultor: Agricultor = {
      ...this.form.value,
    }
    if (this.agricultor) {
      agricultor.id = this.agricultor.id;
    }
    agricultor.celulares = this.toStringArray(agricultor.celulares);
    this.agricultorService.set(agricultor)
      .then(() => {
        console.log("Guardado con éxito");
        this.dialogRef.close();
      });
  }

  reset() {
    this.form.reset();
  }

  getErrorMessage(formulario) {
    if (formulario.hasError('required')) {
      return 'Debe ingresar un valor';
    } if (formulario.hasError('pattern')) {
      if (formulario.errors.pattern.requiredPattern == '^[a-zA-Z ]*$') {
        return 'Ingrese caracteres';
      } if (formulario.errors.pattern.requiredPattern == '^[0-9]*$') {
        return 'Ingrese numeros';
      }
    } if (!formulario.hasError('minLength')) {
      return 'Ingresar un valor de longitud aceptable';
    }
  }

  getMaxDate18YearsFromNow() {
    let today = new Date();
    today.setMonth(today.getMonth() - 216);
    return today;
  }

}
