import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { AgricultorService } from 'src/app/modules/core/services/agricultor/agricultor.service';
import { FormularioVerificacionService } from 'src/app/modules/core/services/formularioVerificacion/formulario-verificacion.service';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { SaludSeguridadOcupacionalComponent } from '../sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component';
import { BodegaComponent } from '../sections/bodega/bodega.component';
import { ControlMalezasComponent } from '../sections/control-malezas/control-malezas.component';
import { DatosFincaComponent } from '../sections/datos-finca/datos-finca.component';
import { FertilizacionComponent } from '../sections/fertilizacion/fertilizacion.component';
import { InjertacionComponent } from '../sections/injertacion/injertacion.component';
import { ManejoSueloComponent } from '../sections/manejo-suelo/manejo-suelo.component';
import { MIPEComponent } from '../sections/mipe/mipe.component';
import { PodaComponent } from '../sections/poda/poda.component';
import { RegistrosProductorComponent } from '../sections/registros-productor/registros-productor.component';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})
export class VerificacionComponent implements OnInit {
  
  formularioVerificacion: FormularioVerificacion;
  verificacionForm: FormGroup;
  listaAgricultores: Agricultor[];
  agricultor: Agricultor;
  isLoading: boolean = true;

  @ViewChild(DatosFincaComponent) datosFincaComponent: DatosFincaComponent;
  @ViewChild(InjertacionComponent) injertacionComponent: InjertacionComponent;
  @ViewChild(ManejoSueloComponent) manejoSueloComponent: ManejoSueloComponent;
  @ViewChild(FertilizacionComponent) fertilizacionComponent: FertilizacionComponent;
  @ViewChild(BodegaComponent) bodegaComponent: BodegaComponent;
  @ViewChild(ControlMalezasComponent) controlMalezasComponent: ControlMalezasComponent;
  @ViewChild(PodaComponent) podaComponent: PodaComponent;
  @ViewChild(MIPEComponent) mIPEComponent: MIPEComponent;
  @ViewChild(SaludSeguridadOcupacionalComponent) saludSeguridadOcupacionalComponent: SaludSeguridadOcupacionalComponent;
  @ViewChild(RegistrosProductorComponent) registrosProductorComponent: RegistrosProductorComponent;

