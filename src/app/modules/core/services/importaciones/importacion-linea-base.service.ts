import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { formularioLineaBaseMapper } from 'src/environments/mappers/formularioLineaBase';
import { AgricultorService } from '../agricultor/agricultor.service';
import { FormularioLineaBaseService } from '../formularioLineaBase/formulario-linea-base.service';
import { TecnicoService } from '../tecnico/tecnico.service';

@Injectable({
  providedIn: 'root'
})
export class ImportacionLineaBaseService {
  csvRecords: any[] = [];

  constructor(
    private ngxCsvParser: NgxCsvParser,
    private agricultorService: AgricultorService,
    private tecnicoService: TecnicoService,
    private formularioLineaBaseService: FormularioLineaBaseService,
  ) { }

  async importAllFormularios(file: any, header: boolean, delimeter: string): Promise<void> {
    try {
      this.ngxCsvParser.parse(file[0], { header: header, delimiter: delimeter })
      .pipe().subscribe(async (result: Array<any>) => {
        try {
          for (let index = 2; index < result.length; index++) {
            await this.importFormulario(result[1], result[index]);
          }
        } catch(e) {
          console.log(e);
          throw(e);
        }
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  private async importFormulario(headers: any[], values: any[]): Promise<void> {
    try {
      const formularioLineaBase = await this.getFormularioLineaBase(headers, values);
      this.fillSections(headers, values, formularioLineaBase);
      await this.formularioLineaBaseService.set(formularioLineaBase);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  private async getFormularioLineaBase(headers: any[], values: any[]): Promise<FormularioLineaBase> {
    const id = this.getValueByHeaderName(headers, values, "id");
    const agricultorId = this.getValueByHeaderName(headers, values, "agricultorId");
    const tecnicoId = this.getValueByHeaderName(headers, values, "tecnicoId");
    const fechaVisita = this.getValueByHeaderName(headers, values, "fechaVisita");
    const formularioLineaBase = await this.initFormularioLineaBase(id, agricultorId, tecnicoId, fechaVisita);
    return formularioLineaBase;
  }

  private getValueByHeaderName(headers: string[], values: string[], headerName: string): string {
    for (let i = 0; i < headers.length; i++) {
      if (headers[i].toUpperCase() === headerName.toUpperCase()) {
        return values[i];
      }
    }
    return undefined;
  }

  private fillSections(headers: string[], values: string[], formulario: FormularioLineaBase): void {
    for (let section of Object.keys(formulario["secciones"])) {
      if (formulario["secciones"][section]["preguntas"] != undefined) {
        for (let question of Object.keys(formulario["secciones"][section]["preguntas"])) {
          this.fillQuestions(headers, values, question, formulario["secciones"][section]["preguntas"]);
        }
      }
      if (formulario["secciones"][section]["secciones"] != undefined) {
        const lastObject = formulario["secciones"][section]
        this.fillSections(headers, values, lastObject);
      }
    }
  }

  private fillQuestions(headers: string[], values: string[], question: string, lastObject: any) {
    for (let response of Object.keys(lastObject[question])) {
      if (response === "respuesta") {
        const code = formularioLineaBaseMapper[question]["codigo"];
        let value = this.getValueByHeaderName(headers, values, code);
        if (Array.isArray(lastObject[question][response]) && value != undefined) {
          const arrayValue = value.split(',');
          lastObject[question][response] = arrayValue;
        } else {
          lastObject[question][response] = value;
        }
      } else if (response === "preguntas") {
        const newLastObject = lastObject[question][response];
        for (let question in newLastObject) {
          this.fillQuestions(headers, values, question, newLastObject);
        }
      } else if (response === "arreglo") {
        this.pickQuestionWithDynamicArray(headers, values, lastObject[question][response], question);
      }
    }
  }

  private pickQuestionWithDynamicArray(headers: string[], values: string[], dynamicArray: any[], question: string): void {
    switch (question) {
      case "viejosInjertados":
        const questionsVI = ["areaViejoInjertado", "edadViejoInjertado"];
        this.fillDynamicArray(headers, values, dynamicArray, questionsVI);
        break;
      case "nuevosClones":
        const questionsNV = ["areaNuevosClones", "edadNuevosClones"];
        this.fillDynamicArray(headers, values, dynamicArray, questionsNV);
        break;
      case "miembros":
        const questionsM = ["clasificacionMiembroFamiliar", "edad", "genero", "seguridadSocial",
                            "nivelEduacion", "laboraEnFinca", "laborRealizado", "horasAlDiaTrabaja",
                            "tieneOtraFuenteIngreso", "sueldoIngresoMensual"];
        this.fillDynamicArray(headers, values, dynamicArray, questionsM);
        break;
    }
  }

  private fillDynamicArray(headers: string[], values: string[], dynamicArray: any[], arrayOfQuestions: string[]) {
    let hayCampos = true;
    let countOfFields = 1;
    while (hayCampos) {
      let viejoInjertado = {};
      for (let question of arrayOfQuestions) {
        const codeInDocument = formularioLineaBaseMapper[question]["codigo"] + countOfFields.toString();
        const value = this.getValueByHeaderName(headers, values, codeInDocument);
        if (value === undefined) {
          hayCampos = false;
            break;
        } else {
            viejoInjertado[question] = {};
            viejoInjertado[question]["respuesta"] = value; 
        }
    }
      if (hayCampos) {
        dynamicArray.push(viejoInjertado);
      }
      countOfFields++;
    }
  }

  private async initFormularioLineaBase(id: string, agricultorId: string, tecnicoId: string, fechaVisita: string): Promise<FormularioLineaBase> {
    const agricultor = await this.agricultorService.get(agricultorId);
    const tecnico = await this.tecnicoService.get(tecnicoId);
    return {
      id: id,
      agricultor: agricultor,
      tecnico: tecnico,
      fechaVisita: fechaVisita,
      secciones: {
          informacionFinca: {
              preguntas: {
                  provincia: {
                      respuesta: ""
                  },
                  canton: {
                      respuesta: ""
                  },
                  parroquia: {
                      respuesta: ""
                  },
                  recinto: {
                      respuesta: ""
                  },
                  nombreFinca: {
                      respuesta: ""
                  },
                  descripcionLlegarFinca: {
                      respuesta: ""
                  }
              }
          },
          hectareaje: {
              preguntas: {
                  dimensionTotalFinca: {
                      respuesta: ""
                  },
                  terreno: {
                      respuesta: ""
                  },
                  cultivoCacao: {
                      respuesta: "",
                      preguntas: {
                          asociadoConTiene: {
                              respuesta: [],
                              preguntas: {
                                  otrosEspecifique: {
                                      respuesta: ""
                                  }
                              }
                          }
                      }
                  },
                  areaNetaCacao: {
                      respuesta: ""
                  },
                  distanciaPlantas: {
                      respuesta: ""
                  },
                  plantasXHectareas: {
                      respuesta: ""
                  },
                  tipoUbicacionZona: {
                      respuesta: ""
                  }
              }
          },
          cacaoCNN: {
              preguntas: {
                  areaTotalCNN: {
                      respuesta: ""
                  },
                  areaProduccion: {
                      respuesta: ""
                  },
                  edadCacaoProductivo: {
                      respuesta: ""
                  },
                  areaRecienSembrada: {
                      respuesta: ""
                  },
                  edadCacaoReciente: {
                      respuesta: ""
                  },
                  produccionAnioAnteriorCacaoCNN: {
                      respuesta: ""
                  },
                  precioPromedio: {
                      respuesta: ""
                  }
              }
          },
          cacaoNacional: {
              preguntas: {
                  areaTotalNacional: {
                      respuesta: ""
                  },
                  areaTotalNacionalViejo: {
                      respuesta: ""
                  },
                  edadCacaoViejo: {
                      respuesta: ""
                  },
                  brotesBasales: {
                      respuesta: ""
                  },
                  arbolesElite: {
                      respuesta: ""
                  },
                  areaTotalViejoInjertado: {
                      respuesta: ""
                  },
                  viejosInjertados: {
                      arreglo: []
                  },
                  areaTotalNuevosClones: {
                      respuesta: ""
                  },
                  nuevosClones: {
                      arreglo: []
                  },
                  produccionAnioAnteriorCacaoNacional: {
                      respuesta: ""
                  },
                  precioPromedioXCacao: {
                      respuesta: ""
                  }
              }
          },
          cacaoNacionalNuevosClones: {
              preguntas: {
                  usoAnteriorAreaNueva: {
                      respuesta: "",
                      preguntas: {
                          otroUsoAnteriorAreaNueva: {
                              respuesta: ""
                          }
                      }
                  },
                  tipoVariedad: {
                      respuesta: "",
                      preguntas: {
                          especifiqueOtros: {
                              respuesta: ""
                          }
                      }
                  },
                  variedadesSembradasCalificacion: {
                      respuesta: ""
                  },
                  plantulasCondicionesEdafoclimaticas: {
                      respuesta: ""
                  },
                  plantulasRendimiento: {
                      respuesta: ""
                  },
                  plantulasVigorPlanta: {
                      respuesta: ""
                  },
                  plantulasResistenciaEnfermedades: {
                      respuesta: ""
                  }
              }
          },
          origenPlantas: {
              preguntas: {
                  nombreVivero: {
                      respuesta: ""
                  },
                  ubicacionVivero: {
                      respuesta: ""
                  },
                  encargadoPropagacion: {
                      respuesta: "",
                      preguntas: {
                          otroEncargadoPropagacion: {
                              respuesta: ""
                          }
                      }
                  },
                  tipoConocimiento: {
                      respuesta: ""
                  },
                  entidadDonacion: {
                      respuesta: ""
                  },
                  cantidadPlantasRecibidas: {
                      respuesta: ""
                  }
              }
          },
          informacionFamilia: {
              preguntas: {
                  miembros: {
                      arreglo: []
                  },
                  familiarDiscapacitado: {
                      respuesta: ""
                  },
                  esposaInvolucradaEntrevista: {
                      respuesta: ""
                  },
                  esposoIncluyeEsposaEntrevista: {
                      respuesta: ""
                  },
                  deseoIngresoAdicionalConyuge: {
                      respuesta: ""
                  },
                  deseoTrabajoMedioTiempoProyectosFuturos: {
                      respuesta: "",
                      preguntas: {
                          comoCual: {
                              respuesta: ""
                          }
                      }
                  },
                  hijoInteresadoEnProyectosRehabilitacionFinca: {
                      respuesta: ""
                  }
              }
          },
          practicasAgricolas: {
              preguntas: {
                  interesElaborarFertilizanteNaturalOrganico: {
                      respuesta: ""
                  },
                  plagasAfectanCultivo: {
                      respuesta: []
                  },
                  enfermedadesAfectanCultivo: {
                      respuesta: []
                  },
                  productoParaPlagas: {
                      respuesta: ""
                  },
                  productoParaEnfermedades: {
                      respuesta: ""
                  },
                  llevaRegistroPerdidasMazorcasXMonilla: {
                      respuesta: "",
                      preguntas: {
                          cantidadPerdidaMazorcas: {
                              respuesta: ""
                          }
                      }
                  },
                  periodoFertilizacion: {
                      respuesta: []
                  },
                  periodoPoda: {
                      respuesta: []
                  },
                  periodoControlMaleza: {
                      respuesta: []
                  },
                  periodoMIPE: {
                      respuesta: []
                  },
                  periodoCosecha: {
                      respuesta: []
                  }
              }
          },
          saludSeguridadOcupacional: {
              preguntas: {
                  accidentesLaboralesUltimoAnio: {
                      respuesta: "",
                      preguntas: {
                          tipoAccidente: {
                              respuesta: ""
                          }
                      }
                  },
                  periodoIntoxicacionPresente: {
                      respuesta: "",
                      preguntas: {
                          producto: {
                              respuesta: ""
                          }
                      }
                  },
                  centroSaludCercano: {
                      respuesta: ""
                  }
              }
          },
          cosecha: {
              preguntas: {
                  periodoCadaTumba: {
                      respuesta: ""
                  },
                  latasCacaoXTumba: {
                      respuesta: ""
                  },
                  realizaEscurridoSecadoCCN51: {
                      respuesta: ""
                  },
                  diasFermentadoCacao: {
                      respuesta: ""
                  }
              }
          },
          venta: {
              preguntas: {
                  almacenaCacaoDespSecado: {
                      respuesta: "",
                      preguntas: {
                          tiempoAlmacenadoCacao: {
                              respuesta: ""
                          }
                      }
                  },
                  propiedadTransporte: {
                      respuesta: ""
                  },
                  tipoTransporte: {
                      respuesta: ""
                  },
                  registroFinancieroFinca: {
                      respuesta: ""
                  },
                  tipoRegistrosFinancierosFinca: {
                      respuesta: ""
                  }
              }
          },
          nivelAsociatividad: {
              preguntas: {
                  perteneceAsocProgrCertif: {
                      respuesta: "",
                      preguntas: {
                          nombreAsociacion: {
                              respuesta: ""
                          },
                          cantidadMiembros: {
                              respuesta: ""
                          },
                          recibeBeneficios: {
                              respuesta: ""
                          },
                          tiposBeneficios: {
                              respuesta: [],
                              preguntas: {
                                  otroTiposBeneficios: {
                                      respuesta: ""
                                  }
                              }
                          }
                      }
                  },
                  ayudaOtraInstitucion: {
                      respuesta: "",
                      preguntas: {
                          nombreOtraInstitucion: {
                              respuesta: ""
                          },
                          tipoAyuda: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          condicionesLaborales: {
              preguntas: {
                  contrataTrabajadores: {
                      respuesta: "",
                      preguntas: {
                          cantidadTrabajadores: {
                              respuesta: ""
                          }
                      }
                  },
                  areaInicialContrato: {
                      respuesta: ""
                  },
                  tipoContratoTrabajo: {
                      respuesta: ""
                  },
                  contrataMenoresEdad: {
                      respuesta: "",
                      preguntas: {
                          poseePermiso: {
                              respuesta: ""
                          }
                      }
                  },
                  baseContratoAgricola: {
                      respuesta: ""
                  }
              }
          },
          serviciosBasicos: {
              preguntas: {
                  energiaElectrica: {
                      respuesta: ""
                  },
                  tipoAguaConsumoFamiliar: {
                      respuesta: ""
                  }
              }
          },
          conservacionRecursosManejoDesechos: {
              preguntas: {
                  conocimientoManejoDesechos: {
                      respuesta: ""
                  },
                  productoContaminaEcosistema: {
                      respuesta: "",
                      preguntas: {
                          ubicacionDesechosAguasNegras: {
                              respuesta: []
                          }
                      }
                  },
                  tieneArbolesSombrio: {
                      respuesta: ""
                  },
                  cultivaVegetalesHortalizasFrutas: {
                      respuesta: ""
                  },
                  compraProductosMercadoLocales: {
                      respuesta: "",
                      preguntas: {
                          valorPromedioGastado: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          incrementarProductividad: {
              preguntas: {
                  recibirPlantasCacaoNacional: {
                      respuesta: ""
                  },
                  aprenderElabProductosNaturales: {
                      respuesta: ""
                  }
              }
          },
          mejorarCalidadCacao: {
              preguntas: {
                  bandejasCajonesFermentacion: {
                      respuesta: "",
                      preguntas: {
                          dispuestoHacerloPropiaCuenta: {
                              respuesta: ""
                          }
                      }
                  },
                  tendalesElevadosCania: {
                      respuesta: ""
                  },
                  secadorasComunitarias: {
                      respuesta: "",
                      preguntas: {
                          contarAgrupacionParaProyecto: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          diversificacionIngresos: {
              preguntas: {
                  huertosOrganicos: {
                      respuesta: ""
                  },
                  desarrolloViveros: {
                      respuesta: ""
                  },
                  desarrolloVentaFertilizantes: {
                      respuesta: ""
                  },
                  rehabilitacionFinca: {
                      respuesta: ""
                  },
                  brigadaPodadores: {
                      respuesta: "",
                      preguntas: {
                          contarExperienciaPoda: {
                              respuesta: "",
                              preguntas: {
                                  aniosExperiencia: {
                                      respuesta: ""
                                  }
                              }
                          }
                      }
                  }
              }
          },
          preguntasAdicionales: {
              preguntas: {
                  tieneAreaLibreParaSembrar: {
                      respuesta: "",
                      preguntas: {
                          areaLibre: {
                              respuesta: ""
                          }
                      }
                  },
                  necesitaRehaReinjerto: {
                      respuesta: "",
                      preguntas: {
                          cantidad: {
                              respuesta: ""
                          }
                      }
                  }
              }
          }
      }
    };
  }
}
