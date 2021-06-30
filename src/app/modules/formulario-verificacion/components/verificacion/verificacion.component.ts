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
import { CosechaComponent } from '../sections/cosecha/cosecha.component';
import { FermentacionComponent } from '../sections/fermentacion/fermentacion.component';
import { SecadoComponent } from '../sections/secado/secado.component';
import { VentaComponent } from '../sections/venta/venta.component';
import { CondicionesLaboralesComponent } from '../sections/condiciones-laborales/condiciones-laborales.component';
import { ConservacionAguaManejoDesechosComponent } from '../sections/conservacion-agua-manejo-desechos/conservacion-agua-manejo-desechos.component';
import { ConservacionSuelosBiodiversidadComponent } from '../sections/conservacion-suelos-biodiversidad/conservacion-suelos-biodiversidad.component';
import { ProteccionAreasRibereniasComponent } from '../sections/proteccion-areas-riberenias/proteccion-areas-riberenias.component';
import { ProteccionAreasAltoValorConservacionComponent } from '../sections/proteccion-areas-alto-valor-conservacion/proteccion-areas-alto-valor-conservacion.component';
import { DiversificacionIngresosComponent } from '../sections/diversificacion-ingresos/diversificacion-ingresos.component';

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
  @ViewChild(CosechaComponent) cosechaComponent: CosechaComponent;
  @ViewChild(FermentacionComponent) fermentacionComponent: FermentacionComponent;
  @ViewChild(SecadoComponent) secadoComponent: SecadoComponent;
  @ViewChild(VentaComponent) ventaComponent: VentaComponent;
  @ViewChild(CondicionesLaboralesComponent) condicionesLaboralesComponent: CondicionesLaboralesComponent;
  @ViewChild(ConservacionAguaManejoDesechosComponent) conservacionAguaManejoDesechosComponent: ConservacionAguaManejoDesechosComponent;
  @ViewChild(ConservacionSuelosBiodiversidadComponent) conservacionSuelosBiodiversidadComponent: ConservacionSuelosBiodiversidadComponent;
  @ViewChild(ProteccionAreasRibereniasComponent) proteccionAreasRibereniasComponent: ProteccionAreasRibereniasComponent;
  @ViewChild(ProteccionAreasAltoValorConservacionComponent) proteccionAreasAltoValorConservacionComponent: ProteccionAreasAltoValorConservacionComponent;
  @ViewChild(DiversificacionIngresosComponent) diversificacionIngresosComponent: DiversificacionIngresosComponent;

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
        cosecha: this.cosechaComponent.seccion,
        fermentacion: this.fermentacionComponent.seccion,
        secado: this.secadoComponent.seccion,
        venta: this.ventaComponent.seccion,
        condicionesLaborales: this.condicionesLaboralesComponent.seccion,
        conservacionAguaManejoDesechos: this.conservacionAguaManejoDesechosComponent.seccion,
        conservacionSuelosBiodiversidad: this.conservacionSuelosBiodiversidadComponent.seccion,
        proteccionAreasRiberenias: this.proteccionAreasRibereniasComponent.seccion,
        proteccionAreasAltoValorConservacion: this.proteccionAreasAltoValorConservacionComponent.seccion,
        diversificacionIngresos: this.diversificacionIngresosComponent.seccion,
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
      this.fermentacionComponent.setValues(this.formularioVerificacion);
      this.secadoComponent.setValues(this.formularioVerificacion);
      this.ventaComponent.setValues(this.formularioVerificacion);
      this.condicionesLaboralesComponent.setValues(this.formularioVerificacion);
      this.conservacionAguaManejoDesechosComponent.setValues(this.formularioVerificacion);
      this.conservacionSuelosBiodiversidadComponent.setValues(this.formularioVerificacion);
      this.proteccionAreasRibereniasComponent.setValues(this.formularioVerificacion);
      this.proteccionAreasAltoValorConservacionComponent.setValues(this.formularioVerificacion);
      this.diversificacionIngresosComponent.setValues(this.formularioVerificacion);
    }
  }

}