  constructor(
    private agricultorService: AgricultorService,
    private formBuilder: FormBuilder,
    private formularioService: FormularioVerificacionService,
    private tecnicoService: TecnicoService,
    private changeDetector: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) {
    this.verificacionForm = this.formBuilder.group({
      agricultor: new FormControl(''),
      cosecha: this.formBuilder.group({
        cosechaSeparadoCacaoNacionalCCN51: new FormControl(''),
        plantasLaceracionesCicatricesMalaPractica: new FormControl('')
      }),
      fermentacion: this.formBuilder.group({
        fermetaCacao: new FormControl(''),
        razonNoFermenta: new FormControl(''),
        modoFermentacion: new FormControl(''),
        medidasHigieneFermentacion: new FormControl(''),
        aumentoIngresoPorFermentacion: new FormControl('')
      }),
      secado: this.formBuilder.group({
        nivelHumedadCacaoVendido: new FormControl(''),
        maneraRealzarSecado: new FormControl(''),
        mejoraIngresoMejorTratamientoSecadoCacao: new FormControl('')
      }),
      venta: this.formBuilder.group({
        personaVenderCacao: new FormControl(''),
        razon1: new FormControl(''),
        razon2: new FormControl(''),
        recibeBonosEmpresaProgramaLINDT: new FormControl(''),
        frecuenciaRecibeBono: new FormControl('')
      }),
      condicionesLaborales: this.formBuilder.group({
        discriminacion: new FormControl(''),
        explotacion: new FormControl(''),
        trabajoInfantil: new FormControl(''),
        documentosSoporte: new FormControl(''),
        montoAcuerdoContratoAgricola: new FormControl('')
      }),
      conservacionAguaManejoDesechos: this.formBuilder.group({
        fincaConRiego: new FormControl(''),
        disenioRiego: new FormControl(''),
        hectareasDisenioRiego: new FormControl(''),
        permisoExtraerAguaRiego: new FormControl(''),
        analisisAguaRiego: new FormControl(''),
        presentaAnexos: new FormControl(''),
        utilizaFiltroEcologico: new FormControl(''),
        razonUsoFiltroEcologico: new FormControl(''),
        areaDeschPlasticos: new FormControl(''),
        fincaLibrePlasticos: new FormControl(''),
        clasificaBasuraDomestica: new FormControl(''),
        criterioClasificaBasuraDomestica: new FormControl(''),
        practicaReciclajeCompostaje: new FormControl(''),
        tratamientoBasura: new FormControl(''),
        conocimientoAreaRecepcioEnvasesProductosQuimicos: new FormControl(''),
        usoServicioAreaRecepcioEnvasesProductosQuimicos: new FormControl(''),
        frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos: new FormControl(''),
        almacenaSeguridadEnvasesPrevioTraslado: new FormControl(''),
        lugarAlmacena: new FormControl(''),
        tratamientoAguasNegras: new FormControl(''),
        tipoExtraccion: new FormControl(''),
        infraestructuraRiego: new FormControl(''),
        impactoRiego: new FormControl(''),
      }),
      conservacionSuelosBiodiversidad: this.formBuilder.group({
        practicasConservacionSuelos: new FormControl(''),
        practicaDeforestacion: new FormControl(''),
        plantadoArbolesSombrioRecient: new FormControl(''),
        cuantosArbolesSombrio: new FormControl(''),
        promedioArbolesXHectarea: new FormControl(''),
        reforestadoOrillas: new FormControl(''),
        promedioArbolXHectarea12MAltura: new FormControl(''),
        especiesDiferentesArbolesXHectarea: new FormControl(''),
        especiesArbolesEnCultivo: new FormControl(''),
        especifiqueOtrosEspeciesArboles: new FormControl('')
      }),
      proteccionAreasRiberenias: this.formBuilder.group({
        poseeFuenteHidrica: new FormControl(''),
        nombreFuenteHidrica: new FormControl(''),
        tipoFuenteHidrica: new FormControl(''),
        especifiqueOtros: new FormControl(''),
        consideradaFuenteHidrica: new FormControl(''),
        poseeNacientes: new FormControl(''),
        cuantasNacientes: new FormControl(''),
        brindaProteccionFuenteHidrica: new FormControl(''),
        comoBrindaProtFuentHidr: new FormControl(''),
        distanciaRequerida: new FormControl('')
      }),
      proteccionAreasAltoValorConservacion: this.formBuilder.group({
        sueloPresentaProblemaErosion: new FormControl(''),
        tipoProblemaErosion: new FormControl(''),
        necesitaImplementarPracticasMejoraSuelo: new FormControl(''),
        comoQuePracticas: new FormControl(''),
        gradoPresentanPendientes: new FormControl(''),
        cuentaConAreaForestales: new FormControl(''),
        tipoAreaForestal: new FormControl(''),
        realizaPlanesCorteExtraccionMadera: new FormControl(''),
        presentaAnexosAreasAltoValor: new FormControl(''),
        realizaPlanesReforestacion: new FormControl(''),
        conoceEspeciePeligroExtincionEnFinca: new FormControl(''),
        cualesEspeciesPeligroExtincion: new FormControl(''),
        especifiqueCualesEspeciesPeligroExtincion: new FormControl(''),
        fincaConsideradaAltoValor: new FormControl(''),
        tipoAltoValor: new FormControl('')
      }),
      diversificacionIngresos: this.formBuilder.group({
        usoCultivoDiferenteCacao: new FormControl(''),
        otraActividadDentroFincaConIngreso: new FormControl(''),
        realizaActividadFueraFincaConIngreso: new FormControl(''),
        huertosOrganicosEnFinca: new FormControl(''),
        otraActividadFueraFincaConIngreso: new FormControl(''),
        actividadFueraFincaConIngreso: new FormControl('')
      }),
      capacitacionesBeneficioPrograma: this.formBuilder.group({
        capacitacion: this.formBuilder.group({
          utilidadCacaoFinoAromaSostenibilidadTrazabilidad: new FormControl(''),
          aplicaCacaoFinoAromaSostenibilidadTrazabilidad: new FormControl(''),
          utilidadBuenasPracticasAgricolas: new FormControl(''),
          aplicaBuenasPracticasAgricolas: new FormControl(''),
          utilidadParametrosCalidad: new FormControl(''),
          aplicaParametrosCalidad: new FormControl(''),
          utilidadBuenasPracticasSociales: new FormControl(''),
          aplicaBuenasPracticasSociales: new FormControl(''),
          utilidadBuenasPracticasAmbientales: new FormControl(''),
          aplicaBuenasPracticasAmbientales: new FormControl(''),
          utilidadElaboracionProductosOrganicos: new FormControl(''),
          aplicaElaboracionProductosOrganicos: new FormControl(''),
          utilidadReproduccionVegetativa: new FormControl(''),
          aplicaReproduccionVegetativa: new FormControl(''),
          utilidadPoda: new FormControl(''),
          aplicaPoda: new FormControl(''),
          utilidadApicultura: new FormControl(''),
          aplicaApicultura: new FormControl(''),
          utilidadPorcicultura: new FormControl(''),
          aplicaPorcicultura: new FormControl(''),
          utilidadPiscicultura: new FormControl(''),
          aplicaPiscicultura: new FormControl(''),
          utilidadRiego: new FormControl(''),
          aplicaRiego: new FormControl(''),
          utilidadAgroforesteriaDinamica: new FormControl(''),
          aplicaAgroforesteriaDinamica: new FormControl(''),
          temasAdicionalesGustariaAprender: new FormControl('')
        }),
        incentivos: this.formBuilder.group({
          necesidadesDetectadasFinca: new FormControl(''),
          ambiental: this.formBuilder.group({
            estadoPlantasFrutales: new FormControl(''),
            estadoPlantasForestales: new FormControl(''),
            estadoOtrosAmbiental: new FormControl(''),
            necesitaPlantasFrutales: new FormControl(''),
            necesitaPlantasForestales: new FormControl(''),
            necesitaOtrosAmbiental: new FormControl('')
          }),
          insumos: this.formBuilder.group({
            estadoFertilizanteEdafico: new FormControl(''),
            estadoFertilizanteFoliar: new FormControl(''),
            necesitaFertilizanteEdafico: new FormControl(''),
            necesitaFertilizanteFoliar: new FormControl('')
          }),
          maquinariaAgricola: this.formBuilder.group({
            estadoMotoguadania: new FormControl(''),
            estadoMotosierra: new FormControl(''),
            estadoPodadoraDeAltura: new FormControl(''),
            estadoBombaRiego: new FormControl(''),
            estadoBombaAMotor: new FormControl(''),
            estadoOtrosMaquinariaAgricola: new FormControl(''),
            necesitaMotoguadania: new FormControl(''),
            necesitaMotosierra: new FormControl(''),
            necesitaPodadoraDeAltura: new FormControl(''),
            necesitaBombaRiego: new FormControl(''),
            necesitaBombaAMotor: new FormControl(''),
            necesitaOtrosMaquinariaAgricola: new FormControl('')
          }),
          herramientas: this.formBuilder.group({
            estadoTijeras: new FormControl(''),
            estadoSerruchos: new FormControl(''),
            estadoMachetes: new FormControl(''),
            estadoBaldes: new FormControl(''),
            estadoTanques: new FormControl(''),
            estadoPalas: new FormControl(''),
            estadoEPP: new FormControl(''),
            estadoKitPoda: new FormControl(''),
            estadoKitVivero: new FormControl(''),
            estadoOtrosHerramientas: new FormControl(''),
            necesitaTijeras: new FormControl(''),
            necesitaSerruchos: new FormControl(''),
            necesitaMachetes: new FormControl(''),
            necesitaBaldes: new FormControl(''),
            necesitaTanques: new FormControl(''),
            necesitaPalas: new FormControl(''),
            necesitaEPP: new FormControl(''),
            necesitaKitPoda: new FormControl(''),
            necesitaKitVivero: new FormControl(''),
            necesitaOtrosHerramientas: new FormControl('')
          }),
          proyectosInversion: this.formBuilder.group({
            necesitaPlantasCacao800801: new FormControl(''),
            necesitaComboApicola: new FormControl(''),
            necesitaPiesCriasInsumos: new FormControl(''),
            necesitaPecesInsumos: new FormControl(''),
            necesitaRiego: new FormControl(''),
            necesitaOtrosProyectosInversion: new FormControl(''),
            disponibilidadInvertirPlantasCacao800801: new FormControl(''),
            disponibilidadInvertirComboApicola: new FormControl(''),
            disponibilidadInvertirPiesCriasInsumos: new FormControl(''),
            disponibilidadInvertirPecesInsumos: new FormControl(''),
            disponibilidadInvertirRiego: new FormControl(''),
            disponibilidadInvertirOtros: new FormControl(''),
            condAdecuadasPlantasCacao800801: new FormControl(''),
            condAdecuadasComboApicola: new FormControl(''),
            condAdecuadasPiesCriasInsumos: new FormControl(''),
            condAdecuadasPecesInsumos: new FormControl(''),
            condAdecuadasRiego: new FormControl(''),
            condAdecuadasOtros: new FormControl(''),
            condEconomicasPlantasCacao800801: new FormControl(''),
            condEconomicasComboApicola: new FormControl(''),
            condEconomicasPiesCriasInsumos: new FormControl(''),
            condEconomicasPecesInsumos: new FormControl(''),
            condEconomicasRiego: new FormControl(''),
            condEconomicasOtros: new FormControl(''),
          }),
          calidadPostCosecha: this.formBuilder.group({
            necesitaCajonFermentacion: new FormControl(''),
            necesitaMarquesinas: new FormControl(''),
            necesitaTendales: new FormControl(''),
            necesitaSecadoras: new FormControl(''),
            necesitaOtrosCalidadPostCosecha: new FormControl(''),
            disponibilidadInvertirCajonFermentacion: new FormControl(''),
            disponibilidadInvertirMarquesinas: new FormControl(''),
            disponibilidadInvertirTendales: new FormControl(''),
            disponibilidadInvertirSecadoras: new FormControl(''),
            disponibilidadInvertirOtrosCalidadPostCosecha: new FormControl(''),
            condAdecuadasFermentacion: new FormControl(''),
            condAdecuadasMarquesinas: new FormControl(''),
            condAdecuadasTendales: new FormControl(''),
            condAdecuadasSecadoras: new FormControl(''),
            condAdecuadasOtrosCalidadPostCosecha: new FormControl(''),
            condEconomicasFermentacion: new FormControl(''),
            condEconomicasMarquesinas: new FormControl(''),
            condEconomicasTendales: new FormControl(''),
            condEconomicasSecadoras: new FormControl(''),
            condEconomicasOtrosCalidadPostCosecha: new FormControl('')
          })
        })
      })
    })

  }

