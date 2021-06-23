import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Formulario } from 'src/app/interfaces/formulario';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { FormulariosComponent } from 'src/app/modules/formulario-linea-base/components/formularios/formularios.component';
import { FormularioService } from '../formulario/formulario.service';
import { KeymapperService } from '../keymapper/keymapper.service';

@Injectable({
    providedIn: 'root'
})
export class FormularioLineaBaseService extends FormularioService {

    constructor(
        private firebase: AngularFirestore,
        private keyMapper: KeymapperService
    ) {
        super(firebase, keyMapper);
    }

    async get(id: string): Promise<FormularioLineaBase> {
        return new Promise(async (resolve, reject) => {
            const docRef = this.firebase.firestore.collection('formulariosLineaBase').doc(id);
            const formulario = (await docRef.get()).data() as FormularioLineaBase;
            this.initSections(formulario);
            await this.fetchSections(formulario);
            resolve(formulario);
        });

    }

    list(): Observable<Formulario[]> {
        return this.firebase.collection('formulariosLineaBase').snapshotChanges().pipe(
            map(formularios => {
                return formularios.map((formulario) => {
                    const formularioParam = formulario.payload.doc.data() as FormularioLineaBase;
                    return formularioParam;
                });
            })
        );
    }

    getAllFormularios(): Promise<FormularioLineaBase[]> {
        return new Promise(async (resolve, reject) => {
            let observable = this.list();
            let formularios = await observable.pipe(take(1)).toPromise();
            console.log(formularios);
            let listaFormulariosLineaBase: FormularioLineaBase[] = [];
            for (let item of formularios) {
                //console.log(item['id']);
                let formularioLineaBaseElementPromise = this.get(item['id']);
                let formularioLineaBaseElement = await formularioLineaBaseElementPromise;
                //console.log(formularioLineaBaseElement);
                listaFormulariosLineaBase.push(formularioLineaBaseElement);
            }
            console.log(listaFormulariosLineaBase);
            resolve(listaFormulariosLineaBase);
        });
    }

    set(item: Formulario): Promise<void> {
        throw new Error('Method not implemented.');
    }

