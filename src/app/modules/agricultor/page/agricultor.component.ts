import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AgricultorService } from '../../core/services/agricultor/agricultor.service';

@Component({
  selector: 'app-agricultor',
  templateUrl: './agricultor.component.html',
  styleUrls: ['./agricultor.component.css']
})
export class AgricultorComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  generos;
  estadoCivil;
  eduacion;
  discapacidad;
  dataAgricultor;

  agricultorForm = new FormGroup({
    codigoAgricultor: new FormControl(''),
    cedula: new FormControl(''),
    nombreAgricultor: new FormControl(''),
    fechaNac: new FormControl(''),
    genero: new FormControl(''),
    estadoCiv: new FormControl(''),
    nivEduc: new FormControl(''),
    celular1: new FormControl(''),
    celular2: new FormControl(''),
    telefono: new FormControl(''),
    isDiscapac: new FormControl(''),
    tecnico: new FormControl(''),
    fechaVisita: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder,
    private agricultorService: AgricultorService) { }

  ngOnInit() {
    this.generos = environment.agricultorGenero;
    this.estadoCivil = environment.agricultorEstadoCivil;
    this.eduacion = environment.agricultorEducacion;
    this.discapacidad = environment.agricultorDiscapacidad;
  }

  onSubmit() {
    this.dataAgricultor = this.keyConverter(this.agricultorForm.value);
    //console.log(this.dataAgricultor);
    this.agricultorService.createAgricultor(this.dataAgricultor);
  }

  reset() {
    this.agricultorForm.reset();
  }

  keyConverter(data) {
    let result = {};
    for (var val in data) {
      switch (val) {
        case "codigoAgricultor": {
          result["COD"] = data[val];
          break;
        }
        case "cedula": {
          result["CI"] = data[val];
          break;
        }
        case "nombreAgricultor": {
          result["NOMBRE"] = data[val];
          break;
        }
        case "fechaNac": {
          result["SE02_FECHNAC"] = data[val];
          break;
        }
        case "genero": {
          result["SE01_GÉNERO"] = data[val];
          break;
        }
        case "estadoCiv": {
          result["SE04_ESTCIV"] = data[val];
          break;
        }
        case "nivEduc": {
          result["SE05_NIVEDUC"] = data[val];
          break;
        }
        case "celular1": {
          result["SE06_CEL1"] = data[val];
          break;
        }
        case "celular2": {
          result["SE07_CEL2"] = data[val];
          break;
        }
        case "telefono": {
          result["SE08_TLFNO"] = data[val];
          break;
        }
        case "isDiscapac": {
          result["SE09_DISC"] = data[val];
          break;
        }
        case "tecnico": {
          result["TECNICO"] = data[val];
          break;
        }
        case "fechaVisita": {
          result["F_VISITALB"] = data[val];
          break;
        }
        default: {
          break;
        }
      }
    }
    return result;
  }

}
