import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { AgricultorService } from 'src/app/modules/core/services/agricultor/agricultor.service';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { FormularioLineaBaseService } from 'src/app/modules/core/services/formularioLineaBase/formulario-linea-base.service';

@Component({
  selector: 'app-linea-base',
  templateUrl: './linea-base.component.html',
  styleUrls: ['./linea-base.component.css']
})
export class LineaBaseComponent implements OnInit, AfterViewInit {

  formularioLineaBase: FormularioLineaBase;
  lineaBaseForm: FormGroup;
  agricultor: Agricultor;
  listaAgricultores: Agricultor[];

  isLoading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioLineaBaseService,
    private agricultorService: AgricultorService,
    private tecnicoService: TecnicoService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {
    this.fetchFormulario();
    this.lineaBaseForm = this.formBuilder.group({
      agricultor: new FormControl(''),
      informacionFinca: this.formBuilder.group({
        provincia: new FormControl(''),
        canton: new FormControl(''),
        parroquia: new FormControl(''),
        recinto: new FormControl(''),
        nombreFinca: new FormControl(''),
        descripcionLlegarFinca: new FormControl('')
      }),
      hectareaje: this.formBuilder.group({
        dimensionTotalFinca: new FormControl(''),
        terreno: new FormControl(''),
        cultivoCacao: new FormControl(''),
        asociadoConTiene: new FormControl(''),
        otrosEspecifique: new FormControl(''),
        areaNetaCacao: new FormControl(''),
        distanciaPlantas: new FormControl(''),
        plantasXHectareas: new FormControl(''),
        tipoUbicacionZona: new FormControl('')
      }),
      cacaoCNN: this.formBuilder.group({
        areaTotalCNN: new FormControl(''),
        areaProduccion: new FormControl(''),
        edadCacaoProductivo: new FormControl(''),
        areaRecienSembrada: new FormControl(''),
        edadCacaoReciente: new FormControl(''),
        produccionAnioAnteriorCacaoCNN: new FormControl(''),
        precioPromedio: new FormControl('')
      }),
      cacaoNacional: this.formBuilder.group({
        areaTotalNacional: new FormControl(''),
        areaTotalNacionalViejo: new FormControl(''),
        edadCacaoViejo: new FormControl(''),
        brotesBasales: new FormControl(''),
        arbolesElite: new FormControl(''),
        areaTotalViejoInjertado: new FormControl(''),
        areaViejoInjertado: new FormControl(''),
        edadViejoInjertado: new FormControl(''),
        areaViejoInjertado2: new FormControl(''),
        edadViejoInjertado2: new FormControl(''),
        areaTotalNuevosClones: new FormControl(''),
        areaNuevosClones: new FormControl(''),
        edadNuevosClones: new FormControl(''),
        areaNuevosClones2: new FormControl(''),
        edadNuevosClones2: new FormControl(''),
        areaNuevosClones3: new FormControl(''),
        edadNuevosClones3: new FormControl(''),
        produccionAnioAnteriorCacaoNacional: new FormControl(''),
        precioPromedioXCacao: new FormControl('')
      }),
      cacaoNacionalNuevosClones: this.formBuilder.group({
        usoAnteriorAreaNueva: new FormControl(''),
        otroUsoAnteriorAreaNueva: new FormControl(''),
        tipoVariedad: new FormControl(''),
        especifiqueOtros: new FormControl(''),
        variedadesSembradasCalificacion: new FormControl(''),
        plantulasCondicionesEdafoclimaticas: new FormControl(''),
        plantulasRendimiento: new FormControl(''),
        plantulasVigorPlanta: new FormControl(''),
        plantulasResistenciaEnfermedades: new FormControl('')
      }),
      origenPlantas: this.formBuilder.group({
        nombreVivero: new FormControl(''),
        ubicacionVivero: new FormControl(''),
        encargadoPropagacion: new FormControl(''),
        otroEncargadoPropagacion: new FormControl(''),
        tipoConocimiento: new FormControl(''),
        entidadDonacion: new FormControl(''),
        cantidadPlantasRecibidas: new FormControl('')
      }),
      informacionFamilia: this.formBuilder.group({
        miembro1ClasifiacionMiembroFamiliar: new FormControl(''),
        miembro1Edad: new FormControl(''),
        miembro1Genero: new FormControl(''),
        miembro1SeguridadSocial: new FormControl(''),
        miembro1NivelEduacion: new FormControl(''),
        miembro1LaboraEnFinca: new FormControl(''),
        miembro1LaborRealizado: new FormControl(''),
        miembro1HorasAlDiaTrabaja: new FormControl(''),
        miembro1tieneOtraFuenteIngreso: new FormControl(''),
        miembro1sueldoIngresoMensual: new FormControl(''),
        miembro2ClasifiacionMiembroFamiliar: new FormControl(''),
        miembro2Edad: new FormControl(''),
        miembro2Genero: new FormControl(''),
        miembro2SeguridadSocial: new FormControl(''),
        miembro2NivelEduacion: new FormControl(''),
        miembro2LaboraEnFinca: new FormControl(''),
        miembro2LaborRealizado: new FormControl(''),
        miembro2HorasAlDiaTrabaja: new FormControl(''),
        miembro2tieneOtraFuenteIngreso: new FormControl(''),
        miembro2sueldoIngresoMensual: new FormControl(''),
        miembro3ClasifiacionMiembroFamiliar: new FormControl(''),
        miembro3Edad: new FormControl(''),
        miembro3Genero: new FormControl(''),
        miembro3SeguridadSocial: new FormControl(''),
        miembro3NivelEduacion: new FormControl(''),
        miembro3LaboraEnFinca: new FormControl(''),
        miembro3LaborRealizado: new FormControl(''),
        miembro3HorasAlDiaTrabaja: new FormControl(''),
        miembro3tieneOtraFuenteIngreso: new FormControl(''),
        miembro3sueldoIngresoMensual: new FormControl(''),
        miembro4ClasifiacionMiembroFamiliar: new FormControl(''),
        miembro4Edad: new FormControl(''),
        miembro4Genero: new FormControl(''),
        miembro4SeguridadSocial: new FormControl(''),
        miembro4NivelEduacion: new FormControl(''),
        miembro4LaboraEnFinca: new FormControl(''),
        miembro4LaborRealizado: new FormControl(''),
        miembro4HorasAlDiaTrabaja: new FormControl(''),
        miembro4tieneOtraFuenteIngreso: new FormControl(''),
        miembro4sueldoIngresoMensual: new FormControl(''),
        familiarDiscapacitado: new FormControl(''),
        esposaInvolucradaEntrevista: new FormControl(''),
        esposoIncluyeEsposaEntrevista: new FormControl(''),
        deseoIngresoAdicionalConyuge: new FormControl(''),
        deseoTrabajoMedioTiempoProyectosFuturos: new FormControl(''),
        comoCual: new FormControl(''),
        hijoInteresadoEnProyectosRehabilitacionFinca: new FormControl('')
      }),
      practicasAgricolas: this.formBuilder.group({
        interesElaborarFertilizanteNaturalOrganico: new FormControl(''),
        plagasAfectanCultivo: new FormControl(''),
        enfermedadesAfectanCultivo: new FormControl(''),
        productoParaPlagas: new FormControl(''),
        productoParaEnfermedades: new FormControl(''),
        llevaRegistroPerdidasMazorcasXMonilla: new FormControl(''),
        cantidadPerdidaMazorcas: new FormControl(''),
        periodoFertilizacion: new FormControl(''),
        periodoPoda: new FormControl(''),
        periodoControlMaleza: new FormControl(''),
        periodoMIPE: new FormControl(''),
        periodoCosecha: new FormControl('')
      }),
      saludSeguridadOcupacional: this.formBuilder.group({
        accidentesLaboralesUltimoAnio: new FormControl(''),
        tipoAccidente: new FormControl(''),
        periodoIntoxicacionPresente: new FormControl(''),
        producto: new FormControl(''),
        centroSaludCercano: new FormControl('')
      }),
      cosecha: this.formBuilder.group({
        periodoCadaTumba: new FormControl(''),
        latasCacaoXTumba: new FormControl(''),
        realizaEscurridoSecadoCCN51: new FormControl(''),
        diasFermentadoCacao: new FormControl('')
      }),
      venta: this.formBuilder.group({
        almacenaCacaoDespSecado: new FormControl(''),
        tiempoAlmacenadoCacao: new FormControl(''),
        propiedadTransporte: new FormControl(''),
        tipoTransporte: new FormControl(''),
        registroFinancieroFinca: new FormControl(''),
        tipoRegistrosFinancierosFinca: new FormControl('')
      }),
      nivelAsociatividad: this.formBuilder.group({
        perteneceAsocProgrCertif: new FormControl(''),
        nombreAsociacion: new FormControl(''),
        cantidadMiembros: new FormControl(''),
        recibeBeneficios: new FormControl(''),
        tiposBeneficios: new FormControl(''),
        otroTiposBeneficios: new FormControl(''),
        ayudaOtraInstitucion: new FormControl(''),
        nombreOtraInstitucion: new FormControl(''),
        tipoAyuda: new FormControl('')
      }),
      condicionesLaborales: this.formBuilder.group({
        contrataTrabajadores: new FormControl(''),
        cantidadTrabajadores: new FormControl(''),
        areaInicialContrato: new FormControl(''),
        tipoContratoTrabajo: new FormControl(''),
        contrataMenoresEdad: new FormControl(''),
        poseePermiso: new FormControl(''),
        baseContratoAgricola: new FormControl('')
      }),
      serviciosBasicos: this.formBuilder.group({
        energiaElectrica: new FormControl(''),
        tipoAguaConsumoFamiliar: new FormControl('')
      }),
      conservacionRecursosManejoDesechos: this.formBuilder.group({
        conocimientoManejoDesechos: new FormControl(''),
        productoContaminaEcosistema: new FormControl(''),
        ubicacionDesechosAguasNegras: new FormControl(''),
        tieneArbolesSombrio: new FormControl(''),
        cultivaVegetalesHortalizasFrutas: new FormControl(''),
        compraProductosMercadoLocales: new FormControl(''),
        valorPromedioGastado: new FormControl('')
      }),
      incrementarProductividad: this.formBuilder.group({
        recibirPlantasCacaoNacional: new FormControl(''),
        aprenderElabProductosNaturales: new FormControl('')
        // proyectos: new FormControl('')
      }),
      mejorarCalidadCacao: this.formBuilder.group({
        // proyectos: new FormControl(''),
        bandejasCajonesFermentacion: new FormControl(''),
        dispuestoHacerloPropiaCuenta: new FormControl(''),
        tendalesElevadosCania: new FormControl(''),
        secadorasComunitarias: new FormControl(''),
        contarAgrupacionParaProyecto: new FormControl('')
      }),
      diversificacionIngresos: this.formBuilder.group({
        // proyectos: new FormControl(''),
        huertosOrganicos: new FormControl(''),
        desarrolloViveros: new FormControl(''),
        desarrolloVentaFertilizantes: new FormControl(''),
        rehabilitacionFinca: new FormControl(''),
        brigadaPodadores: new FormControl(''),
        contarExperienciaPoda: new FormControl(''),
        aniosExperiencia: new FormControl('')
      }),
      preguntasAdicionales: this.formBuilder.group({
        tieneAreaLibreParaSembrar: new FormControl(''),
        areaLibre: new FormControl(''),
        necesitaRehaReinjerto: new FormControl(''),
        cantidad: new FormControl('')
      })
    })
  }

