import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { environment } from 'src/environments/environment';
import { AgricultorService } from '../../core/services/agricultor/agricultor.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { KeymapperService } from '../../core/services/keymapper/keymapper.service';

@Component({
  selector: 'app-agricultor',
  templateUrl: './agricultor.component.html',
  styleUrls: ['./agricultor.component.css']
})
export class AgricultorComponent implements OnInit {
  generos;
  estadoCivil;
  eduacion;
  discapacidad;
  minDate = new Date();
  maxDate18Years;

  agricultorForm = new FormGroup({
    codigo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5)]),
    cedula: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern("^[a-zA-Z ]*$")]),
    fechaNacimiento: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    estadoCivil: new FormControl('', Validators.required),
    nivelEducacion: new FormControl('', Validators.required),
    celular1: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
    celular2: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(7), Validators.maxLength(7)]),
    isDiscapacitado: new FormControl('', Validators.required),
    tecnico: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern("^[a-zA-Z ]*$")]),
    fechaVisita: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder,
    private agricultorService: AgricultorService,
    private keymapperService: KeymapperService) { }

  ngOnInit() {
    this.generos = environment.constantes.agricultor.genero;
    this.estadoCivil = environment.constantes.agricultor.estadoCivil;
    this.eduacion = environment.constantes.agricultor.educacion;
    this.discapacidad = environment.constantes.agricultor.discapacidad;
    this.maxDate18Years = this.getMaxDate18YearsFromNow();

    /*let formularioLineaBase: FormularioLineaBase = {
      secciones: {
        informacionFinca: {
          preguntas: {
            provincia: {
              respuesta: 'test'
            },
            canton: {
              respuesta: 'test'
            },
            parroquia: {
              respuesta: 'test'
            },
            recinto: {
              respuesta: 'test'
            },
            nombreFinca: {
              respuesta: 'test'
            },
            descripcionLlegarFinca: {
              respuesta: 'test'
            }
          }
        },
        hectareaje: {
          preguntas: {
            dimensionTotalFinca: {
              respuesta: 'test'
            },
            terreno: {
              respuesta: 'test'
            },
            cultivoCacao: {
              respuesta: 'test',
              preguntas: {
                maiz: {
                  respuesta: 'test'
                },
                naranja: {
                  respuesta: 'test'
                },
                platano: {
                  respuesta: 'test'
                },
                mani: {
                  respuesta: 'test'
                },
                otros: {
                  respuesta: 'test',
                  preguntas: {
                    otrosEspecifique: {
                      respuesta: 'test'
                    }
                  }
                }
              }
            },
            areaNetaCacao: {
              respuesta: 'test'
            },
            distanciaPlantas: {
              respuesta: 'test'
            },
            plantasXHectareas: {
              respuesta: 'test'
            },
            tipoUbicacionZona: {
              respuesta: 'test'
            }
          }
        },
        cacaoCNN: {
          preguntas: {
            areaTotalCNN: {
              respuesta: 'test'
            },
            areaProduccion: {
              respuesta: 'test'
            },
            edadCacaoProductivo: {
              respuesta: 'test'
            },
            areaRecienSembrada: {
              respuesta: 'test'
            },
            edadCacaoReciente: {
              respuesta: 'test'
            },
            produccionAnioAnterior: {
              respuesta: 'test'
            },
            precioPromedio: {
              respuesta: 'test'
            }
          }
        }
      }
    }*/
    //El keyMapper se llama dentro de la funcion create
    //servicio create
    //let result = this.keymapperService.keyMapper(formularioLineaBase, environment.mappers.formularioLineaBaseMapper);
    //se hace el add del objeto dentro de la coleccion
  }

  onSubmit() {
    //let result = this.keymapperService.keyMapper(this.agricultorForm.value, environment.mappers.agricultorMapper);
    let agricultor: Agricultor = {
      ...this.agricultorForm.value
    }
    this.agricultorService.setAgricultor(agricultor);
  }

  reset() {
    this.agricultorForm.reset();
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
