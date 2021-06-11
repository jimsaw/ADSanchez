import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { AgricultorService } from 'src/app/modules/core/services/agricultor/agricultor.service';
import { FormularioService } from 'src/app/modules/core/services/formulario/formulario.service';

@Component({
  selector: 'app-linea-base',
  templateUrl: './linea-base.component.html',
  styleUrls: ['./linea-base.component.css']
})
export class LineaBaseComponent implements OnInit {
  lineaBaseForm: FormGroup;
  agricultor: Agricultor;
  listaAgricultores: Agricultor[];

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    private agricultorService: AgricultorService,
    private toastr: ToastrService
  ) {
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
        viejosInjertados: new FormArray([]),
        // areaViejoInjertado: new FormControl(''),
        // edadViejoInjertado: new FormControl(''),
        // areaViejoInjertado2: new FormControl(''),
        // edadViejoInjertado2: new FormControl(''),
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
      }),
      mejorarCalidadCacao: this.formBuilder.group({
        bandejasCajonesFermentacion: new FormControl(''),
        dispuestoHacerloPropiaCuenta: new FormControl(''),
        tendalesElevadosCania: new FormControl(''),
        secadorasComunitarias: new FormControl(''),
        contarAgrupacionParaProyecto: new FormControl('')
      }),
      diversificacionIngresos: this.formBuilder.group({
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
    this.listaAgricultores = this.agricultorService.getAll();
  }

  onSubmit() {
    this.agricultor = this.lineaBaseForm.value.agricultor;
    delete this.lineaBaseForm.value.agricultor;
    let formularioLineaBaseParam: FormularioLineaBase = {
      fechaVisita: {
        respuesta: String(new Date)
      },
      tecnico: {
        respuesta: 'Test'
      },
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
              respuesta: this.lineaBaseForm.value.cacaoNacionalNuevosClones.usoAnteriorAreaNueva
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
              respuesta: this.lineaBaseForm.value.origenPlantas.encargadoPropagacion
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
                  respuesta: this.lineaBaseForm.value.nivelAsociatividad.tiposBeneficios
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
    /*
    this.formularioService.saveFormularioLineaBase(this.agricultor.id, formularioLineaBaseParam, String(new Date))
      .then(value => {
        this.toastr.success('Formulario de Linea Base Creado', '¡Completado!');
        this.lineaBaseForm.reset();
      }).catch((message) => {
        this.toastr.error(message, '¡Error!');
      });
      */
    this.formularioService.saveFormInCollection(
      this.agricultor.id,
      this.agricultor.nombre,
      formularioLineaBaseParam,
      new Date().toLocaleDateString()
    ).then(value => {
        this.toastr.success('Formulario de Linea Base Creado', '¡Completado!');
        this.lineaBaseForm.reset();
      }).catch((e) => {
        console.log(e);
        this.toastr.error(e, '¡Error!');
      });
  }

  reset() {
    this.lineaBaseForm.reset();
  }

}
