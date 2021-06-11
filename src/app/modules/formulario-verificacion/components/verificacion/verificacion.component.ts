import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AgricultorService } from 'src/app/modules/core/services/agricultor/agricultor.service';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})
export class VerificacionComponent implements OnInit {
  public verificacionForm: FormGroup;
  listaAgricultores;

  constructor(private agricultorService: AgricultorService,
    private formBuilder: FormBuilder) {
    this.verificacionForm = this.formBuilder.group({
      agricultor: new FormControl(''),
      datosFinca: this.formBuilder.group({
        incrementoHectareajeFinca: new FormControl(''),
        cantidadAumento: new FormControl(''),
        mesIncrementoHectareaje: new FormControl(''),
        motivoAreaNueva: new FormControl(''),
        usoAreaNueva: new FormControl(''),
        incrementoFueraTamanioFinca: new FormControl('')
      }),
      injertacion: this.formBuilder.group({
        realizoInjertosUltimos12Meses: new FormControl(''),
        mesRealizoInjertos: new FormControl('')
      }),
      manejoSuelo: this.formBuilder.group({
        tipoSuelo: new FormControl(''),
        capacitacionTomaMuestrasSuelo: new FormControl(''),
        analisisSuelo: new FormControl(''),
        sueloPH: new FormControl(''),
        suelosNivelesAltosAcidez: new FormControl(''),
        corregidoPHSueloFinca: new FormControl(''),
        maneraCorregidoPHSuelo: new FormControl(''),
        tipoProducto: new FormControl('')
      }),
      fertilizacion: this.formBuilder.group({
        fertilizaCacaotales: new FormControl(''),
        tipoProductoUsado: new FormControl(''),
        usaFertilizanteEdafico: new FormControl(''),
        vecesUsadoAlAnioFertilizanteEdafico: new FormControl(''),
        usaFertilizanteFoliar: new FormControl(''),
        vecesUsadoAlAnioFertilizanteFoliar: new FormControl(''),
        recibidoFertilizanteKits: new FormControl(''),
        tipoFertilizanteRecibido: new FormControl(''),
        opinionEfectividadFertilizante: new FormControl(''),
        repetirCompraConDescuento: new FormControl(''),
        disminuidoProductosQuimicosPorOrganicos: new FormControl('')
      }),
      bodega: this.formBuilder.group({
        poseeBodega: new FormControl(''),
        bodegaSegura: new FormControl(''),
        bodegaOrdenada: new FormControl(''),
        clasificadaXProducto: new FormControl(''),
        tieneRegistroAlmacena: new FormControl(''),
        cuentaDuchaEmergencia: new FormControl(''),
        conocimientoProdcutosPermitidosLINDT: new FormControl('')
      }),
      controlMalezas: this.formBuilder.group({
        controlaMalezas: new FormControl(''),
        tiposMalezaEncontrada: new FormControl(''),
        comoControlaMaleza: new FormControl(''),
        productoQuimicoUsado: new FormControl(''),
        regularidadProductoQuimicoUsado: new FormControl(''),
        recomendacionSeguidaAplicandoProductoQuimico: new FormControl(''),
        conocimientoDisposicionMaquinariaAgricola: new FormControl(''),
        haceUsoMisma: new FormControl(''),
        tiempoPromedioUso: new FormControl('')
      }),
      poda: this.formBuilder.group({
        realizaPoda: new FormControl(''),
        tipoPoda: new FormControl(''),
        podaEsCorrecta: new FormControl(''),
        cortesLaceracionesPlantaMalaPoda: new FormControl(''),
        mazorcasEstadoPudricion: new FormControl(''),
        malaPodaAlbergaPlagasEnfermedades: new FormControl(''),
        plagasMalaPoda: new FormControl(''),
        enfermedadesMalaPoda: new FormControl('')
      }),
      MIPE: this.formBuilder.group({
        realizaPracticasMPE: new FormControl(''),
        tipoControlMPE: new FormControl(''),
        corrigioProblemasMPE: new FormControl(''),
        fincaLibreAplicacionQuimica: new FormControl(''),
        controlaEnfermedades: new FormControl(''),
        reduccionIncidenciaPlagasEnfermedades: new FormControl('')
      }),
      saludSeguridadOcupacional: this.formBuilder.group({
        trabajadoresLlevadosCapacitacionesSSO: new FormControl(''),
        usoPictograma: new FormControl(''),
        buenasPracticasFincaTrabajadores: new FormControl(''),
        botiquin: new FormControl(''),
        eppAntesPlaguicida: new FormControl(''),
        instruccionesPrimerosAuxilios: new FormControl('')
      }),
      registrosProductor: this.formBuilder.group({
        ventaAnualCacaoQuintales: new FormControl(''),
        ventaAnualCacaoUSD: new FormControl(''),
        egresoCompraMateriales: new FormControl(''),
        egresoManoObra: new FormControl(''),
        manejoCuadernilloRegistros: new FormControl(''),
        manejoCostosPlanificacionFinanciera: new FormControl(''),
        disponibilidadAhorrarEnCuenta: new FormControl(''),
        tipoInstitucionAhorroCuenta: new FormControl('')
      }),
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
    this.listaAgricultores = this.agricultorService.getAll();
  }

  onSubmit() {
  }

  reset() {
  }

}
