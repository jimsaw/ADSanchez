import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-capacitaciones-beneficio-programa',
  templateUrl: './capacitaciones-beneficio-programa.component.html',
  styleUrls: ['./capacitaciones-beneficio-programa.component.css']
})
export class CapacitacionesBeneficioProgramaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  public capacitacionesBeneficioPrograma: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.capacitacionesBeneficioPrograma = this.formBuilder.group({
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
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