  debugging() {
    console.log(this.lineaBaseForm.value.nivelAsociatividad.recibeBeneficios);
    console.log(this.lineaBaseForm.value.nivelAsociatividad.tiposBeneficios);
    console.log(this.lineaBaseForm.value.nivelAsociatividad.otroTiposBeneficios);
    console.log(this.lineaBaseForm.get('nivelAsociatividad').get('perteneceAsocProgrCertif').value);
    console.log(this.lineaBaseForm.get('nivelAsociatividad').get('nombreAsociacion').value);
    console.log(this.lineaBaseForm.get('nivelAsociatividad').get('cantidadMiembros').value);
    console.log(this.lineaBaseForm.get('nivelAsociatividad').get('recibeBeneficios').value);
    console.log(this.lineaBaseForm.get('nivelAsociatividad').get('tiposBeneficios').value);
    console.log(this.lineaBaseForm.get('nivelAsociatividad').get('otroTiposBeneficios').value);
    console.log(this.lineaBaseForm.get('nivelAsociatividad').get('ayudaOtraInstitucion').value);
    console.log(this.lineaBaseForm.get('nivelAsociatividad').get('nombreOtraInstitucion').value);
  }

  getFormArray(key: string): FormArray {
    return this.lineaBaseForm.get(key) as FormArray;
  }

  createViejoInjertadoField(): FormGroup {
    return new FormGroup({
      areaViejoInjertado: new FormControl(''),
      edadViejoInjertado: new FormControl(''),
    });
  }

  addViejoInjertado(): void {
    this.getFormArray("viejosInjertados").push(this.createViejoInjertadoField());
  }

  deleteViejoInjertado(index: number): void {
    this.getFormArray("viejosInjertados").removeAt(index);
  }

  ngOnInit() {
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
    this.updateView();
    this.setFormDefaultValues();
  }

  updateView() {
    this.isLoading = false;
    this.changeDetector.detectChanges();
  }

