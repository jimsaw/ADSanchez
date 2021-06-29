import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Formulario } from 'src/app/interfaces/formulario';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
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
            //console.log(formularios);
            let listaFormulariosLineaBase: FormularioLineaBase[] = [];
            for (let item of formularios) {
                //console.log(item['id']);
                let formularioLineaBaseElementPromise = this.get(item['id']);
                let formularioLineaBaseElement = await formularioLineaBaseElementPromise;
                //console.log(formularioLineaBaseElement);
                listaFormulariosLineaBase.push(formularioLineaBaseElement);
            }
            //console.log(listaFormulariosLineaBase);
            resolve(listaFormulariosLineaBase);
        });
    }

    set(item: Formulario): Promise<void> {
        const formularioLineaBase = item as FormularioLineaBase;
        return new Promise<void>((resolve, reject) => {
            const collRef = this.firebase.firestore.collection("formulariosLineaBase");
            this.firebase.firestore.runTransaction((transaction) => {
                return new Promise<void>((resolve, reject) => {
                    if (formularioLineaBase.id === '' || formularioLineaBase.id === undefined) {
                        formularioLineaBase.id = this.firebase.createId();
                    }
                    const docRef = collRef.doc(formularioLineaBase.id);
                    transaction.set(docRef, {
                        id: formularioLineaBase.id,
                        agricultorId: formularioLineaBase.agricultor.id,
                        agricultor: formularioLineaBase.agricultor.nombre,
                        fechaVisita: formularioLineaBase.fechaVisita,
                        tecnico: formularioLineaBase.tecnico.nombre
                    });
                    this.writeSections(docRef, formularioLineaBase, transaction);
                    resolve();
                });
            }).then(() => {
                resolve();
            }).catch((e) => {
                console.log(e);
                reject(e);
            });
        });
    }

    delete(formulario: FormularioLineaBase): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                await this.firebase.firestore.runTransaction(async transaction => {
                    const collRef = this.firebase.firestore.collection("formulariosLineaBase");
                    const docRef = collRef.doc(formulario["id"]);
                    await this.deleteSections(docRef, transaction);
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
                    viejosInjertados: {
                        arreglo: []
                    },
                    areaTotalNuevosClones: {
                        respuesta: ""
                    },
                    nuevosClones: {
                        arreglo: []
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
                    miembros: {
                        arreglo: []
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
