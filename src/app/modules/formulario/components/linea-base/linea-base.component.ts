import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioService } from 'src/app/modules/core/services/formulario/formulario.service';

@Component({
  selector: 'app-linea-base',
  templateUrl: './linea-base.component.html',
  styleUrls: ['./linea-base.component.css']
})
export class LineaBaseComponent implements OnInit {
  public lineaBaseForm: FormGroup;
  agricultor;

  constructor(private formBuilder: FormBuilder,
    private formularioService: FormularioService) {
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
        conociminetoManejoDesechos: new FormControl(''),
        productoContaminaEcosistema: new FormControl(''),
        ubicacionDesechosAguasNegras: new FormControl(''),
        tieneArbolesSombrio: new FormControl(''),
        cultivaVegetalesHortalizasFrutas: new FormControl(''),
        compraPorductosMercadoLocales: new FormControl(''),
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

  ngOnInit() {

  }

  onSubmit() {
    this.agricultor = this.lineaBaseForm.value.agricultor;
    delete this.lineaBaseForm.value.agricultor;
    console.log(this.lineaBaseForm.value);
    //console.log(this.agricultor);
    this.formularioService.saveFormularioLineaBase(this.agricultor, this.lineaBaseForm.value, String(new Date));
  }

  reset() {
    this.lineaBaseForm.reset();
  }

}