    delete(formulario: FormularioLineaBase): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                await this.firebase.firestore.runTransaction(async transaction => {
                    const collRef = this.firebase.firestore.collection("formulariosLineaBase");
                    const docRef = collRef.doc(formulario["id"]);
                    transaction.delete(docRef);
                    return Promise.resolve();
                });
                resolve("Formulario de linea base eliminado correctamente");
            } catch (e) {
                console.log(e);
                reject("Ha ocurrido un error");
            }
        });
    }

    private async fetchSections(formulario: FormularioLineaBase) {
        const initialCollRef = this.firebase.firestore.collection(`formulariosLineaBase/${formulario.id}/secciones`);
        try {
            const secciones = await initialCollRef.get();
            for (const seccion of secciones.docs) {
                const seccionData = seccion.data();
                const preguntasCollectionRef = initialCollRef.doc(seccionData["id"]).collection("preguntas");
                const preguntasCollection = await preguntasCollectionRef.get();
                for (const pregunta of preguntasCollection.docs) {
                    const preguntaData = pregunta.data();
                    await this.fetchInnerQuestions(preguntaData, formulario["secciones"][seccionData["id"]]["preguntas"], preguntasCollectionRef);
                }
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }


    private async fetchInnerQuestions(data: any, lastObject: any, lastCollectionRef: CollectionReference) {
        const question = data["id"];
        if (lastObject[question] !== undefined) {
            for (let response of Object.keys(lastObject[question])) {
                if (response === "respuesta") {
                    lastObject[question][response] = data["respuesta"];
                } else if (response === "preguntas") {
                    const newCollectionRef = lastCollectionRef.doc(question).collection("preguntas");
                    const newLastObject = lastObject[question][response];
                    try {
                        const preguntas = await newCollectionRef.get();
                        for (const pregunta of preguntas.docs) {
                            const preguntaData = pregunta.data();
                            await this.fetchInnerQuestions(preguntaData, newLastObject, newCollectionRef);
                        }
                    } catch (e) {
                        console.log(e);
                        throw e;
                    }
                }
            }
        }
    }

    private initSections(formulario: FormularioLineaBase) {
        formulario.secciones = {
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
                    areaViejoInjertado: {
                        respuesta: ""
                    },
                    edadViejoInjertado: {
                        respuesta: ""
                    },
                    areaViejoInjertado2: {
                        respuesta: ""
                    },
                    edadViejoInjertado2: {
                        respuesta: ""
                    },
                    areaTotalNuevosClones: {
                        respuesta: ""
                    },
                    areaNuevosClones: {
                        respuesta: ""
                    },
                    edadNuevosClones: {
                        respuesta: ""
                    },
                    areaNuevosClones2: {
                        respuesta: ""
                    },
                    edadNuevosClones2: {
                        respuesta: ""
                    },
                    areaNuevosClones3: {
                        respuesta: ""
                    },
                    edadNuevosClones3: {
                        respuesta: ""
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
                    miembro1ClasifiacionMiembroFamiliar: {
                        respuesta: ""
                    },
                    miembro1Edad: {
                        respuesta: ""
                    },
                    miembro1Genero: {
                        respuesta: ""
                    },
                    miembro1SeguridadSocial: {
                        respuesta: ""
                    },
                    miembro1NivelEduacion: {
                        respuesta: ""
                    },
                    miembro1LaboraEnFinca: {
                        respuesta: ""
                    },
                    miembro1LaborRealizado: {
                        respuesta: ""
                    },
                    miembro1HorasAlDiaTrabaja: {
                        respuesta: ""
                    },
                    miembro1tieneOtraFuenteIngreso: {
                        respuesta: ""
                    },
                    miembro1sueldoIngresoMensual: {
                        respuesta: ""
                    },
                    miembro2ClasifiacionMiembroFamiliar: {
                        respuesta: ""
                    },
                    miembro2Edad: {
                        respuesta: ""
                    },
                    miembro2Genero: {
                        respuesta: ""
                    },
                    miembro2SeguridadSocial: {
                        respuesta: ""
                    },
                    miembro2NivelEduacion: {
                        respuesta: ""
                    },
                    miembro2LaboraEnFinca: {
                        respuesta: ""
                    },
                    miembro2LaborRealizado: {
                        respuesta: ""
                    },
                    miembro2HorasAlDiaTrabaja: {
                        respuesta: ""
                    },
                    miembro2tieneOtraFuenteIngreso: {
                        respuesta: ""
                    },
                    miembro2sueldoIngresoMensual: {
                        respuesta: ""
                    },
                    miembro3ClasifiacionMiembroFamiliar: {
                        respuesta: ""
                    },
                    miembro3Edad: {
                        respuesta: ""
                    },
                    miembro3Genero: {
                        respuesta: ""
                    },
                    miembro3SeguridadSocial: {
                        respuesta: ""
                    },
                    miembro3NivelEduacion: {
                        respuesta: ""
                    },
                    miembro3LaboraEnFinca: {
                        respuesta: ""
                    },
                    miembro3LaborRealizado: {
                        respuesta: ""
                    },
                    miembro3HorasAlDiaTrabaja: {
                        respuesta: ""
                    },
                    miembro3tieneOtraFuenteIngreso: {
                        respuesta: ""
                    },
                    miembro3sueldoIngresoMensual: {
                        respuesta: ""
                    },
                    miembro4ClasifiacionMiembroFamiliar: {
                        respuesta: ""
                    },
                    miembro4Edad: {
                        respuesta: ""
                    },
                    miembro4Genero: {
                        respuesta: ""
                    },
                    miembro4SeguridadSocial: {
                        respuesta: ""
                    },
                    miembro4NivelEduacion: {
                        respuesta: ""
                    },
                    miembro4LaboraEnFinca: {
                        respuesta: ""
                    },
                    miembro4LaborRealizado: {
                        respuesta: ""
                    },
                    miembro4HorasAlDiaTrabaja: {
                        respuesta: ""
                    },
                    miembro4tieneOtraFuenteIngreso: {
                        respuesta: ""
                    },
                    miembro4sueldoIngresoMensual: {
                        respuesta: ""
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
    }

}