  async fetchFormulario(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id !== null) {
      const formulario = await this.formularioService.get(id);
      this.formularioLineaBase = formulario;
    }
  }

  isFormEmpty() {
    return this.formularioLineaBase === undefined || this.formularioLineaBase === null;
  }

  reset() {
    this.lineaBaseForm.reset();
  }

  onSubmit() {
    this.agricultor = this.lineaBaseForm.value.agricultor;
    delete this.lineaBaseForm.value.agricultor;
    let formularioLineaBaseParam: FormularioLineaBase = {
      id: "",
      agricultor: this.agricultor,
      tecnico: this.tecnicoService.loggedTecnico,
      fechaVisita: new Date().toLocaleDateString(),
      secciones: {
        informacionFinca: {
          preguntas: {
            provincia: {
              respuesta: this.lineaBaseForm.value.informacionFinca.provincia
            },
            canton: {
              respuesta: this.lineaBaseForm.value.informacionFinca.canton
            },
            parroquia: {
              respuesta: this.lineaBaseForm.value.informacionFinca.parroquia
            },
            recinto: {
              respuesta: this.lineaBaseForm.value.informacionFinca.recinto
            },
            nombreFinca: {
              respuesta: this.lineaBaseForm.value.informacionFinca.nombreFinca
            },
            descripcionLlegarFinca: {
              respuesta: this.lineaBaseForm.value.informacionFinca.descripcionLlegarFinca
            }
          }
        },
        hectareaje: {
          preguntas: {
            dimensionTotalFinca: {
              respuesta: this.lineaBaseForm.value.hectareaje.dimensionTotalFinca
            },
            terreno: {
              respuesta: this.lineaBaseForm.value.hectareaje.terreno
            },
            cultivoCacao: {
              respuesta: this.lineaBaseForm.value.hectareaje.cultivoCacao,
              preguntas: {
                asociadoConTiene: {
                  respuesta: this.lineaBaseForm.value.hectareaje.asociadoConTiene,
                  preguntas: {
                    otrosEspecifique: {
                      respuesta: this.lineaBaseForm.value.hectareaje.otrosEspecifique
                    }
                  }
                }
              }
            },
            areaNetaCacao: {
              respuesta: this.lineaBaseForm.value.hectareaje.areaNetaCacao
            },
            distanciaPlantas: {
              respuesta: this.lineaBaseForm.value.hectareaje.distanciaPlantas
            },
            plantasXHectareas: {
              respuesta: this.lineaBaseForm.value.hectareaje.plantasXHectareas
            },
            tipoUbicacionZona: {
              respuesta: this.lineaBaseForm.value.hectareaje.tipoUbicacionZona
            }
          }
        },
        cacaoCNN: {
          preguntas: {
            areaTotalCNN: {
              respuesta: this.lineaBaseForm.value.cacaoCNN.areaTotalCNN
            },
            areaProduccion: {
              respuesta: this.lineaBaseForm.value.cacaoCNN.areaProduccion
            },
            edadCacaoProductivo: {
              respuesta: this.lineaBaseForm.value.cacaoCNN.edadCacaoProductivo
            },
            areaRecienSembrada: {
              respuesta: this.lineaBaseForm.value.cacaoCNN.areaRecienSembrada
            },
            edadCacaoReciente: {
              respuesta: this.lineaBaseForm.value.cacaoCNN.edadCacaoReciente
            },
            produccionAnioAnteriorCacaoCNN: {
              respuesta: this.lineaBaseForm.value.cacaoCNN.produccionAnioAnteriorCacaoCNN
            },
            precioPromedio: {
              respuesta: this.lineaBaseForm.value.cacaoCNN.precioPromedio
            }
          }
        },
        cacaoNacional: {
          preguntas: {
            areaTotalNacional: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.areaTotalNacional
            },
            areaTotalNacionalViejo: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.areaTotalNacionalViejo
            },
            edadCacaoViejo: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.edadCacaoViejo
            },
            brotesBasales: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.brotesBasales
            },
            arbolesElite: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.arbolesElite
            },
            areaTotalViejoInjertado: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.areaTotalViejoInjertado
            },
            areaViejoInjertado: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.areaViejoInjertado
            },
            edadViejoInjertado: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.edadViejoInjertado
            },
            areaViejoInjertado2: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.areaViejoInjertado2
            },
            edadViejoInjertado2: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.edadViejoInjertado2
            },
            areaTotalNuevosClones: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.areaTotalNuevosClones
            },
            areaNuevosClones: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.areaNuevosClones
            },
            edadNuevosClones: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.edadNuevosClones
            },
            areaNuevosClones2: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.areaNuevosClones2
            },
            edadNuevosClones2: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.edadNuevosClones2
            },
            areaNuevosClones3: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.areaNuevosClones3
            },
            edadNuevosClones3: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.edadNuevosClones3
            },
            produccionAnioAnteriorCacaoNacional: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.produccionAnioAnteriorCacaoNacional
            },
            precioPromedioXCacao: {
              respuesta: this.lineaBaseForm.value.cacaoNacional.precioPromedioXCacao
            }
          }
        },
        cacaoNacionalNuevosClones: {
          preguntas: {
            usoAnteriorAreaNueva: {
              respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.usoAnteriorAreaNueva,
              preguntas: {
                otroUsoAnteriorAreaNueva: {
                  respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.otroUsoAnteriorAreaNueva,
                }
              }
            },
            tipoVariedad: {
              respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.tipoVariedad,
              preguntas: {
                especifiqueOtros: {
                  respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.especifiqueOtros
                }
              }
            },
            variedadesSembradasCalificacion: {
              respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.variedadesSembradasCalificacion
            },
            plantulasCondicionesEdafoclimaticas: {
              respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.plantulasCondicionesEdafoclimaticas
            },
            plantulasRendimiento: {
              respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.plantulasRendimiento
            },
            plantulasVigorPlanta: {
              respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.plantulasVigorPlanta
            },
            plantulasResistenciaEnfermedades: {
              respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.plantulasResistenciaEnfermedades
            }
          }
        },
        origenPlantas: {
          preguntas: {
            nombreVivero: {
              respuesta: this.lineaBaseForm.value.origenPlantas.nombreVivero
            },
            ubicacionVivero: {
              respuesta: this.lineaBaseForm.value.origenPlantas.ubicacionVivero
            },
            encargadoPropagacion: {
              respuesta: this.lineaBaseForm.value.origenPlantas.encargadoPropagacion,
              preguntas: {
                otroEncargadoPropagacion: {
                  respuesta: this.lineaBaseForm.value.origenPlantas.otroEncargadoPropagacion,
                }
              }
            },
            tipoConocimiento: {
              respuesta: this.lineaBaseForm.value.origenPlantas.tipoConocimiento
            },
            entidadDonacion: {
              respuesta: this.lineaBaseForm.value.origenPlantas.entidadDonacion
            },
            cantidadPlantasRecibidas: {
              respuesta: this.lineaBaseForm.value.origenPlantas.cantidadPlantasRecibidas
            }
          }
        },
        informacionFamilia: {
          preguntas: {
            miembro1ClasifiacionMiembroFamiliar: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1ClasifiacionMiembroFamiliar
            },
            miembro1Edad: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1Edad
            },
            miembro1Genero: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1Genero
            },
            miembro1SeguridadSocial: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1SeguridadSocial
            },
            miembro1NivelEduacion: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1NivelEduacion
            },
            miembro1LaboraEnFinca: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1LaboraEnFinca
            },
            miembro1LaborRealizado: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1LaborRealizado
            },
            miembro1HorasAlDiaTrabaja: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1HorasAlDiaTrabaja
            },
            miembro1tieneOtraFuenteIngreso: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1tieneOtraFuenteIngreso
            },
            miembro1sueldoIngresoMensual: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro1sueldoIngresoMensual
            },
            miembro2ClasifiacionMiembroFamiliar: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2ClasifiacionMiembroFamiliar
            },
            miembro2Edad: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2Edad
            },
            miembro2Genero: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2Genero
            },
            miembro2SeguridadSocial: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2SeguridadSocial
            },
            miembro2NivelEduacion: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2NivelEduacion
            },
            miembro2LaboraEnFinca: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2LaboraEnFinca
            },
            miembro2LaborRealizado: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2LaborRealizado
            },
            miembro2HorasAlDiaTrabaja: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2HorasAlDiaTrabaja
            },
            miembro2tieneOtraFuenteIngreso: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2tieneOtraFuenteIngreso
            },
            miembro2sueldoIngresoMensual: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro2sueldoIngresoMensual
            },
            miembro3ClasifiacionMiembroFamiliar: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3ClasifiacionMiembroFamiliar
            },
            miembro3Edad: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3Edad
            },
            miembro3Genero: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3Genero
            },
            miembro3SeguridadSocial: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3SeguridadSocial
            },
            miembro3NivelEduacion: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3NivelEduacion
            },
            miembro3LaboraEnFinca: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3LaboraEnFinca
            },
            miembro3LaborRealizado: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3LaborRealizado
            },
            miembro3HorasAlDiaTrabaja: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3HorasAlDiaTrabaja
            },
            miembro3tieneOtraFuenteIngreso: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3tieneOtraFuenteIngreso
            },
            miembro3sueldoIngresoMensual: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro3sueldoIngresoMensual
            },
            miembro4ClasifiacionMiembroFamiliar: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4ClasifiacionMiembroFamiliar
            },
            miembro4Edad: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4Edad
            },
            miembro4Genero: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4Genero
            },
            miembro4SeguridadSocial: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4SeguridadSocial
            },
            miembro4NivelEduacion: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4NivelEduacion
            },
            miembro4LaboraEnFinca: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4LaboraEnFinca
            },
            miembro4LaborRealizado: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4LaborRealizado
            },
            miembro4HorasAlDiaTrabaja: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4HorasAlDiaTrabaja
            },
            miembro4tieneOtraFuenteIngreso: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4tieneOtraFuenteIngreso
            },
            miembro4sueldoIngresoMensual: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.miembro4sueldoIngresoMensual
            },
            familiarDiscapacitado: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.familiarDiscapacitado
            },
            esposaInvolucradaEntrevista: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.esposaInvolucradaEntrevista
            },
            esposoIncluyeEsposaEntrevista: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.esposoIncluyeEsposaEntrevista
            },
            deseoIngresoAdicionalConyuge: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.deseoIngresoAdicionalConyuge
            },
            deseoTrabajoMedioTiempoProyectosFuturos: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.deseoTrabajoMedioTiempoProyectosFuturos,
              preguntas: {
                comoCual: {
                  respuesta: this.lineaBaseForm.value.informacionFamilia.comoCual
                }
              }
            },
            hijoInteresadoEnProyectosRehabilitacionFinca: {
              respuesta: this.lineaBaseForm.value.informacionFamilia.hijoInteresadoEnProyectosRehabilitacionFinca
            }
          }
        },
        practicasAgricolas: {
          preguntas: {
            interesElaborarFertilizanteNaturalOrganico: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.interesElaborarFertilizanteNaturalOrganico
            },
            plagasAfectanCultivo: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.plagasAfectanCultivo
            },
            enfermedadesAfectanCultivo: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.enfermedadesAfectanCultivo
            },
            productoParaPlagas: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.productoParaPlagas
            },
            productoParaEnfermedades: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.productoParaEnfermedades
            },
            llevaRegistroPerdidasMazorcasXMonilla: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.llevaRegistroPerdidasMazorcasXMonilla,
              preguntas: {
                cantidadPerdidaMazorcas: {
                  respuesta: this.lineaBaseForm.value.practicasAgricolas.cantidadPerdidaMazorcas
                }
              }
            },
            periodoFertilizacion: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.periodoFertilizacion
            },
            periodoPoda: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.periodoPoda
            },
            periodoControlMaleza: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.periodoControlMaleza
            },
            periodoMIPE: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.periodoMIPE
            },
            periodoCosecha: {
              respuesta: this.lineaBaseForm.value.practicasAgricolas.periodoCosecha
            }
          }
        },
        saludSeguridadOcupacional: {
          preguntas: {
            accidentesLaboralesUltimoAnio: {
              respuesta: this.lineaBaseForm.value.saludSeguridadOcupacional.accidentesLaboralesUltimoAnio,
              preguntas: {
                tipoAccidente: {
                  respuesta: this.lineaBaseForm.value.saludSeguridadOcupacional.tipoAccidente
                }
              }
            },
            periodoIntoxicacionPresente: {
              respuesta: this.lineaBaseForm.value.saludSeguridadOcupacional.periodoIntoxicacionPresente,
              preguntas: {
                producto: {
                  respuesta: this.lineaBaseForm.value.saludSeguridadOcupacional.producto
                }
              }
            },
            centroSaludCercano: {
              respuesta: this.lineaBaseForm.value.saludSeguridadOcupacional.centroSaludCercano
            }
          }
        },
        cosecha: {
          preguntas: {
            periodoCadaTumba: {
              respuesta: this.lineaBaseForm.value.cosecha.periodoCadaTumba
            },
            latasCacaoXTumba: {
              respuesta: this.lineaBaseForm.value.cosecha.latasCacaoXTumba
            },
            realizaEscurridoSecadoCCN51: {
              respuesta: this.lineaBaseForm.value.cosecha.realizaEscurridoSecadoCCN51
            },
            diasFermentadoCacao: {
              respuesta: this.lineaBaseForm.value.cosecha.diasFermentadoCacao
            }
          }
        },
        venta: {
          preguntas: {
            almacenaCacaoDespSecado: {
              respuesta: this.lineaBaseForm.value.venta.almacenaCacaoDespSecado,
              preguntas: {
                tiempoAlmacenadoCacao: {
                  respuesta: this.lineaBaseForm.value.venta.tiempoAlmacenadoCacao
                }
              }
            },
            propiedadTransporte: {
              respuesta: this.lineaBaseForm.value.venta.propiedadTransporte
            },
            tipoTransporte: {
              respuesta: this.lineaBaseForm.value.venta.tipoTransporte
            },
            registroFinancieroFinca: {
              respuesta: this.lineaBaseForm.value.venta.registroFinancieroFinca
            },
            tipoRegistrosFinancierosFinca: {
              respuesta: this.lineaBaseForm.value.venta.tipoRegistrosFinancierosFinca
            }
          }
        },
        nivelAsociatividad: {
          preguntas: {
            perteneceAsocProgrCertif: {
              respuesta: this.lineaBaseForm.value.nivelAsociatividad.perteneceAsocProgrCertif,
              preguntas: {
                nombreAsociacion: {
                  respueta: this.lineaBaseForm.value.nivelAsociatividad.nombreAsociacion
                },
                cantidadMiembros: {
                  respuesta: this.lineaBaseForm.value.nivelAsociatividad.cantidadMiembros
                },
                recibeBeneficios: {
                  respuesta: this.lineaBaseForm.value.nivelAsociatividad.recibeBeneficios
                },
                tiposBeneficios: {
                  respuesta: this.lineaBaseForm.value.nivelAsociatividad.tiposBeneficios,
                  preguntas: {
                    otroTiposBeneficios: {
                      respuesta: this.lineaBaseForm.value.nivelAsociatividad.otroTiposBeneficios,
                    }
                  }
                }
              }
            },
            ayudaOtraInstitucion: {
              respuesta: this.lineaBaseForm.value.nivelAsociatividad.ayudaOtraInstitucion,
              preguntas: {
                nombreOtraInstitucion: {
                  respuesta: this.lineaBaseForm.value.nivelAsociatividad.nombreOtraInstitucion
                },
                tipoAyuda: {
                  respuesta: this.lineaBaseForm.value.nivelAsociatividad.tipoAyuda
                }
              }
            }
          }
        },
        condicionesLaborales: {
          preguntas: {
            contrataTrabajadores: {
              respuesta: this.lineaBaseForm.value.condicionesLaborales.contrataTrabajadores,
              preguntas: {
                cantidadTrabajadores: {
                  respuesta: this.lineaBaseForm.value.condicionesLaborales.cantidadTrabajadores
                }
              }
            },
            areaInicialContrato: {
              respuesta: this.lineaBaseForm.value.condicionesLaborales.areaInicialContrato
            },
            tipoContratoTrabajo: {
              respuesta: this.lineaBaseForm.value.condicionesLaborales.tipoContratoTrabajo
            },
            contrataMenoresEdad: {
              respuesta: this.lineaBaseForm.value.condicionesLaborales.contrataMenoresEdad,
              preguntas: {
                poseePermiso: {
                  respuesta: this.lineaBaseForm.value.condicionesLaborales.poseePermiso
                }
              }
            },
            baseContratoAgricola: {
              respuesta: this.lineaBaseForm.value.condicionesLaborales.baseContratoAgricola
            }
          }
        },
        serviciosBasicos: {
          preguntas: {
            energiaElectrica: {
              respuesta: this.lineaBaseForm.value.serviciosBasicos.energiaElectrica
            },
            tipoAguaConsumoFamiliar: {
              respuesta: this.lineaBaseForm.value.serviciosBasicos.tipoAguaConsumoFamiliar
            }
          }
        },
        conservacionRecursosManejoDesechos: {
          preguntas: {
            conocimientoManejoDesechos: {
              respuesta: this.lineaBaseForm.value.conservacionRecursosManejoDesechos.conocimientoManejoDesechos
            },
            productoContaminaEcosistema: {
              respuesta: this.lineaBaseForm.value.conservacionRecursosManejoDesechos.productoContaminaEcosistema,
              preguntas: {
                ubicacionDesechosAguasNegras: {
                  respuesta: this.lineaBaseForm.value.conservacionRecursosManejoDesechos.ubicacionDesechosAguasNegras
                }
              }
            },
            tieneArbolesSombrio: {
              respuesta: this.lineaBaseForm.value.conservacionRecursosManejoDesechos.tieneArbolesSombrio
            },
            cultivaVegetalesHortalizasFrutas: {
              respuesta: this.lineaBaseForm.value.conservacionRecursosManejoDesechos.cultivaVegetalesHortalizasFrutas
            },
            compraProductosMercadoLocales: {
              respuesta: this.lineaBaseForm.value.conservacionRecursosManejoDesechos.compraProductosMercadoLocales,
              preguntas: {
                valorPromedioGastado: {
                  respuesta: this.lineaBaseForm.value.conservacionRecursosManejoDesechos.valorPromedioGastado
                }
              }
            }
          }
        },
        incrementarProductividad: {
          preguntas: {
            recibirPlantasCacaoNacional: {
              respuesta: this.lineaBaseForm.value.incrementarProductividad.recibirPlantasCacaoNacional
            },
            aprenderElabProductosNaturales: {
              respuesta: this.lineaBaseForm.value.incrementarProductividad.aprenderElabProductosNaturales
            }
          }
        },
        mejorarCalidadCacao: {
          preguntas: {
            bandejasCajonesFermentacion: {
              respuesta: this.lineaBaseForm.value.mejorarCalidadCacao.bandejasCajonesFermentacion,
              preguntas: {
                dispuestoHacerloPropiaCuenta: {
                  respuesta: this.lineaBaseForm.value.mejorarCalidadCacao.dispuestoHacerloPropiaCuenta
                }
              }
            },
            tendalesElevadosCania: {
              respuesta: this.lineaBaseForm.value.mejorarCalidadCacao.tendalesElevadosCania
            },
            secadorasComunitarias: {
              respuesta: this.lineaBaseForm.value.mejorarCalidadCacao.secadorasComunitarias,
              preguntas: {
                contarAgrupacionParaProyecto: {
                  respuesta: this.lineaBaseForm.value.mejorarCalidadCacao.contarAgrupacionParaProyecto
                }
              }
            }
          }
        },
        diversificacionIngresos: {
          preguntas: {
            huertosOrganicos: {
              respuesta: this.lineaBaseForm.value.diversificacionIngresos.huertosOrganicos
            },
            desarrolloViveros: {
              respuesta: this.lineaBaseForm.value.diversificacionIngresos.desarrolloViveros
            },
            desarrolloVentaFertilizantes: {
              respuesta: this.lineaBaseForm.value.diversificacionIngresos.desarrolloVentaFertilizantes
            },
            rehabilitacionFinca: {
              respuesta: this.lineaBaseForm.value.diversificacionIngresos.rehabilitacionFinca
            },
            brigadaPodadores: {
              respuesta: this.lineaBaseForm.value.diversificacionIngresos.brigadaPodadores,
              preguntas: {
                contarExperienciaPoda: {
                  respuesta: this.lineaBaseForm.value.diversificacionIngresos.contarExperienciaPoda,
                  preguntas: {
                    aniosExperiencia: {
                      respuesta: this.lineaBaseForm.value.diversificacionIngresos.aniosExperiencia
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
              respuesta: this.lineaBaseForm.value.preguntasAdicionales.tieneAreaLibreParaSembrar,
              preguntas: {
                areaLibre: {
                  respuesta: this.lineaBaseForm.value.preguntasAdicionales.areaLibre
                }
              }
            },
            necesitaRehaReinjerto: {
              respuesta: this.lineaBaseForm.value.preguntasAdicionales.necesitaRehaReinjerto,
              preguntas: {
                cantidad: {
                  respuesta: this.lineaBaseForm.value.preguntasAdicionales.cantidad
                }
              }
            }
          }
        }
      }
    }
    console.log(formularioLineaBaseParam);
    if (this.agricultor) {
      if (this.formularioLineaBase) {
        formularioLineaBaseParam.id = this.formularioLineaBase.id;
      }
      this.formularioService.saveFormInCollection(formularioLineaBaseParam).then(value => {
        this.toastr.success('Formulario de Linea Base Creado', '¡Completado!');
        this.router.navigate(['inicio','home']);
      }).catch((e) => {
        console.log(e);
        this.toastr.error(e, '¡Error!');
      });
    } else {
      this.toastr.error("Debe seleccionar un agricultor", '¡Error!');
    }
  }

  async setAgricultor() {
    this.agricultor = await this.agricultorService.get(this.formularioLineaBase["agricultorId"]);
    for (let agricultor of this.listaAgricultores) {
      if (agricultor.id === this.agricultor.id) {
        this.lineaBaseForm.get('agricultor').setValue(agricultor);
        break;
      }
    }
  }

  async setFormDefaultValues() {
    console.log(this.formularioLineaBase);
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (!this.isFormEmpty()) {
      this.setAgricultor();
      this.lineaBaseForm.get('informacionFinca').get('provincia')
        .setValue(this.formularioLineaBase.secciones.informacionFinca.preguntas.provincia.respuesta);
      this.lineaBaseForm.get('informacionFinca').get('canton')
        .setValue(this.formularioLineaBase.secciones.informacionFinca.preguntas.canton.respuesta);
      this.lineaBaseForm.get('informacionFinca').get('parroquia')
        .setValue(this.formularioLineaBase.secciones.informacionFinca.preguntas.parroquia.respuesta);
      this.lineaBaseForm.get('informacionFinca').get('recinto')
        .setValue(this.formularioLineaBase.secciones.informacionFinca.preguntas.recinto.respuesta);
      this.lineaBaseForm.get('informacionFinca').get('nombreFinca')
        .setValue(this.formularioLineaBase.secciones.informacionFinca.preguntas.nombreFinca.respuesta);
      this.lineaBaseForm.get('informacionFinca').get('descripcionLlegarFinca')
        .setValue(this.formularioLineaBase.secciones.informacionFinca.preguntas.descripcionLlegarFinca.respuesta);
      /****************************** */
      this.lineaBaseForm.get('hectareaje').get('dimensionTotalFinca')
        .setValue(this.formularioLineaBase.secciones.hectareaje.preguntas.dimensionTotalFinca.respuesta);
      this.lineaBaseForm.get('hectareaje').get('terreno')
        .setValue(this.formularioLineaBase.secciones.hectareaje.preguntas.terreno.respuesta);
      this.lineaBaseForm.get('hectareaje').get('cultivoCacao')
        .setValue(this.formularioLineaBase.secciones.hectareaje.preguntas.cultivoCacao.respuesta);
      this.lineaBaseForm.get('hectareaje').get('asociadoConTiene')
        .setValue(this.formularioLineaBase.secciones.hectareaje.preguntas.cultivoCacao.preguntas.asociadoConTiene.respuesta);
      this.lineaBaseForm.get('hectareaje').get('otrosEspecifique')
        .setValue(this.formularioLineaBase.secciones.hectareaje.preguntas.cultivoCacao.preguntas.asociadoConTiene.preguntas.otrosEspecifique.respuesta);
      this.lineaBaseForm.get('hectareaje').get('areaNetaCacao')
        .setValue(this.formularioLineaBase.secciones.hectareaje.preguntas.areaNetaCacao.respuesta);
      this.lineaBaseForm.get('hectareaje').get('distanciaPlantas')
        .setValue(this.formularioLineaBase.secciones.hectareaje.preguntas.distanciaPlantas.respuesta);
      this.lineaBaseForm.get('hectareaje').get('plantasXHectareas')
        .setValue(this.formularioLineaBase.secciones.hectareaje.preguntas.plantasXHectareas.respuesta);
      this.lineaBaseForm.get('hectareaje').get('tipoUbicacionZona')
        .setValue(this.formularioLineaBase.secciones.hectareaje.preguntas.tipoUbicacionZona.respuesta);
      this.lineaBaseForm.get('cacaoCNN').get('areaTotalCNN')
        .setValue(this.formularioLineaBase.secciones.cacaoCNN.preguntas.areaTotalCNN.respuesta);
      this.lineaBaseForm.get('cacaoCNN').get('areaProduccion')
        .setValue(this.formularioLineaBase.secciones.cacaoCNN.preguntas.areaProduccion.respuesta);
      this.lineaBaseForm.get('cacaoCNN').get('edadCacaoProductivo')
        .setValue(this.formularioLineaBase.secciones.cacaoCNN.preguntas.edadCacaoProductivo.respuesta);
      this.lineaBaseForm.get('cacaoCNN').get('areaRecienSembrada')
        .setValue(this.formularioLineaBase.secciones.cacaoCNN.preguntas.areaRecienSembrada.respuesta);
      this.lineaBaseForm.get('cacaoCNN').get('edadCacaoReciente')
        .setValue(this.formularioLineaBase.secciones.cacaoCNN.preguntas.edadCacaoReciente.respuesta);
      this.lineaBaseForm.get('cacaoCNN').get('produccionAnioAnteriorCacaoCNN')
        .setValue(this.formularioLineaBase.secciones.cacaoCNN.preguntas.produccionAnioAnteriorCacaoCNN.respuesta);
      this.lineaBaseForm.get('cacaoCNN').get('precioPromedio')
        .setValue(this.formularioLineaBase.secciones.cacaoCNN.preguntas.precioPromedio.respuesta);
      /******************************* */
      this.lineaBaseForm.get('cacaoNacional').get('areaTotalNacional')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.areaTotalNacional.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('areaTotalNacionalViejo')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.areaTotalNacionalViejo.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('edadCacaoViejo')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.edadCacaoViejo.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('brotesBasales')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.brotesBasales.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('arbolesElite')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.arbolesElite.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('areaTotalViejoInjertado')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.areaTotalViejoInjertado.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('areaViejoInjertado')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.areaViejoInjertado.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('edadViejoInjertado')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.edadViejoInjertado.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('areaViejoInjertado2')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.areaViejoInjertado2.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('edadViejoInjertado2')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.edadViejoInjertado2.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('areaTotalNuevosClones')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.areaTotalNuevosClones.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('areaNuevosClones')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.areaNuevosClones.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('edadNuevosClones')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.edadNuevosClones.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('areaNuevosClones2')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.areaNuevosClones2.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('edadNuevosClones2')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.edadNuevosClones2.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('areaNuevosClones3')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.areaNuevosClones3.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('edadNuevosClones3')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.edadNuevosClones3.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('produccionAnioAnteriorCacaoNacional')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.produccionAnioAnteriorCacaoNacional.respuesta);
      this.lineaBaseForm.get('cacaoNacional').get('precioPromedioXCacao')
        .setValue(this.formularioLineaBase.secciones.cacaoNacional.preguntas.precioPromedioXCacao.respuesta);
      /********************* */
      this.lineaBaseForm.get('cacaoNacionalNuevosClones').get('usoAnteriorAreaNueva')
        .setValue(this.formularioLineaBase.secciones.cacaoNacionalNuevosClones.preguntas.usoAnteriorAreaNueva.respuesta);
      this.lineaBaseForm.get('cacaoNacionalNuevosClones').get('otroUsoAnteriorAreaNueva')
        .setValue(this.formularioLineaBase.secciones.cacaoNacionalNuevosClones.preguntas.usoAnteriorAreaNueva.preguntas.otroUsoAnteriorAreaNueva.respuesta);
      this.lineaBaseForm.get('cacaoNacionalNuevosClones').get('tipoVariedad')
        .setValue(this.formularioLineaBase.secciones.cacaoNacionalNuevosClones.preguntas.tipoVariedad.respuesta);
      this.lineaBaseForm.get('cacaoNacionalNuevosClones').get('especifiqueOtros')
        .setValue(this.formularioLineaBase.secciones.cacaoNacionalNuevosClones.preguntas.tipoVariedad.preguntas.especifiqueOtros.respuesta);
      this.lineaBaseForm.get('cacaoNacionalNuevosClones').get('variedadesSembradasCalificacion')
        .setValue(this.formularioLineaBase.secciones.cacaoNacionalNuevosClones.preguntas.variedadesSembradasCalificacion.respuesta);
      this.lineaBaseForm.get('cacaoNacionalNuevosClones').get('plantulasCondicionesEdafoclimaticas')
        .setValue(this.formularioLineaBase.secciones.cacaoNacionalNuevosClones.preguntas.plantulasCondicionesEdafoclimaticas.respuesta);
      this.lineaBaseForm.get('cacaoNacionalNuevosClones').get('plantulasRendimiento')
        .setValue(this.formularioLineaBase.secciones.cacaoNacionalNuevosClones.preguntas.plantulasRendimiento.respuesta);
      this.lineaBaseForm.get('cacaoNacionalNuevosClones').get('plantulasVigorPlanta')
        .setValue(this.formularioLineaBase.secciones.cacaoNacionalNuevosClones.preguntas.plantulasVigorPlanta.respuesta);
      this.lineaBaseForm.get('cacaoNacionalNuevosClones').get('plantulasResistenciaEnfermedades')
        .setValue(this.formularioLineaBase.secciones.cacaoNacionalNuevosClones.preguntas.plantulasResistenciaEnfermedades.respuesta);
      /************************************************* */
      this.lineaBaseForm.get('origenPlantas').get('nombreVivero')
        .setValue(this.formularioLineaBase.secciones.origenPlantas.preguntas.nombreVivero.respuesta);
      this.lineaBaseForm.get('origenPlantas').get('ubicacionVivero')
        .setValue(this.formularioLineaBase.secciones.origenPlantas.preguntas.ubicacionVivero.respuesta);
      this.lineaBaseForm.get('origenPlantas').get('encargadoPropagacion')
        .setValue(this.formularioLineaBase.secciones.origenPlantas.preguntas.encargadoPropagacion.respuesta);
      this.lineaBaseForm.get('origenPlantas').get('otroEncargadoPropagacion')
        .setValue(this.formularioLineaBase.secciones.origenPlantas.preguntas.encargadoPropagacion.preguntas.otroEncargadoPropagacion.respuesta);
      this.lineaBaseForm.get('origenPlantas').get('tipoConocimiento')
        .setValue(this.formularioLineaBase.secciones.origenPlantas.preguntas.tipoConocimiento.respuesta);
      this.lineaBaseForm.get('origenPlantas').get('entidadDonacion')
        .setValue(this.formularioLineaBase.secciones.origenPlantas.preguntas.entidadDonacion.respuesta);
      this.lineaBaseForm.get('origenPlantas').get('cantidadPlantasRecibidas')
        .setValue(this.formularioLineaBase.secciones.origenPlantas.preguntas.cantidadPlantasRecibidas.respuesta);
      /***************************************************** */
      this.lineaBaseForm.get('informacionFamilia').get('miembro1ClasifiacionMiembroFamiliar')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1ClasifiacionMiembroFamiliar.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro1Edad')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1Edad.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro1Genero')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1Genero.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro1SeguridadSocial')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1SeguridadSocial.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro1NivelEduacion')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1NivelEduacion.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro1LaboraEnFinca')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1LaboraEnFinca.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro1LaborRealizado')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1LaborRealizado.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro1HorasAlDiaTrabaja')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1HorasAlDiaTrabaja.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro1tieneOtraFuenteIngreso')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1tieneOtraFuenteIngreso.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro1sueldoIngresoMensual')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1sueldoIngresoMensual.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2ClasifiacionMiembroFamiliar')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2ClasifiacionMiembroFamiliar.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2Edad')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2Edad.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2Genero')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2Genero.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2SeguridadSocial')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2SeguridadSocial.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2NivelEduacion')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2NivelEduacion.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2LaboraEnFinca')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2LaboraEnFinca.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2LaborRealizado')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2LaborRealizado.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2HorasAlDiaTrabaja')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2HorasAlDiaTrabaja.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2tieneOtraFuenteIngreso')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2tieneOtraFuenteIngreso.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro2sueldoIngresoMensual')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2sueldoIngresoMensual.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3ClasifiacionMiembroFamiliar')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3ClasifiacionMiembroFamiliar.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3Edad')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3Edad.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3Genero')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3Genero.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3SeguridadSocial')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3SeguridadSocial.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3NivelEduacion')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3NivelEduacion.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3LaboraEnFinca')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3LaboraEnFinca.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3LaborRealizado')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3LaborRealizado.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3HorasAlDiaTrabaja')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3HorasAlDiaTrabaja.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3tieneOtraFuenteIngreso')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3tieneOtraFuenteIngreso.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro3sueldoIngresoMensual')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3sueldoIngresoMensual.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4ClasifiacionMiembroFamiliar')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4ClasifiacionMiembroFamiliar.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4Edad')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4Edad.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4Genero')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4Genero.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4SeguridadSocial')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4SeguridadSocial.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4NivelEduacion')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4NivelEduacion.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4LaboraEnFinca')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4LaboraEnFinca.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4LaborRealizado')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4LaborRealizado.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4HorasAlDiaTrabaja')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4HorasAlDiaTrabaja.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4tieneOtraFuenteIngreso')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4tieneOtraFuenteIngreso.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('miembro4sueldoIngresoMensual')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4sueldoIngresoMensual.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('familiarDiscapacitado')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.familiarDiscapacitado.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('esposaInvolucradaEntrevista')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.esposaInvolucradaEntrevista.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('esposoIncluyeEsposaEntrevista')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.esposoIncluyeEsposaEntrevista.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('deseoIngresoAdicionalConyuge')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.deseoIngresoAdicionalConyuge.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('deseoTrabajoMedioTiempoProyectosFuturos')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.deseoTrabajoMedioTiempoProyectosFuturos.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('comoCual')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.deseoTrabajoMedioTiempoProyectosFuturos.preguntas.comoCual.respuesta);
      this.lineaBaseForm.get('informacionFamilia').get('hijoInteresadoEnProyectosRehabilitacionFinca')
        .setValue(this.formularioLineaBase.secciones.informacionFamilia.preguntas.hijoInteresadoEnProyectosRehabilitacionFinca.respuesta);
      /********************************* */
      this.lineaBaseForm.get('practicasAgricolas').get('interesElaborarFertilizanteNaturalOrganico')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.interesElaborarFertilizanteNaturalOrganico.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('plagasAfectanCultivo')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.plagasAfectanCultivo.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('enfermedadesAfectanCultivo')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.enfermedadesAfectanCultivo.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('productoParaPlagas')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.productoParaPlagas.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('productoParaEnfermedades')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.productoParaEnfermedades.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('llevaRegistroPerdidasMazorcasXMonilla')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.llevaRegistroPerdidasMazorcasXMonilla.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('cantidadPerdidaMazorcas')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.llevaRegistroPerdidasMazorcasXMonilla.preguntas.cantidadPerdidaMazorcas.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('periodoFertilizacion')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoFertilizacion.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('periodoPoda')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoPoda.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('periodoControlMaleza')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoControlMaleza.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('periodoMIPE')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoMIPE.respuesta);
      this.lineaBaseForm.get('practicasAgricolas').get('periodoCosecha')
        .setValue(this.formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoCosecha.respuesta);
      /************************************** */
      this.lineaBaseForm.get('saludSeguridadOcupacional').get('accidentesLaboralesUltimoAnio')
        .setValue(this.formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.accidentesLaboralesUltimoAnio.respuesta);
      this.lineaBaseForm.get('saludSeguridadOcupacional').get('tipoAccidente')
        .setValue(this.formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.accidentesLaboralesUltimoAnio.preguntas.tipoAccidente.respuesta);
      this.lineaBaseForm.get('saludSeguridadOcupacional').get('periodoIntoxicacionPresente')
        .setValue(this.formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.periodoIntoxicacionPresente.respuesta);
      this.lineaBaseForm.get('saludSeguridadOcupacional').get('producto')
        .setValue(this.formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.periodoIntoxicacionPresente.preguntas.producto.respuesta);
      this.lineaBaseForm.get('saludSeguridadOcupacional').get('centroSaludCercano')
        .setValue(this.formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.centroSaludCercano.respuesta);
      /*************************************** */
      this.lineaBaseForm.get('cosecha').get('periodoCadaTumba')
        .setValue(this.formularioLineaBase.secciones.cosecha.preguntas.periodoCadaTumba.respuesta);
      this.lineaBaseForm.get('cosecha').get('latasCacaoXTumba')
        .setValue(this.formularioLineaBase.secciones.cosecha.preguntas.latasCacaoXTumba.respuesta);
      this.lineaBaseForm.get('cosecha').get('realizaEscurridoSecadoCCN51')
        .setValue(this.formularioLineaBase.secciones.cosecha.preguntas.realizaEscurridoSecadoCCN51.respuesta);
      this.lineaBaseForm.get('cosecha').get('diasFermentadoCacao')
        .setValue(this.formularioLineaBase.secciones.cosecha.preguntas.diasFermentadoCacao.respuesta);
      /****************************************** */
      this.lineaBaseForm.get('venta').get('almacenaCacaoDespSecado')
        .setValue(this.formularioLineaBase.secciones.venta.preguntas.almacenaCacaoDespSecado.respuesta);
      this.lineaBaseForm.get('venta').get('tiempoAlmacenadoCacao')
        .setValue(this.formularioLineaBase.secciones.venta.preguntas.almacenaCacaoDespSecado.preguntas.tiempoAlmacenadoCacao.respuesta);
      this.lineaBaseForm.get('venta').get('propiedadTransporte')
        .setValue(this.formularioLineaBase.secciones.venta.preguntas.propiedadTransporte.respuesta);
      this.lineaBaseForm.get('venta').get('tipoTransporte')
        .setValue(this.formularioLineaBase.secciones.venta.preguntas.tipoTransporte.respuesta);
      this.lineaBaseForm.get('venta').get('registroFinancieroFinca')
        .setValue(this.formularioLineaBase.secciones.venta.preguntas.registroFinancieroFinca.respuesta);
      this.lineaBaseForm.get('venta').get('tipoRegistrosFinancierosFinca')
        .setValue(this.formularioLineaBase.secciones.venta.preguntas.tipoRegistrosFinancierosFinca.respuesta);
      /********************************************* */
      this.lineaBaseForm.get('nivelAsociatividad').get('perteneceAsocProgrCertif')
        .setValue(this.formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.respuesta);
      this.lineaBaseForm.get('nivelAsociatividad').get('nombreAsociacion')
        .setValue(this.formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.nombreAsociacion.respueta);
      this.lineaBaseForm.get('nivelAsociatividad').get('cantidadMiembros')
        .setValue(this.formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.cantidadMiembros.respuesta);
      this.lineaBaseForm.get('nivelAsociatividad').get('recibeBeneficios')
        .setValue(this.formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.recibeBeneficios.respuesta);
      this.lineaBaseForm.get('nivelAsociatividad').get('tiposBeneficios')
        .setValue(this.formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.tiposBeneficios.respuesta);
      this.lineaBaseForm.get('nivelAsociatividad').get('otroTiposBeneficios')
        .setValue(this.formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.tiposBeneficios.preguntas.otroTiposBeneficios.respuesta);
        this.lineaBaseForm.get('nivelAsociatividad').get('ayudaOtraInstitucion')
        .setValue(this.formularioLineaBase.secciones.nivelAsociatividad.preguntas.ayudaOtraInstitucion.respuesta);
      this.lineaBaseForm.get('nivelAsociatividad').get('nombreOtraInstitucion')
        .setValue(this.formularioLineaBase.secciones.nivelAsociatividad.preguntas.ayudaOtraInstitucion.preguntas.nombreOtraInstitucion.respuesta);
      this.lineaBaseForm.get('nivelAsociatividad').get('tipoAyuda')
        .setValue(this.formularioLineaBase.secciones.nivelAsociatividad.preguntas.ayudaOtraInstitucion.preguntas.tipoAyuda.respuesta);
        /******************************************* */
      this.lineaBaseForm.get('condicionesLaborales').get('contrataTrabajadores')
        .setValue(this.formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataTrabajadores.respuesta);
      this.lineaBaseForm.get('condicionesLaborales').get('cantidadTrabajadores')
        .setValue(this.formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataTrabajadores.preguntas.cantidadTrabajadores.respuesta);
      this.lineaBaseForm.get('condicionesLaborales').get('areaInicialContrato')
        .setValue(this.formularioLineaBase.secciones.condicionesLaborales.preguntas.areaInicialContrato.respuesta);
      this.lineaBaseForm.get('condicionesLaborales').get('tipoContratoTrabajo')
        .setValue(this.formularioLineaBase.secciones.condicionesLaborales.preguntas.tipoContratoTrabajo.respuesta);
      this.lineaBaseForm.get('condicionesLaborales').get('contrataMenoresEdad')
        .setValue(this.formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataMenoresEdad.respuesta);
      this.lineaBaseForm.get('condicionesLaborales').get('poseePermiso')
        .setValue(this.formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataMenoresEdad.preguntas.poseePermiso.respuesta);
      this.lineaBaseForm.get('condicionesLaborales').get('baseContratoAgricola')
        .setValue(this.formularioLineaBase.secciones.condicionesLaborales.preguntas.baseContratoAgricola.respuesta);
      /************************************************* */
      this.lineaBaseForm.get('serviciosBasicos').get('energiaElectrica')
        .setValue(this.formularioLineaBase.secciones.serviciosBasicos.preguntas.energiaElectrica.respuesta);
      this.lineaBaseForm.get('serviciosBasicos').get('tipoAguaConsumoFamiliar')
        .setValue(this.formularioLineaBase.secciones.serviciosBasicos.preguntas.tipoAguaConsumoFamiliar.respuesta);
      /*********************************************** */
      this.lineaBaseForm.get('conservacionRecursosManejoDesechos').get('conocimientoManejoDesechos')
        .setValue(this.formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.conocimientoManejoDesechos.respuesta);
      this.lineaBaseForm.get('conservacionRecursosManejoDesechos').get('productoContaminaEcosistema')
        .setValue(this.formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.productoContaminaEcosistema.respuesta);
      this.lineaBaseForm.get('conservacionRecursosManejoDesechos').get('ubicacionDesechosAguasNegras')
        .setValue(this.formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.productoContaminaEcosistema.preguntas.ubicacionDesechosAguasNegras.respuesta);
      this.lineaBaseForm.get('conservacionRecursosManejoDesechos').get('tieneArbolesSombrio')
        .setValue(this.formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.tieneArbolesSombrio.respuesta);
      this.lineaBaseForm.get('conservacionRecursosManejoDesechos').get('cultivaVegetalesHortalizasFrutas')
        .setValue(this.formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.cultivaVegetalesHortalizasFrutas.respuesta);
      this.lineaBaseForm.get('conservacionRecursosManejoDesechos').get('compraProductosMercadoLocales')
        .setValue(this.formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.compraProductosMercadoLocales.respuesta);
      this.lineaBaseForm.get('conservacionRecursosManejoDesechos').get('valorPromedioGastado')
        .setValue(this.formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.compraProductosMercadoLocales.preguntas.valorPromedioGastado.respuesta);
      /*********************************************************** */
      this.lineaBaseForm.get('incrementarProductividad').get('recibirPlantasCacaoNacional')
        .setValue(this.formularioLineaBase.secciones.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.respuesta);
      this.lineaBaseForm.get('incrementarProductividad').get('aprenderElabProductosNaturales')
        .setValue(this.formularioLineaBase.secciones.incrementarProductividad.preguntas.aprenderElabProductosNaturales.respuesta);
      /************************************************************** */
      this.lineaBaseForm.get('mejorarCalidadCacao').get('bandejasCajonesFermentacion')
        .setValue(this.formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.bandejasCajonesFermentacion.respuesta);
      this.lineaBaseForm.get('mejorarCalidadCacao').get('dispuestoHacerloPropiaCuenta')
        .setValue(this.formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.bandejasCajonesFermentacion.preguntas.dispuestoHacerloPropiaCuenta.respuesta);
      this.lineaBaseForm.get('mejorarCalidadCacao').get('tendalesElevadosCania')
        .setValue(this.formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.tendalesElevadosCania.respuesta);
      this.lineaBaseForm.get('mejorarCalidadCacao').get('secadorasComunitarias')
        .setValue(this.formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.secadorasComunitarias.respuesta);
      this.lineaBaseForm.get('mejorarCalidadCacao').get('contarAgrupacionParaProyecto')
        .setValue(this.formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.secadorasComunitarias.preguntas.contarAgrupacionParaProyecto.respuesta);
      /*************************************************************** */
      this.lineaBaseForm.get('diversificacionIngresos').get('huertosOrganicos')
        .setValue(this.formularioLineaBase.secciones.diversificacionIngresos.preguntas.huertosOrganicos.respuesta);
      this.lineaBaseForm.get('diversificacionIngresos').get('desarrolloViveros')
        .setValue(this.formularioLineaBase.secciones.diversificacionIngresos.preguntas.desarrolloViveros.respuesta);
      this.lineaBaseForm.get('diversificacionIngresos').get('desarrolloVentaFertilizantes')
        .setValue(this.formularioLineaBase.secciones.diversificacionIngresos.preguntas.desarrolloVentaFertilizantes.respuesta);
      this.lineaBaseForm.get('diversificacionIngresos').get('rehabilitacionFinca')
        .setValue(this.formularioLineaBase.secciones.diversificacionIngresos.preguntas.rehabilitacionFinca.respuesta);
      this.lineaBaseForm.get('diversificacionIngresos').get('brigadaPodadores')
        .setValue(this.formularioLineaBase.secciones.diversificacionIngresos.preguntas.brigadaPodadores.respuesta);
      this.lineaBaseForm.get('diversificacionIngresos').get('contarExperienciaPoda')
        .setValue(this.formularioLineaBase.secciones.diversificacionIngresos.preguntas.brigadaPodadores.preguntas.contarExperienciaPoda.respuesta);
      this.lineaBaseForm.get('diversificacionIngresos').get('aniosExperiencia')
        .setValue(this.formularioLineaBase.secciones.diversificacionIngresos.preguntas.brigadaPodadores.preguntas.contarExperienciaPoda.preguntas.aniosExperiencia.respuesta);
      /************************************************************* */
      this.lineaBaseForm.get('preguntasAdicionales').get('tieneAreaLibreParaSembrar')
        .setValue(this.formularioLineaBase.secciones.preguntasAdicionales.preguntas.tieneAreaLibreParaSembrar.respuesta);
      this.lineaBaseForm.get('preguntasAdicionales').get('areaLibre')
        .setValue(this.formularioLineaBase.secciones.preguntasAdicionales.preguntas.tieneAreaLibreParaSembrar.preguntas.areaLibre.respuesta);
      this.lineaBaseForm.get('preguntasAdicionales').get('necesitaRehaReinjerto')
        .setValue(this.formularioLineaBase.secciones.preguntasAdicionales.preguntas.necesitaRehaReinjerto.respuesta);
      this.lineaBaseForm.get('preguntasAdicionales').get('cantidad')
        .setValue(this.formularioLineaBase.secciones.preguntasAdicionales.preguntas.necesitaRehaReinjerto.preguntas.cantidad.respuesta);
      } else {
      //
    }
    this.isLoading = false;
  }

}
