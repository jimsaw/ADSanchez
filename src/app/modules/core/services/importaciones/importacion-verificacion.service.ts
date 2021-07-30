import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { formularioVerificacionMapper } from 'src/environments/mappers/formularioVerificacion';
import { AgricultorService } from '../agricultor/agricultor.service';
import { FormularioVerificacionService } from '../formularioVerificacion/formulario-verificacion.service';
import { TecnicoService } from '../tecnico/tecnico.service';

@Injectable({
  providedIn: 'root'
})
export class ImportacionVerificacionService {
  csvRecords: any[] = [];

  constructor(
    private ngxCsvParser: NgxCsvParser,
    private agricultorService: AgricultorService,
    private tecnicoService: TecnicoService,
    private formularioVerificacionService: FormularioVerificacionService,
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
      const formularioVerificacion = await this.getFormularioVerificacion(headers, values);
      this.fillSections(headers, values, formularioVerificacion);
      await this.formularioVerificacionService.set(formularioVerificacion);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  private async getFormularioVerificacion(headers: any[], values: any[]): Promise<FormularioVerificacion> {
    const id = this.getValueByHeaderName(headers, values, "id");
    const agricultorId = this.getValueByHeaderName(headers, values, "agricultorId");
    const tecnicoId = this.getValueByHeaderName(headers, values, "tecnicoId");
    const fechaVisita = this.getValueByHeaderName(headers, values, "fechaVisita");
    const formularioVerificacion = await this.initFormularioVerificacion(id, agricultorId, tecnicoId, fechaVisita);
    return formularioVerificacion;
  }

  private getValueByHeaderName(headers: string[], values: string[], headerName: string): string {
    for (let i = 0; i < headers.length; i++) {
      if (headers[i].toUpperCase() === headerName.toUpperCase()) {
        return values[i];
      }
    }
    return undefined;
  }

  private fillSections(headers: string[], values: string[], formulario: FormularioVerificacion): void {
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
        const code = formularioVerificacionMapper[question]["codigo"];
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
        // FORMULARIOS VERIFICACION NO TIENE ARREGLO DINAMICO
      }
    }
  }

  private async initFormularioVerificacion(id: string, agricultorId: string, tecnicoId: string, fechaVisita: string): Promise<FormularioVerificacion> {
    const agricultor = await this.agricultorService.get(agricultorId);
    const tecnico = await this.tecnicoService.get(tecnicoId);
    return {
      id: id,
      agricultor: agricultor,
      tecnico: tecnico,
      fechaVisita: fechaVisita,
      secciones: {
          datosFinca: {
              preguntas: {
                  incrementoHectareajeFinca: {
                      respuesta: "",
                      preguntas: {
                          cantidadAumento: {
                              respuesta: ""
                          },
                          mesIncrementoHectareaje: {
                              respuesta: ""
                          },
                          motivoAreaNueva: {
                              respuesta: ""
                          },
                          usoAreaNueva: {
                              respuesta: ""
                          },
                          incrementoFueraTamanioFinca: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          injertacion: {
              preguntas: {
                  realizoInjertosUltimos12Meses: {
                      respuesta: "",
                      preguntas: {
                          mesRealizoInjertos: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          manejoSuelo: {
              preguntas: {
                  tipoSuelo: {
                      respuesta: ""
                  },
                  capacitacionTomaMuestrasSuelo: {
                      respuesta: ""
                  },
                  analisisSuelo: {
                      respuesta: "",
                      preguntas: {
                          sueloPH: {
                              respuesta: ""
                          }
                      }
                  },
                  suelosNivelesAltosAcidez: {
                      respuesta: "",
                      preguntas: {
                          corregidoPHSueloFinca: {
                              respuesta: ""
                          }
                      }
                  },
                  maneraCorregidoPHSuelo: {
                      respuesta: "",
                      preguntas: {
                          tipoProducto: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          fertilizacion: {
              preguntas: {
                  fertilizaCacaotales: {
                      respuesta: "",
                      preguntas: {
                          tipoProductoUsado: {
                              respuesta: ""
                          }
                      }
                  },
                  usaFertilizanteEdafico: {
                      respuesta: "",
                      preguntas: {
                          vecesUsadoAlAnioFertilizanteEdafico: {
                              respuesta: ""
                          }
                      }
                  },
                  usaFertilizanteFoliar: {
                      respuesta: "",
                      preguntas: {
                          vecesUsadoAlAnioFertilizanteFoliar: {
                              respuesta: ""
                          }
                      }
                  },
                  recibidoFertilizanteKits: {
                      respuesta: "",
                      preguntas: {
                          tipoFertilizanteRecibido: {
                              respuesta: ""
                          }
                      }
                  },
                  opinionEfectividadFertilizante: {
                      respuesta: ""
                  },
                  repetirCompraConDescuento: {
                      respuesta: ""
                  },
                  disminuidoProductosQuimicosPorOrganicos: {
                      respuesta: ""
                  }
              }
          },
          bodega: {
              preguntas: {
                  poseeBodega: {
                      respuesta: ""
                  },
                  bodegaSegura: {
                      respuesta: ""
                  },
                  bodegaOrdenada: {
                      respuesta: ""
                  },
                  clasificadaXProducto: {
                      respuesta: ""
                  },
                  tieneRegistroAlmacena: {
                      respuesta: ""
                  },
                  cuentaDuchaEmergencia: {
                      respuesta: ""
                  },
                  conocimientoProdcutosPermitidosLINDT: {
                      respuesta: ""
                  }
              }
          },
          controlMalezas: {
              preguntas: {
                  controlaMalezas: {
                      respuesta: "",
                      preguntas: {
                          tiposMalezaEncontrada: {
                              respuesta: ""
                          },
                          comoControlaMaleza: {
                              respuesta: "",
                              preguntas: {
                                  productoQuimicoUsado: {
                                      respuesta: ""
                                  },
                                  regularidadProductoQuimicoUsado: {
                                      respuesta: ""
                                  },
                                  recomendacionSeguidaAplicandoProductoQuimico: {
                                      respuesta: ""
                                  }
                              }
                          }
                      }
                  },
                  conocimientoDisposicionMaquinariaAgricola: {
                      respuesta: "",
                      preguntas: {
                          haceUsoMisma: {
                              respuesta: ""
                          },
                          tiempoPromedioUso: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          poda: {
              preguntas: {
                  realizaPoda: {
                      respuesta: "",
                      preguntas: {
                          tipoPoda: {
                              respuesta: ""
                          },
                          podaEsCorrecta: {
                              respuesta: ""
                          }
                      }
                  },
                  cortesLaceracionesPlantaMalaPoda: {
                      respuesta: ""
                  },
                  mazorcasEstadoPudricion: {
                      respuesta: ""
                  },
                  malaPodaAlbergaPlagasEnfermedades: {
                      respuesta: "",
                      preguntas: {
                          plagasMalaPoda: {
                              respuesta: ""
                          },
                          enfermedadesMalaPoda: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          MIPE: {
              preguntas: {
                  realizaPracticasMPE: {
                      respuesta: "",
                      preguntas: {
                          tipoControlMPE: {
                              respuesta: ""
                          }
                      }
                  },
                  corrigioProblemasMPE: {
                      respuesta: ""
                  },
                  fincaLibreAplicacionQuimica: {
                      respuesta: ""
                  },
                  controlaEnfermedades: {
                      respuesta: ""
                  },
                  reduccionIncidenciaPlagasEnfermedades: {
                      respuesta: ""
                  }
              }
          },
          saludSeguridadOcupacional: {
              preguntas: {
                  trabajadoresLlevadosCapacitacionesSSO: {
                      respuesta: ""
                  },
                  usoPictograma: {
                      respuesta: ""
                  },
                  buenasPracticasFincaTrabajadores: {
                      respuesta: ""
                  },
                  botiquin: {
                      respuesta: ""
                  },
                  eppAntesPlaguicida: {
                      respuesta: ""
                  },
                  instruccionesPrimerosAuxilios: {
                      respuesta: ""
                  }
              }
          },
          registrosProductor: {
              preguntas: {
                  ventaAnualCacaoQuintales: {
                      respuesta: ""
                  },
                  ventaAnualCacaoUSD: {
                      respuesta: ""
                  },
                  egresoCompraMateriales: {
                      respuesta: ""
                  },
                  egresoManoObra: {
                      respuesta: ""
                  },
                  manejoCuadernilloRegistros: {
                      respuesta: ""
                  },
                  manejoCostosPlanificacionFinanciera: {
                      respuesta: ""
                  },
                  disponibilidadAhorrarEnCuenta: {
                      respuesta: "",
                      preguntas: {
                          tipoInstitucionAhorroCuenta: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          cosecha: {
              preguntas: {
                  cosechaSeparadoCacaoNacionalCCN51: {
                      respuesta: ""
                  },
                  plantasLaceracionesCicatricesMalaPractica: {
                      respuesta: ""
                  }
              }
          },
          fermentacion: {
              preguntas: {
                  fermentaCacao: {
                      respuesta: "",
                      preguntas: {
                          razonNoFermenta: {
                              respuesta: ""
                          },
                          modoFermentacion: {
                              respuesta: ""
                          },
                          medidasHigieneFermentacion: {
                              respuesta: ""
                          },
                          aumentoIngresoPorFermentacion: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          secado: {
              preguntas: {
                  nivelHumedadCacaoVendido: {
                      respuesta: ""
                  },
                  maneraRealzarSecado: {
                      respuesta: ""
                  },
                  mejoraIngresoMejorTratamientoSecadoCacao: {
                      respuesta: ""
                  }
              }
          },
          venta: {
              preguntas: {
                  personaVenderCacao: {
                      respuesta: "",
                      preguntas: {
                          razon1: {
                              respuesta: ""
                          },
                          razon2: {
                              respuesta: ""
                          }
                      }
                  },
                  recibeBonosEmpresaProgramaLINDT: {
                      respuesta: "",
                      preguntas: {
                          frecuenciaRecibeBono: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          condicionesLaborales: {
              preguntas: {
                  discriminacion: {
                      respuesta: ""
                  },
                  explotacion: {
                      respuesta: ""
                  },
                  trabajoInfantil: {
                      respuesta: ""
                  },
                  documentosSoporte: {
                      respuesta: ""
                  },
                  montoAcuerdoContratoAgricola: {
                      respuesta: ""
                  }
              }
          },
          conservacionAguaManejoDesechos: {
              preguntas: {
                  fincaConRiego: {
                      respuesta: ""
                  },
                  disenioRiego: {
                      respuesta: "",
                      preguntas: {
                          hectareasDisenioRiego: {
                              respuesta: ""
                          }
                      }
                  },
                  permisoExtraerAguaRiego: {
                      respuesta: ""
                  },
                  analisisAguaRiego: {
                      respuesta: ""
                  },
                  presentaAnexos: {
                      respuesta: ""
                  },
                  utilizaFiltroEcologico: {
                      respuesta: "",
                      preguntas: {
                          razonUsoFiltroEcologico: {
                              respuesta: ""
                          }
                      }
                  },
                  areaDeschPlasticos: {
                      respuesta: ""
                  },
                  fincaLibrePlasticos: {
                      respuesta: ""
                  },
                  clasificaBasuraDomestica: {
                      respuesta: ""
                  },
                  criterioClasificaBasuraDomestica: {
                      respuesta: ""
                  },
                  practicaReciclajeCompostaje: {
                      respuesta: ""
                  },
                  tratamientoBasura: {
                      respuesta: ""
                  },
                  conocimientoAreaRecepcioEnvasesProductosQuimicos: {
                      respuesta: "",
                      preguntas: {
                          usoServicioAreaRecepcioEnvasesProductosQuimicos: {
                              respuesta: ""
                          },
                          frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos: {
                              respuesta: ""
                          },
                          almacenaSeguridadEnvasesPrevioTraslado: {
                              respuesta: "",
                              preguntas: {
                                  lugarAlmacena: {
                                      respuesta: ""
                                  }
                              }
                          }
                      }
                  },
                  tratamientoAguasNegras: {
                      respuesta: ""
                  },
                  tipoExtraccion: {
                      respuesta: ""
                  },
                  infraestructuraRiego: {
                      respuesta: ""
                  },
                  impactoRiego: {
                      respuesta: ""
                  }
              }
          },
          conservacionSuelosBiodiversidad: {
              preguntas: {
                  practicasConservacionSuelos: {
                      respuesta: ""
                  },
                  practicaDeforestacion: {
                      respuesta: ""
                  },
                  plantadoArbolesSombrioRecient: {
                      respuesta: "",
                      preguntas: {
                          cuantosArbolesSombrio: {
                              respuesta: ""
                          },
                          promedioArbolesXHectarea: {
                              respuesta: ""
                          },
                          reforestadoOrillas: {
                              respuesta: ""
                          }
                      }
                  },
                  promedioArbolXHectarea12MAltura: {
                      respuesta: ""
                  },
                  especiesDiferentesArbolesXHectarea: {
                      respuesta: ""
                  },
                  especiesArbolesEnCultivo: {
                      respuesta: "",
                      preguntas: {
                          especifiqueOtrosEspeciesArboles: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          proteccionAreasRiberenias: {
              preguntas: {
                  poseeFuenteHidrica: {
                      respuesta: "",
                      preguntas: {
                          nombreFuenteHidrica: {
                              respuesta: "",
                              preguntas: {
                                  especifiqueOtros: {
                                      respuesta: ""
                                  }
                              }
                          },
                          consideradaFuenteHidrica: {
                              respuesta: ""
                          },
                          tipoFuenteHidrica: {
                              respuesta: ""
                          },
                          poseeNacientes: {
                              respuesta: "",
                              preguntas: {
                                  cuantasNacientes: {
                                      respuesta: ""
                                  }
                              }
                          },
                          brindaProteccionFuenteHidrica: {
                              respuesta: "",
                              preguntas: {
                                  comoBrindaProtFuentHidr: {
                                      respuesta: ""
                                  }
                              }
                          },
                          distanciaRequerida: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          proteccionAreasAltoValorConservacion: {
              preguntas: {
                  sueloPresentaProblemaErosion: {
                      respuesta: "",
                      preguntas: {
                          tipoProblemaErosion: {
                              respuesta: ""
                          }
                      }
                  },
                  necesitaImplementarPracticasMejoraSuelo: {
                      respuesta: "",
                      preguntas: {
                          comoQuePracticas: {
                              respuesta: ""
                          }
                      }
                  },
                  gradoPresentanPendientes: {
                      respuesta: ""
                  },
                  cuentaConAreaForestales: {
                      respuesta: "",
                      preguntas: {
                          tipoAreaForestal: {
                              respuesta: ""
                          }
                      }
                  },
                  realizaPlanesCorteExtraccionMadera: {
                      respuesta: ""
                  },
                  presentaAnexosAreasAltoValor: {
                      respuesta: ""
                  },
                  realizaPlanesReforestacion: {
                      respuesta: ""
                  },
                  conoceEspeciePeligroExtincionEnFinca: {
                      respuesta: "",
                      preguntas: {
                          cualesEspeciesPeligroExtincion: {
                              respuesta: ""
                          },
                          especifiqueCualesEspeciesPeligroExtincion: {
                              respuesta: ""
                          }
                      }
                  },
                  fincaConsideradaAltoValor: {
                      respuesta: "",
                      preguntas: {
                          tipoAltoValor: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          diversificacionIngresos: {
              preguntas: {
                  usoCultivoDiferenteCacao: {
                      respuesta: ""
                  },
                  otraActividadDentroFincaConIngreso: {
                      respuesta: ""
                  },
                  huertosOrganicosEnFinca: {
                      respuesta: ""
                  },
                  otraActividadFueraFincaConIngreso: {
                      respuesta: "",
                      preguntas: {
                          actividadFueraFincaConIngreso: {
                              respuesta: ""
                          },
                          realizaActividadFueraFincaConIngreso: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          capacitacionesBeneficioPrograma: {
              secciones: {
                  capacitacion: {
                      preguntas: {
                          utilidadCacaoFinoAromaSostenibilidadTrazabilidad: {
                              respuesta: ""
                          },
                          aplicaCacaoFinoAromaSostenibilidadTrazabilidad: {
                              respuesta: ""
                          },
                          utilidadBuenasPracticasAgricolas: {
                              respuesta: ""
                          },
                          aplicaBuenasPracticasAgricolas: {
                              respuesta: ""
                          },
                          utilidadParametrosCalidad: {
                              respuesta: ""
                          },
                          aplicaParametrosCalidad: {
                              respuesta: ""
                          },
                          utilidadBuenasPracticasSociales: {
                              respuesta: ""
                          },
                          aplicaBuenasPracticasSociales: {
                              respuesta: ""
                          },
                          utilidadBuenasPracticasAmbientales: {
                              respuesta: ""
                          },
                          aplicaBuenasPracticasAmbientales: {
                              respuesta: ""
                          },
                          utilidadElaboracionProductosOrganicos: {
                              respuesta: ""
                          },
                          aplicaElaboracionProductosOrganicos: {
                              respuesta: ""
                          },
                          utilidadReproduccionVegetativa: {
                              respuesta: ""
                          },
                          aplicaReproduccionVegetativa: {
                              respuesta: ""
                          },
                          utilidadPoda: {
                              respuesta: ""
                          },
                          aplicaPoda: {
                              respuesta: ""
                          },
                          utilidadApicultura: {
                              respuesta: ""
                          },
                          aplicaApicultura: {
                              respuesta: ""
                          },
                          utilidadPorcicultura: {
                              respuesta: ""
                          },
                          aplicaPorcicultura: {
                              respuesta: ""
                          },
                          utilidadPiscicultura: {
                              respuesta: ""
                          },
                          aplicaPiscicultura: {
                              respuesta: ""
                          },
                          utilidadRiego: {
                              respuesta: ""
                          },
                          aplicaRiego: {
                              respuesta: ""
                          },
                          utilidadAgroforesteriaDinamica: {
                              respuesta: ""
                          },
                          aplicaAgroforesteriaDinamica: {
                              respuesta: ""
                          },
                          temasAdicionalesGustariaAprender: {
                              respuesta: ""
                          }
                      }
                  },
                  incentivos: {
                      preguntas: {
                          necesidadesDetectadasFinca: {
                              respuesta: ""
                          }
                      },
                      secciones: {
                          ambiental: {
                              preguntas: {
                                  estadoPlantasFrutales: {
                                      respuesta: ""
                                  },
                                  estadoPlantasForestales: {
                                      respuesta: ""
                                  },
                                  estadoOtrosAmbiental: {
                                      respuesta: ""
                                  },
                                  necesitaPlantasFrutales: {
                                      respuesta: ""
                                  },
                                  necesitaPlantasForestales: {
                                      respuesta: ""
                                  },
                                  necesitaOtrosAmbiental: {
                                      respuesta: ""
                                  }
                              }
                          },
                          insumos: {
                              preguntas: {
                                  estadoFertilizanteEdafico: {
                                      respuesta: ""
                                  },
                                  estadoFertilizanteFoliar: {
                                      respuesta: ""
                                  },
                                  necesitaFertilizanteEdafico: {
                                      respuesta: ""
                                  },
                                  necesitaFertilizanteFoliar: {
                                      respuesta: ""
                                  }
                              }
                          },
                          maquinariaAgricola: {
                              preguntas: {
                                  estadoMotoguadania: {
                                      respuesta: ""
                                  },
                                  estadoMotosierra: {
                                      respuesta: ""
                                  },
                                  estadoPodadoraDeAltura: {
                                      respuesta: ""
                                  },
                                  estadoBombaRiego: {
                                      respuesta: ""
                                  },
                                  estadoBombaAMotor: {
                                      respuesta: ""
                                  },
                                  estadoOtrosMaquinariaAgricola: {
                                      respuesta: ""
                                  },
                                  necesitaMotoguadania: {
                                      respuesta: ""
                                  },
                                  necesitaMotosierra: {
                                      respuesta: ""
                                  },
                                  necesitaPodadoraDeAltura: {
                                      respuesta: ""
                                  },
                                  necesitaBombaRiego: {
                                      respuesta: ""
                                  },
                                  necesitaBombaAMotor: {
                                      respuesta: ""
                                  },
                                  necesitaOtrosMaquinariaAgricola: {
                                      respuesta: ""
                                  }
                              }
                          },
                          herramientas: {
                              preguntas: {
                                  estadoTijeras: {
                                      respuesta: ""
                                  },
                                  estadoSerruchos: {
                                      respuesta: ""
                                  },
                                  estadoMachetes: {
                                      respuesta: ""
                                  },
                                  estadoBaldes: {
                                      respuesta: ""
                                  },
                                  estadoTanques: {
                                      respuesta: ""
                                  },
                                  estadoPalas: {
                                      respuesta: ""
                                  },
                                  estadoEPP: {
                                      respuesta: ""
                                  },
                                  estadoKitPoda: {
                                      respuesta: ""
                                  },
                                  estadoKitVivero: {
                                      respuesta: ""
                                  },
                                  estadoOtrosHerramientas: {
                                      respuesta: ""
                                  },
                                  necesitaTijeras: {
                                      respuesta: ""
                                  },
                                  necesitaSerruchos: {
                                      respuesta: ""
                                  },
                                  necesitaMachetes: {
                                      respuesta: ""
                                  },
                                  necesitaBaldes: {
                                      respuesta: ""
                                  },
                                  necesitaTanques: {
                                      respuesta: ""
                                  },
                                  necesitaPalas: {
                                      respuesta: ""
                                  },
                                  necesitaEPP: {
                                      respuesta: ""
                                  },
                                  necesitaKitPoda: {
                                      respuesta: ""
                                  },
                                  necesitaKitVivero: {
                                      respuesta: ""
                                  },
                                  necesitaOtrosHerramientas: {
                                      respuesta: ""
                                  }
                              }
                          },
                          proyectosInversion: {
                              preguntas: {
                                  necesitaPlantasCacao800801: {
                                      respuesta: ""
                                  },
                                  necesitaComboApicola: {
                                      respuesta: ""
                                  },
                                  necesitaPiesCriasInsumos: {
                                      respuesta: ""
                                  },
                                  necesitaPecesInsumos: {
                                      respuesta: ""
                                  },
                                  necesitaRiego: {
                                      respuesta: ""
                                  },
                                  necesitaOtrosProyectosInversion: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirPlantasCacao800801: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirComboApicola: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirPiesCriasInsumos: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirPecesInsumos: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirRiego: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirOtros: {
                                      respuesta: ""
                                  },
                                  condAdecuadasPlantasCacao800801: {
                                      respuesta: ""
                                  },
                                  condAdecuadasComboApicola: {
                                      respuesta: ""
                                  },
                                  condAdecuadasPiesCriasInsumos: {
                                      respuesta: ""
                                  },
                                  condAdecuadasPecesInsumos: {
                                      respuesta: ""
                                  },
                                  condAdecuadasRiego: {
                                      respuesta: ""
                                  },
                                  condAdecuadasOtros: {
                                      respuesta: ""
                                  },
                                  condEconomicasPlantasCacao800801: {
                                      respuesta: ""
                                  },
                                  condEconomicasComboApicola: {
                                      respuesta: ""
                                  },
                                  condEconomicasPiesCriasInsumos: {
                                      respuesta: ""
                                  },
                                  condEconomicasPecesInsumos: {
                                      respuesta: ""
                                  },
                                  condEconomicasRiego: {
                                      respuesta: ""
                                  },
                                  condEconomicasOtros: {
                                      respuesta: ""
                                  }
                              }
                          },
                          calidadPostCosecha: {
                              preguntas: {
                                  necesitaCajonFermentacion: {
                                      respuesta: ""
                                  },
                                  necesitaMarquesinas: {
                                      respuesta: ""
                                  },
                                  necesitaTendales: {
                                      respuesta: ""
                                  },
                                  necesitaSecadoras: {
                                      respuesta: ""
                                  },
                                  necesitaOtrosCalidadPostCosecha: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirCajonFermentacion: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirMarquesinas: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirTendales: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirSecadoras: {
                                      respuesta: ""
                                  },
                                  disponibilidadInvertirOtrosCalidadPostCosecha: {
                                      respuesta: ""
                                  },
                                  condAdecuadasFermentacion: {
                                      respuesta: ""
                                  },
                                  condAdecuadasMarquesinas: {
                                      respuesta: ""
                                  },
                                  condAdecuadasTendales: {
                                      respuesta: ""
                                  },
                                  condAdecuadasSecadoras: {
                                      respuesta: ""
                                  },
                                  condAdecuadasOtrosCalidadPostCosecha: {
                                      respuesta: ""
                                  },
                                  condEconomicasFermentacion: {
                                      respuesta: ""
                                  },
                                  condEconomicasMarquesinas: {
                                      respuesta: ""
                                  },
                                  condEconomicasTendales: {
                                      respuesta: ""
                                  },
                                  condEconomicasSecadoras: {
                                      respuesta: ""
                                  },
                                  condEconomicasOtrosCalidadPostCosecha: {
                                      respuesta: ""
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
    }
  }
}