  ngOnInit(): void {
    this.agricultorService.list().subscribe(agricultores => {
      this.listaAgricultores = agricultores;
    });
    this.tecnicoService.fetch();
  }

  ngAfterViewInit() {
    this.setFormulario();
  }

  async setFormulario() {
    await this.fetchFormulario();
    await this.fetchAgricultor();
    this.updateView();
    this.setFormValues();
  }

  updateView() {
    this.isLoading = false;
    this.changeDetector.detectChanges();
  }

  async fetchFormulario(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id !== null) {
      const formulario = await this.formularioService.get(id);
      this.formularioVerificacion = formulario;
    }
  }

  async fetchAgricultor(): Promise<void> {
    if (!this.isFormEmpty()) {
      this.agricultor = await this.agricultorService.get(this.formularioVerificacion["agricultorId"]);
      for (let agricultor of this.listaAgricultores) {
        if (agricultor.id === this.agricultor.id) {
          this.verificacionForm.get('agricultor').setValue(agricultor);
          break;
        }
      }
    }
  }

  isFormEmpty() {
    return this.formularioVerificacion === undefined || this.formularioVerificacion === null;
  }

  onSubmit() {
    console.log(this.verificacionForm);
    this.agricultor = this.verificacionForm.value.agricultor;
    let formularioVerificacionParam: FormularioVerificacion = {
      id: '',
      agricultor: this.agricultor,
      tecnico: this.tecnicoService.loggedTecnico,
      fechaVisita: new Date().toLocaleDateString(),
      secciones: {
        datosFinca: this.datosFincaComponent.seccion,
        injertacion: this.injertacionComponent.seccion,
        manejoSuelo: this.manejoSueloComponent.seccion,
        fertilizacion: this.fertilizacionComponent.seccion,
        bodega: this.bodegaComponent.seccion,
        controlMalezas: this.controlMalezasComponent.seccion,
        poda: this.podaComponent.seccion,
        MIPE: this.mIPEComponent.seccion,
        saludSeguridadOcupacional: this.saludSeguridadOcupacionalComponent.seccion,
        registrosProductor: this.registrosProductorComponent.seccion,
        cosecha: {
          preguntas: {
            cosechaSeparadoCacaoNacionalCCN51: {
              respuesta: ''
            },
            plantasLaceracionesCicatricesMalaPractica: {
              respuesta: ''
            }
          }
        },
        fermentacion: {
          preguntas: {
            fermetaCacao: {
              respuesta: '',
              preguntas: {
                razonNoFermenta: {
                  respuesta: ''
                },
                modoFermentacion: {
                  respuesta: ''
                },
                medidasHigieneFermentacion: {
                  respuesta: ''
                },
                aumentoIngresoPorFermentacion: {
                  respuesta: ''
                }
              }
            }
          }
        },
        secado: {
          preguntas: {
            nivelHumedadCacaoVendido: {
              respuesta: ''
            },
            maneraRealzarSecado: {
              respuesta: ''
            },
            mejoraIngresoMejorTratamientoSecadoCacao: {
              respuesta: ''
            }
          }
        },
        venta: {
          preguntas: {
            personaVenderCacao: {
              respuesta: '',
              preguntas: {
                razon1: {
                  respuesta: ''
                },
                razon2: {
                  respuesta: ''
                }
              }
            },
            recibeBonosEmpresaProgramaLINDT: {
              respuesta: '',
              preguntas: {
                frecuenciaRecibeBono: {
                  respuesta: ''
                }
              }
            }
          }
        },
        condicionesLaborales: {
          preguntas: {
            discriminacion: {
              respuesta: ''
            },
            explotacion: {
              respuesta: ''
            },
            trabajoInfantil: {
              respuesta: ''
            },
            documentosSoporte: {
              respuesta: ''
            },
            montoAcuerdoContratoAgricola: {
              respuesta: ''
            }
          }
        },
        conservacionAguaManejoDesechos: {
          preguntas: {
            fincaConRiego: {
              respuesta: ''
            },
            disenioRiego: {
              respuesta: '',
              preguntas: {
                hectareasDisenioRiego: {
                  respuesta: ''
                }
              }
            },
            permisoExtraerAguaRiego: {
              respuesta: ''
            },
            analisisAguaRiego: {
              respuesta: ''
            },
            presentaAnexos: {
              respuesta: ''
            },
            utilizaFiltroEcologico: {
              respuesta: '',
              preguntas: {
                razonUsoFiltroEcologico: {
                  respuesta: ''
                }
              }
            },
            areaDeschPlasticos: {
              respuesta: ''
            },
            fincaLibrePlasticos: {
              respuesta: ''
            },
            clasificaBasuraDomestica: {
              respuesta: ''
            },
            criterioClasificaBasuraDomestica: {
              respuesta: ''
            },
            practicaReciclajeCompostaje: {
              respuesta: ''
            },
            tratamientoBasura: {
              respuesta: ''
            },
            conocimientoAreaRecepcioEnvasesProductosQuimicos: {
              respuesta: '',
              preguntas: {
                usoServicioAreaRecepcioEnvasesProductosQuimicos: {
                  respuesta: ''
                },
                frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos: {
                  respuesta: ''
                },
                almacenaSeguridadEnvasesPrevioTraslado: {
                  respuesta: '',
                  preguntas: {
                    lugarAlmacena: {
                      respuesta: ''
                    }
                  }
                }
              }
            },
            tratamientoAguasNegras: {
              respuesta: ''
            },
            tipoExtraccion: {
              respuesta: ''
            },
            infraestructuraRiego: {
              respuesta: ''
            },
            impactoRiego: {
              respuesta: ''
            }
          }
        },
        conservacionSuelosBiodiversidad: {
          preguntas: {
            practicasConservacionSuelos: {
              respuesta: ''
            },
            practicaDeforestacion: {
              respuesta: ''
            },
            plantadoArbolesSombrioRecient: {
              respuesta: '',
              preguntas: {
                cuantosArbolesSombrio: {
                  respuesta: ''
                },
                promedioArbolesXHectarea: {
                  respuesta: ''
                },
                reforestadoOrillas: {
                  respuesta: ''
                }
              }
            },
            promedioArbolXHectarea12MAltura: {
              respuesta: ''
            },
            especiesDiferentesArbolesXHectarea: {
              respuesta: ''
            },
            especiesArbolesEnCultivo: {
              respuesta: '',
              preguntas: {
                especifiqueOtrosEspeciesArboles: {
                  respuesta: ''
                }
              }
            }
          }
        },
        proteccionAreasRiberenias: {
          preguntas: {
            poseeFuenteHidrica: {
              respuesta: '',
              preguntas: {
                nombreFuenteHidrica: {
                  respuesta: '',
                  preguntas: {
                    especifiqueOtros: {
                      respuesta: ''
                    }
                  }
                },
                consideradaFuenteHidrica: {
                  respuesta: ''
                },
                tipoFuenteHidrica: {
                  respuesta: ''
                },
                poseeNacientes: {
                  respuesta: '',
                  preguntas: {
                    cuantasNacientes: {
                      respuesta: ''
                    }
                  }
                },
                brindaProteccionFuenteHidrica: {
                  respuesta: '',
                  preguntas: {
                    comoBrindaProtFuentHidr: {
                      respuesta: ''
                    }
                  }
                },
                distanciaRequerida: {
                  respuesta: ''
                }
              }
            }
          }
        },
        proteccionAreasAltoValorConservacion: {
          preguntas: {
            sueloPresentaProblemaErosion: {
              respuesta: '',
              preguntas: {
                tipoProblemaErosion: {
                  respuesta: ''
                }
              }
            },
            necesitaImplementarPracticasMejoraSuelo: {
              respuesta: '',
              preguntas: {
                comoQuePracticas: {
                  respuesta: ''
                }
              }
            },
            gradoPresentanPendientes: {
              respuesta: ''
            },
            cuentaConAreaForestales: {
              respuesta: '',
              preguntas: {
                tipoAreaForestal: {
                  respuesta: ''
                }
              }
            },
            realizaPlanesCorteExtraccionMadera: {
              respuesta: ''
            },
            presentaAnexosAreasAltoValor: {
              respuesta: ''
            },
            realizaPlanesReforestacion: {
              respuesta: ''
            },
            conoceEspeciePeligroExtincionEnFinca: {
              respuesta: '',
              preguntas: {
                cualesEspeciesPeligroExtincion: {
                  respuesta: ''
                },
                especifiqueCualesEspeciesPeligroExtincion: {
                  respuesta: ''
                }
              }
            },
            fincaConsideradaAltoValor: {
              respuesta: '',
              preguntas: {
                tipoAltoValor: {
                  respuesta: ''
                }
              }
            }
          }
        },
        diversificacionIngresos: {
          preguntas: {
            usoCultivoDiferenteCacao: {
              respuesta: ''
            },
            otraActividadDentroFincaConIngreso: {
              respuesta: ''
            },
            huertosOrganicosEnFinca: {
              respuesta: ''
            },
            otraActividadFueraFincaConIngreso: {
              respuesta: '',
              preguntas: {
                actividadFueraFincaConIngreso: {
                  respuesta: ''
                },
                realizaActividadFueraFincaConIngreso: {
                  respuesta: ''
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
                  respuesta: ''
                },
                aplicaCacaoFinoAromaSostenibilidadTrazabilidad: {
                  respuesta: ''
                },
                utilidadBuenasPracticasAgricolas: {
                  respuesta: ''
                },
                aplicaBuenasPracticasAgricolas: {
                  respuesta: ''
                },
                utilidadParametrosCalidad: {
                  respuesta: ''
                },
                aplicaParametrosCalidad: {
                  respuesta: ''
                },
                utilidadBuenasPracticasSociales: {
                  respuesta: ''
                },
                aplicaBuenasPracticasSociales: {
                  respuesta: ''
                },
                utilidadBuenasPracticasAmbientales: {
                  respuesta: ''
                },
                aplicaBuenasPracticasAmbientales: {
                  respuesta: ''
                },
                utilidadElaboracionProductosOrganicos: {
                  respuesta: ''
                },
                aplicaElaboracionProductosOrganicos: {
                  respuesta: ''
                },
                utilidadReproduccionVegetativa: {
                  respuesta: ''
                },
                aplicaReproduccionVegetativa: {
                  respuesta: ''
                },
                utilidadPoda: {
                  respuesta: ''
                },
                aplicaPoda: {
                  respuesta: ''
                },
                utilidadApicultura: {
                  respuesta: ''
                },
                aplicaApicultura: {
                  respuesta: ''
                },
                utilidadPorcicultura: {
                  respuesta: ''
                },
                aplicaPorcicultura: {
                  respuesta: ''
                },
                utilidadPiscicultura: {
                  respuesta: ''
                },
                aplicaPiscicultura: {
                  respuesta: ''
                },
                utilidadRiego: {
                  respuesta: ''
                },
                aplicaRiego: {
                  respuesta: ''
                },
                utilidadAgroforesteriaDinamica: {
                  respuesta: ''
                },
                aplicaAgroforesteriaDinamica: {
                  respuesta: ''
                },
                temasAdicionalesGustariaAprender: {
                  respuesta: ''
                }
              }
            },
            incentivos: {
              preguntas: {
                necesidadesDetectadasFinca: {
                  respuesta: ''
                }
              },
              secciones: {
                ambiental: {
                  preguntas: {
                    estadoPlantasFrutales: {
                      respuesta: ''
                    },
                    estadoPlantasForestales: {
                      respuesta: ''
                    },
                    estadoOtrosAmbiental: {
                      respuesta: ''
                    },
                    necesitaPlantasFrutales: {
                      respuesta: ''
                    },
                    necesitaPlantasForestales: {
                      respuesta: ''
                    },
                    necesitaOtrosAmbiental: {
                      respuesta: ''
                    }
                  }
                },
                insumos: {
                  preguntas: {
                    estadoFertilizanteEdafico: {
                      respuesta: ''
                    },
                    estadoFertilizanteFoliar: {
                      respuesta: ''
                    },
                    necesitaFertilizanteEdafico: {
                      respuesta: ''
                    },
                    necesitaFertilizanteFoliar: {
                      respuesta: ''
                    }
                  }
                },
                maquinariaAgricola: {
                  preguntas: {
                    estadoMotoguadania: {
                      respuesta: ''
                    },
                    estadoMotosierra: {
                      respuesta: ''
                    },
                    estadoPodadoraDeAltura: {
                      respuesta: ''
                    },
                    estadoBombaRiego: {
                      respuesta: ''
                    },
                    estadoBombaAMotor: {
                      respuesta: ''
                    },
                    estadoOtrosMaquinariaAgricola: {
                      respuesta: ''
                    },
                    necesitaMotoguadania: {
                      respuesta: ''
                    },
                    necesitaMotosierra: {
                      respuesta: ''
                    },
                    necesitaPodadoraDeAltura: {
                      respuesta: ''
                    },
                    necesitaBombaRiego: {
                      respuesta: ''
                    },
                    necesitaBombaAMotor: {
                      respuesta: ''
                    },
                    necesitaOtrosMaquinariaAgricola: {
                      respuesta: ''
                    }
                  }
                },
                herramientas: {
                  preguntas: {
                    estadoTijeras: {
                      respuesta: ''
                    },
                    estadoSerruchos: {
                      respuesta: ''
                    },
                    estadoMachetes: {
                      respuesta: ''
                    },
                    estadoBaldes: {
                      respuesta: ''
                    },
                    estadoTanques: {
                      respuesta: ''
                    },
                    estadoPalas: {
                      respuesta: ''
                    },
                    estadoEPP: {
                      respuesta: ''
                    },
                    estadoKitPoda: {
                      respuesta: ''
                    },
                    estadoKitVivero: {
                      respuesta: ''
                    },
                    estadoOtrosHerramientas: {
                      respuesta: ''
                    },
                    necesitaTijeras: {
                      respuesta: ''
                    },
                    necesitaSerruchos: {
                      respuesta: ''
                    },
                    necesitaMachetes: {
                      respuesta: ''
                    },
                    necesitaBaldes: {
                      respuesta: ''
                    },
                    necesitaTanques: {
                      respuesta: ''
                    },
                    necesitaPalas: {
                      respuesta: ''
                    },
                    necesitaEPP: {
                      respuesta: ''
                    },
                    necesitaKitPoda: {
                      respuesta: ''
                    },
                    necesitaKitVivero: {
                      respuesta: ''
                    },
                    necesitaOtrosHerramientas: {
                      respuesta: ''
                    }
                  }
                },
                proyectosInversion: {
                  preguntas: {
                    necesitaPlantasCacao800801: {
                      respuesta: ''
                    },
                    necesitaComboApicola: {
                      respuesta: ''
                    },
                    necesitaPiesCriasInsumos: {
                      respuesta: ''
                    },
                    necesitaPecesInsumos: {
                      respuesta: ''
                    },
                    necesitaRiego: {
                      respuesta: ''
                    },
                    necesitaOtrosProyectosInversion: {
                      respuesta: ''
                    },
                    disponibilidadInvertirPlantasCacao800801: {
                      respuesta: ''
                    },
                    disponibilidadInvertirComboApicola: {
                      respuesta: ''
                    },
                    disponibilidadInvertirPiesCriasInsumos: {
                      respuesta: ''
                    },
                    disponibilidadInvertirPecesInsumos: {
                      respuesta: ''
                    },
                    disponibilidadInvertirRiego: {
                      respuesta: ''
                    },
                    disponibilidadInvertirOtros: {
                      respuesta: ''
                    },
                    condAdecuadasPlantasCacao800801: {
                      respuesta: ''
                    },
                    condAdecuadasComboApicola: {
                      respuesta: ''
                    },
                    condAdecuadasPiesCriasInsumos: {
                      respuesta: ''
                    },
                    condAdecuadasPecesInsumos: {
                      respuesta: ''
                    },
                    condAdecuadasRiego: {
                      respuesta: ''
                    },
                    condAdecuadasOtros: {
                      respuesta: ''
                    },
                    condEconomicasPlantasCacao800801: {
                      respuesta: ''
                    },
                    condEconomicasComboApicola: {
                      respuesta: ''
                    },
                    condEconomicasPiesCriasInsumos: {
                      respuesta: ''
                    },
                    condEconomicasPecesInsumos: {
                      respuesta: ''
                    },
                    condEconomicasRiego: {
                      respuesta: ''
                    },
                    condEconomicasOtros: {
                      respuesta: ''
                    }
                  }
                },
                calidadPostCosecha: {
                  preguntas: {
                    necesitaCajonFermentacion: {
                      respuesta: ''
                    },
                    necesitaMarquesinas: {
                      respuesta: ''
                    },
                    necesitaTendales: {
                      respuesta: ''
                    },
                    necesitaSecadoras: {
                      respuesta: ''
                    },
                    necesitaOtrosCalidadPostCosecha: {
                      respuesta: ''
                    },
                    disponibilidadInvertirCajonFermentacion: {
                      respuesta: ''
                    },
                    disponibilidadInvertirMarquesinas: {
                      respuesta: ''
                    },
                    disponibilidadInvertirTendales: {
                      respuesta: ''
                    },
                    disponibilidadInvertirSecadoras: {
                      respuesta: ''
                    },
                    disponibilidadInvertirOtrosCalidadPostCosecha: {
                      respuesta: ''
                    },
                    condAdecuadasFermentacion: {
                      respuesta: ''
                    },
                    condAdecuadasMarquesinas: {
                      respuesta: ''
                    },
                    condAdecuadasTendales: {
                      respuesta: ''
                    },
                    condAdecuadasSecadoras: {
                      respuesta: ''
                    },
                    condAdecuadasOtrosCalidadPostCosecha: {
                      respuesta: ''
                    },
                    condEconomicasFermentacion: {
                      respuesta: ''
                    },
                    condEconomicasMarquesinas: {
                      respuesta: ''
                    },
                    condEconomicasTendales: {
                      respuesta: ''
                    },
                    condEconomicasSecadoras: {
                      respuesta: ''
                    },
                    condEconomicasOtrosCalidadPostCosecha: {
                      respuesta: ''
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    console.log(formularioVerificacionParam);
  }

  setFormValues(): void {
    if (!this.isFormEmpty()) {
      this.datosFincaComponent.setValues(this.formularioVerificacion);
      this.injertacionComponent.setValues(this.formularioVerificacion);
      this.manejoSueloComponent.setValues(this.formularioVerificacion);
      this.fertilizacionComponent.setValues(this.formularioVerificacion);
      this.bodegaComponent.setValues(this.formularioVerificacion);
      this.bodegaComponent.setValues(this.formularioVerificacion);
      this.podaComponent.setValues(this.formularioVerificacion);
      this.mIPEComponent.setValues(this.formularioVerificacion);
      this.saludSeguridadOcupacionalComponent.setValues(this.formularioVerificacion);
      this.registrosProductorComponent.setValues(this.formularioVerificacion);
    }
  }

}
