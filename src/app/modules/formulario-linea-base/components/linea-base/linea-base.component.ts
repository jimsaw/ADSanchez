import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { AgricultorService } from 'src/app/modules/core/services/agricultor/agricultor.service';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { FormularioLineaBaseService } from 'src/app/modules/core/services/formularioLineaBase/formulario-linea-base.service';
import { InformacionFincaComponent } from '../sections/informacion-finca/informacion-finca.component';
import { HectareajeComponent } from '../sections/hectareaje/hectareaje.component';
import { CacaoCNNComponent } from '../sections/cacao-cnn/cacao-cnn.component';
import { CacaoNacionalComponent } from '../sections/cacao-nacional/cacao-nacional.component';
import { CacaoNacionalNuevosClonesComponent } from '../sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component';
import { OrigenPlantasComponent } from '../sections/origen-plantas/origen-plantas.component';
import { InformacionFamiliaComponent } from '../sections/informacion-familia/informacion-familia.component';
import { PracticasAgricolasComponent } from '../sections/practicas-agricolas/practicas-agricolas.component';
import { SaludSeguridadOcupacionalComponent } from '../sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component';
import { CosechaComponent } from '../sections/cosecha/cosecha.component';
import { VentaComponent } from '../sections/venta/venta.component';
import { NivelAsociatividadComponent } from '../sections/nivel-asociatividad/nivel-asociatividad.component';
import { CondicionesLaboralesComponent } from '../sections/condiciones-laborales/condiciones-laborales.component';
import { ServiciosBasicosComponent } from '../sections/servicios-basicos/servicios-basicos.component';
import { ConservacionAguaManejoDesechosComponent } from 'src/app/modules/formulario-verificacion/components/sections/conservacion-agua-manejo-desechos/conservacion-agua-manejo-desechos.component';
import { ConservacionRecursosManejoDesechosComponent } from '../sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component';
import { IncrementarProductividadComponent } from '../sections/incrementar-productividad/incrementar-productividad.component';
import { MejorarCalidadCacaoComponent } from '../sections/mejorar-calidad-cacao/mejorar-calidad-cacao.component';
import { DiversificacionIngresosComponent } from '../sections/diversificacion-ingresos/diversificacion-ingresos.component';
import { PreguntasAdicionalesComponent } from '../sections/preguntas-adicionales/preguntas-adicionales.component';

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

  @ViewChild(InformacionFincaComponent) informacionFincaComponent: InformacionFincaComponent;
  @ViewChild(HectareajeComponent) hectareajeComponent: HectareajeComponent;
  @ViewChild(CacaoCNNComponent) cacaoCNNComponent: CacaoCNNComponent;
  @ViewChild(CacaoNacionalComponent) cacaoNacionalComponent: CacaoNacionalComponent;
  @ViewChild(CacaoNacionalNuevosClonesComponent) cacaoNacionalNuevosClonesComponent: CacaoNacionalNuevosClonesComponent;
  @ViewChild(OrigenPlantasComponent) origenPlantasComponent: OrigenPlantasComponent;
  @ViewChild(InformacionFamiliaComponent) informacionFamiliaComponent: InformacionFamiliaComponent;
  @ViewChild(PracticasAgricolasComponent) practicasAgricolasComponent: PracticasAgricolasComponent;
  @ViewChild(SaludSeguridadOcupacionalComponent) saludSeguridadOcupacionalComponent: SaludSeguridadOcupacionalComponent;
  @ViewChild(CosechaComponent) cosechaComponent: CosechaComponent;
  @ViewChild(VentaComponent) ventaComponent: VentaComponent;
  @ViewChild(NivelAsociatividadComponent) nivelAsociatividadComponent: NivelAsociatividadComponent;
  @ViewChild(CondicionesLaboralesComponent) condicionesLaboralesComponent: CondicionesLaboralesComponent;
  @ViewChild(ServiciosBasicosComponent) serviciosBasicosComponent: ServiciosBasicosComponent;
  @ViewChild(ConservacionRecursosManejoDesechosComponent) conservacionRecursosManejoDesechosComponent: ConservacionRecursosManejoDesechosComponent;
  @ViewChild(IncrementarProductividadComponent) incrementarProductividadComponent: IncrementarProductividadComponent;
  @ViewChild(MejorarCalidadCacaoComponent) mejorarCalidadCacaoComponent: MejorarCalidadCacaoComponent;
  @ViewChild(DiversificacionIngresosComponent) diversificacionIngresosComponent: DiversificacionIngresosComponent;
  @ViewChild(PreguntasAdicionalesComponent) preguntasAdicionalesComponent: PreguntasAdicionalesComponent;

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
    this.lineaBaseForm = this.formBuilder.group({
      agricultor: new FormControl(''),
    });
  }

  /*
  debugging() {
    // console.log(this.informacionFincaComponent.formularioLineaBase);
  }
  */

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
      this.formularioLineaBase = formulario;
    }
  }

  async fetchAgricultor(): Promise<void> {
    if (!this.isFormEmpty()) {
      this.agricultor = await this.agricultorService.get(this.formularioLineaBase["agricultorId"]);
      for (let agricultor of this.listaAgricultores) {
        if (agricultor.id === this.agricultor.id) {
          this.lineaBaseForm.get('agricultor').setValue(agricultor);
          break;
        }
      }
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
        informacionFinca: this.informacionFincaComponent.seccion,
        hectareaje: this.hectareajeComponent.seccion,
        cacaoCNN: this.cacaoCNNComponent.seccion,
        cacaoNacional: this.cacaoNacionalComponent.seccion,
        cacaoNacionalNuevosClones: this.cacaoNacionalNuevosClonesComponent.seccion,
        origenPlantas: this.origenPlantasComponent.seccion,
        informacionFamilia: this.informacionFamiliaComponent.seccion,
        practicasAgricolas: this.practicasAgricolasComponent.seccion,
        saludSeguridadOcupacional: this.saludSeguridadOcupacionalComponent.seccion,
        cosecha: this.cosechaComponent.seccion,
        venta: this.ventaComponent.seccion,
        nivelAsociatividad: this.nivelAsociatividadComponent.seccion,
        condicionesLaborales: this.condicionesLaboralesComponent.seccion,
        serviciosBasicos: this.serviciosBasicosComponent.seccion,
        conservacionRecursosManejoDesechos: this.conservacionRecursosManejoDesechosComponent.seccion,
        incrementarProductividad: this.incrementarProductividadComponent.seccion,
        mejorarCalidadCacao: this.mejorarCalidadCacaoComponent.seccion,
        diversificacionIngresos: this.diversificacionIngresosComponent.seccion,
        preguntasAdicionales: this.preguntasAdicionalesComponent.seccion
      }
    };
    if (this.agricultor) {
      if (this.formularioLineaBase) {
        formularioLineaBaseParam.id = this.formularioLineaBase.id;
      }
      this.formularioService.set(formularioLineaBaseParam).then(() => {
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

  setFormValues(): void {
    if (!this.isFormEmpty()) {
      this.informacionFincaComponent.setValues(this.formularioLineaBase);
      this.hectareajeComponent.setValues(this.formularioLineaBase);
      this.cacaoCNNComponent.setValues(this.formularioLineaBase);
      this.cacaoNacionalComponent.setValues(this.formularioLineaBase);
      this.cacaoNacionalNuevosClonesComponent.setValues(this.formularioLineaBase);
      this.origenPlantasComponent.setValues(this.formularioLineaBase);
      this.informacionFamiliaComponent.setValues(this.formularioLineaBase);
      this.practicasAgricolasComponent.setValues(this.formularioLineaBase);
      this.saludSeguridadOcupacionalComponent.setValues(this.formularioLineaBase);
      this.cosechaComponent.setValues(this.formularioLineaBase);
      this.ventaComponent.setValues(this.formularioLineaBase);
      this.nivelAsociatividadComponent.setValues(this.formularioLineaBase);
      this.condicionesLaboralesComponent.setValues(this.formularioLineaBase);
      this.serviciosBasicosComponent.setValues(this.formularioLineaBase);
      this.conservacionRecursosManejoDesechosComponent.setValues(this.formularioLineaBase);
      this.incrementarProductividadComponent.setValues(this.formularioLineaBase);
      this.mejorarCalidadCacaoComponent.setValues(this.formularioLineaBase);
      this.diversificacionIngresosComponent.setValues(this.formularioLineaBase);
      this.preguntasAdicionalesComponent.setValues(this.formularioLineaBase);
    }
  }

}
