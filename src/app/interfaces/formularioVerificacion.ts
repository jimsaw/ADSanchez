import { Formulario } from "./formulario";

export interface FormularioVerificacion extends Formulario {
    fechaVisita: {
        respuesta: string
    },
    tecnico: {
        respuesta: string
    }
    secciones: {
        datosFinca: {
            preguntas: {
                incrementoHectareajeFinca: {
                    respuesta: string,
                    preguntas: {
                        cantidadAumento: {
                            respuesta: string
                        },
                        mesIncrementoHectareaje: {
                            respuesta: string
                        },
                        motivoAreaNueva: {
                            respuesta: string
                        },
                        usoAreaNueva: {
                            respuesta: string
                        },
                        incrementoFueraTamanioFinca: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        injertacion: {
            preguntas: {
                realizoInjertosUltimos12Meses: {
                    respuesta: string,
                    preguntas: {
                        mesRealizoInjertos: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        manejoSuelo: {
            preguntas: {
                tipoSuelo: {
                    respuesta: string
                },
                capacitacionTomaMuestrasSuelo: {
                    respuesta: string
                },
                analisisSuelo: {
                    respuesta: string,
                    preguntas: {
                        sueloPH: {
                            respuesta: string
                        }
                    }
                },
                suelosNivelesAltosAcidez: {
                    respuesta: string,
                    preguntas: {
                        corregidoPHSueloFinca: {
                            respuesta: string
                        }
                    }
                },
                maneraCorregidoPHSuelo: {
                    respuesta: string,
                    preguntas: {
                        tipoProducto: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        fertilizacion: {
            preguntas: {
                fertilizaCacaotales: {
                    respuesta: string,
                    preguntas: {
                        tipoProductoUsado: {
                            respuesta: string
                        }
                    }
                },
                usaFertilizanteEdafico: {
                    respuesta: string,
                    preguntas: {
                        vecesUsadoAlAnioFertilizanteEdafico: {
                            respuesta: string
                        }
                    }
                },
                usaFertilizanteFoliar: {
                    respuesta: string,
                    preguntas: {
                        vecesUsadoAlAnioFertilizanteFoliar: {
                            respuesta: string
                        }
                    }
                },
                recibidoFertilizanteKits: {
                    respuesta: string,
                    preguntas: {
                        tipoFertilizanteRecibido: {
                            respuesta: string
                        }
                    }
                },
                opinionEfectividadFertilizante: {
                    respuesta: string
                },
                repetirCompraConDescuento: {
                    respuesta: string
                },
                disminuidoProductosQuimicosPorOrganicos: {
                    respuesta: string
                }
            }
        },
        bodega: {
            preguntas: {
                poseeBodega: {
                    respuesta: string
                },
                bodegaSegura: {
                    respuesta: string
                },
                bodegaOrdenada: {
                    respuesta: string
                },
                clasificadaXProducto: {
                    respuesta: string
                },
                tieneRegistroAlmacena: {
                    respuesta: string
                },
                cuentaDuchaEmergencia: {
                    respuesta: string
                },
                conocimientoProdcutosPermitidosLINDT: {
                    respuesta: string
                }
            }
        },
        controlMalezas: {
            preguntas: {
                controlaMalezas: {
                    respuesta: string,
                    preguntas: {
                        tiposMalezaEncontrada: {
                            respuesta: string
                        },
                        comoControlaMaleza: {
                            respuesta: string,
                            preguntas: {
                                productoQuimicoUsado: {
                                    respuesta: string
                                },
                                regularidadProductoQuimicoUsado: {
                                    respuesta: string
                                },
                                recomendacionSeguidaAplicandoProductoQuimico: {
                                    respuesta: string
                                }
                            }
                        }
                    }
                },
                conocimientoDisposicionMaquinariaAgricola: {
                    respuesta: string,
                    preguntas: {
                        haceUsoMisma: {
                            respuesta: string
                        },
                        tiempoPromedioUso: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        poda: {
            preguntas: {
                realizaPoda: {
                    respuesta: string,
                    preguntas: {
                        tipoPoda: {
                            respuesta: string
                        },
                        podaEsCorrecta: {
                            respuesta: string
                        }
                    }
                },
                cortesLaceracionesPlantaMalaPoda: {
                    respuesta: string
                },
                mazorcasEstadoPudricion: {
                    respuesta: string
                },
                malaPodaAlbergaPlagasEnfermedades: {
                    respuesta: string,
                    preguntas: {
                        plagasMalaPoda: {
                            respuesta: string
                        },
                        enfermedadesMalaPoda: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        MIPE: {
            preguntas: {
                realizaPracticasMPE: {
                    respuesta: string,
                    preguntas: {
                        tipoControlMPE: {
                            respuesta: string
                        }
                    }
                },
                corrigioProblemasMPE: {
                    respuesta: string
                },
                fincaLibreAplicacionQuimica: {
                    respuesta: string
                },
                controlaEnfermedades: {
                    respuesta: string
                },
                reduccionIncidenciaPlagasEnfermedades: {
                    respuesta: string
                }
            }
        },
        saludSeguridadOcupacional: {
            preguntas: {
                trabajadoresLlevadosCapacitacionesSSO: {
                    respuesta: string
                },
                usoPictograma: {
                    respuesta: string
                },
                buenasPracticasFincaTrabajadores: {
                    respuesta: string
                },
                botiquin: {
                    respuesta: string
                },
                eppAntesPlaguicida: {
                    respuesta: string
                },
                instruccionesPrimerosAuxilios: {
                    respuesta: string
                }
            }
        },
        registrosProductor: {
            preguntas: {
                ventaAnualCacaoQuintales: {
                    respuesta: string
                },
                ventaAnualCacaoUSD: {
                    respuesta: string
                },
                egresoCompraMateriales: {
                    respuesta: string
                },
                egresoManoObra: {
                    respuesta: string
                },
                manejoCuadernilloRegistros: {
                    respuesta: string
                },
                manejoCostosPlanificacionFinanciera: {
                    respuesta: string
                },
                disponibilidadAhorrarEnCuenta: {
                    respuesta: string,
                    preguntas: {
                        tipoInstitucionAhorroCuenta: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        cosecha: {
            preguntas: {
                cosechaSeparadoCacaoNacionalCCN51: {
                    respuesta: string
                },
                plantasLaceracionesCicatricesMalaPractica: {
                    respuesta: string
                }
            }
        },
        fermentacion: {
            preguntas: {
                fermetaCacao: {
                    respuesta: string,
                    preguntas: {
                        razonNoFermenta: {
                            respuesta: string
                        },
                        modoFermentacion: {
                            respuesta: string
                        },
                        medidasHigieneFermentacion: {
                            respuesta: string
                        },
                        aumentoIngresoPorFermentacion: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        secado: {
            preguntas: {
                nivelHumedadCacaoVendido: {
                    respuesta: string
                },
                maneraRealzarSecado: {
                    respuesta: string
                },
                mejoraIngresoMejorTratamientoSecadoCacao: {
                    respuesta: string
                }
            }
        },
        venta: {
            preguntas: {
                personaVenderCacao: {
                    respuesta: string,
                    preguntas: {
                        razon1: {
                            respuesta: string
                        },
                        razon2: {
                            respuesta: string
                        }
                    }
                },
                recibeBonosEmpresaProgramaLINDT: {
                    respuesta: string,
                    preguntas: {
                        frecuenciaRecibeBono: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        condicionesLaborales: {
            preguntas: {
                discriminacion: {
                    respuesta: string
                },
                explotacion: {
                    respuesta: string
                },
                trabajoInfantil: {
                    respuesta: string
                },
                documentosSoporte: {
                    respuesta: string
                },
                montoAcuerdoContratoAgricola: {
                    respuesta: string
                }
            }
        },
        conservacionAguaManejoDesechos: {
            preguntas: {
                fincaConRiego: {
                    respuesta: string
                },
                disenioRiego: {
                    respuesta: string,
                    preguntas: {
                        hectareasDisenioRiego: {
                            respuesta: string
                        }
                    }
                },
                permisoExtraerAguaRiego: {
                    respuesta: string
                },
                analisisAguaRiego: {
                    respuesta: string
                },
                presentaAnexos: {
                    respuesta: string
                },
                utilizaFiltroEcologico: {
                    respuesta: string,
                    preguntas: {
                        razonUsoFiltroEcologico: {
                            respuesta: string
                        }
                    }
                },
                areaDeschPlasticos: {
                    respuesta: string
                },
                fincaLibrePlasticos: {
                    respuesta: string
                },
                clasificaBasuraDomestica: {
                    respuesta: string
                },
                criterioClasificaBasuraDomestica: {
                    respuesta: string
                },
                practicaReciclajeCompostaje: {
                    respuesta: string
                },
                tratamientoBasura: {
                    respuesta: string
                },
                conocimientoAreaRecepcioEnvasesProductosQuimicos: {
                    respuesta: string,
                    preguntas: {
                        usoServicioAreaRecepcioEnvasesProductosQuimicos: {
                            respuesta: string
                        },
                        frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos: {
                            respuesta: string
                        },
                        almacenaSeguridadEnvasesPrevioTraslado: {
                            respuesta: string,
                            preguntas: {
                                lugarAlmacena: {
                                    respuesta: string
                                }
                            }
                        }
                    }
                },
                tratamientoAguasNegras: {
                    respuesta: string
                },
                tipoExtraccion: {
                    respuesta: string
                },
                infraestructuraRiego: {
                    respuesta: string
                },
                impactoRiego: {
                    respuesta: string
                }
            }
        },
        conservacionSuelosBiodiversidad: {
            preguntas: {
                practicasConservacionSuelos: {
                    respuesta: string
                },
                practicaDeforestacion: {
                    respuesta: string
                },
                plantadoArbolesSombrioRecient: {
                    respuesta: string,
                    preguntas: {
                        cuantosArbolesSombrio: {
                            respuesta: string
                        },
                        promedioArbolesXHectarea: {
                            respuesta: string
                        },
                        reforestadoOrillas: {
                            respuesta: string
                        }
                    }
                },
                promedioArbolXHectarea12MAltura: {
                    respuesta: string
                },
                especiesDiferentesArbolesXHectarea: {
                    respuesta: string
                },
                especiesArbolesEnCultivo: {
                    respuesta: string,
                    preguntas: {
                        especifiqueOtrosEspeciesArboles: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        proteccionAreasRiberenias: {
            preguntas: {
                poseeFuenteHidrica: {
                    respuesta: string,
                    preguntas: {
                        nombreFuenteHidrica: {
                            respuesta: string,
                            preguntas: {
                                especifiqueOtros: {
                                    respuesta: string
                                }
                            }
                        },
                        consideradaFuenteHidrica: {
                            respuesta: string
                        },
                        tipoFuenteHidrica: {
                            respuesta: string
                        },
                        poseeNacientes: {
                            respuesta: string,
                            preguntas: {
                                cuantasNacientes: {
                                    respuesta: string
                                }
                            }
                        },
                        brindaProteccionFuenteHidrica: {
                            respuesta: string,
                            preguntas: {
                                comoBrindaProtFuentHidr: {
                                    respuesta: string
                                }
                            }
                        },
                        distanciaRequerida: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        proteccionAreasAltoValorConservacion: {
            preguntas: {
                sueloPresentaProblemaErosion: {
                    respuesta: string,
                    preguntas: {
                        tipoProblemaErosion: {
                            respuesta: string
                        }
                    }
                },
                necesitaImplementarPracticasMejoraSuelo: {
                    respuesta: string,
                    preguntas: {
                        comoQuePracticas: {
                            respuesta: string
                        }
                    }
                },
                gradoPresentanPendientes: {
                    respuesta: string
                },
                cuentaConAreaForestales: {
                    respuesta: string,
                    preguntas: {
                        tipoAreaForestal: {
                            respuesta: string
                        }
                    }
                },
                realizaPlanesCorteExtraccionMadera: {
                    respuesta: string
                },
                presentaAnexosAreasAltoValor: {
                    respuesta: string
                },
                realizaPlanesReforestacion: {
                    respuesta: string
                },
                conoceEspeciePeligroExtincionEnFinca: {
                    respuesta: string,
                    preguntas: {
                        cualesEspeciesPeligroExtincion: {
                            respuesta: string
                        },
                        especifiqueCualesEspeciesPeligroExtincion: {
                            respuesta: string
                        }
                    }
                },
                fincaConsideradaAltoValor: {
                    respuesta: string,
                    preguntas: {
                        tipoAltoValor: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        diversificacionIngresos: {
            preguntas: {
                usoCultivoDiferenteCacao: {
                    respuesta: string
                },
                otraActividadDentroFincaConIngreso: {
                    respuesta: string
                },
                huertosOrganicosEnFinca: {
                    respuesta: string
                },
                otraActividadFueraFincaConIngreso: {
                    respuesta: string,
                    preguntas: {
                        actividadFueraFincaConIngreso: {
                            respuesta: string
                        },
                        realizaActividadFueraFincaConIngreso: {
                            respuesta: string
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
                            respuesta: string
                        },
                        aplicaCacaoFinoAromaSostenibilidadTrazabilidad: {
                            respuesta: string
                        },
                        utilidadBuenasPracticasAgricolas: {
                            respuesta: string
                        },
                        aplicaBuenasPracticasAgricolas: {
                            respuesta: string
                        },
                        utilidadParametrosCalidad: {
                            respuesta: string
                        },
                        aplicaParametrosCalidad: {
                            respuesta: string
                        },
                        utilidadBuenasPracticasSociales: {
                            respuesta: string
                        },
                        aplicaBuenasPracticasSociales: {
                            respuesta: string
                        },
                        utilidadBuenasPracticasAmbientales: {
                            respuesta: string
                        },
                        aplicaBuenasPracticasAmbientales: {
                            respuesta: string
                        },
                        utilidadElaboracionProductosOrganicos: {
                            respuesta: string
                        },
                        aplicaElaboracionProductosOrganicos: {
                            respuesta: string
                        },
                        utilidadReproduccionVegetativa: {
                            respuesta: string
                        },
                        aplicaReproduccionVegetativa: {
                            respuesta: string
                        },
                        utilidadPoda: {
                            respuesta: string
                        },
                        aplicaPoda: {
                            respuesta: string
                        },
                        utilidadApicultura: {
                            respuesta: string
                        },
                        aplicaApicultura: {
                            respuesta: string
                        },
                        utilidadPorcicultura: {
                            respuesta: string
                        },
                        aplicaPorcicultura: {
                            respuesta: string
                        },
                        utilidadPiscicultura: {
                            respuesta: string
                        },
                        aplicaPiscicultura: {
                            respuesta: string
                        },
                        utilidadRiego: {
                            respuesta: string
                        },
                        aplicaRiego: {
                            respuesta: string
                        },
                        utilidadAgroforesteriaDinamica: {
                            respuesta: string
                        },
                        aplicaAgroforesteriaDinamica: {
                            respuesta: string
                        },
                        temasAdicionalesGustariaAprender: {
                            respuesta: string
                        }
                    }
                },
                incentivos: {
                    preguntas: {
                        necesidadesDetectadasFinca: {
                            respuesta: string
                        }
                    },
                    secciones: {
                        ambiental: {
                            preguntas: {
                                estadoPlantasFrutales: {
                                    respuesta: string
                                },
                                estadoPlantasForestales: {
                                    respuesta: string
                                },
                                estadoOtrosAmbiental: {
                                    respuesta: string
                                },
                                necesitaPlantasFrutales: {
                                    respuesta: string
                                },
                                necesitaPlantasForestales: {
                                    respuesta: string
                                },
                                necesitaOtrosAmbiental: {
                                    respuesta: string
                                }
                            }
                        },
                        insumos: {
                            preguntas: {
                                estadoFertilizanteEdafico: {
                                    respuesta: string
                                },
                                estadoFertilizanteFoliar: {
                                    respuesta: string
                                },
                                necesitaFertilizanteEdafico: {
                                    respuesta: string
                                },
                                necesitaFertilizanteFoliar: {
                                    respuesta: string
                                }
                            }
                        },
                        maquinariaAgricola: {
                            preguntas: {
                                estadoMotoguadania: {
                                    respuesta: string
                                },
                                estadoMotosierra: {
                                    respuesta: string
                                },
                                estadoPodadoraDeAltura: {
                                    respuesta: string
                                },
                                estadoBombaRiego: {
                                    respuesta: string
                                },
                                estadoBombaAMotor: {
                                    respuesta: string
                                },
                                estadoOtrosMaquinariaAgricola: {
                                    respuesta: string
                                },
                                necesitaMotoguadania: {
                                    respuesta: string
                                },
                                necesitaMotosierra: {
                                    respuesta: string
                                },
                                necesitaPodadoraDeAltura: {
                                    respuesta: string
                                },
                                necesitaBombaRiego: {
                                    respuesta: string
                                },
                                necesitaBombaAMotor: {
                                    respuesta: string
                                },
                                necesitaOtrosMaquinariaAgricola: {
                                    respuesta: string
                                }
                            }
                        },
                        herramientas: {
                            preguntas: {
                                estadoTijeras: {
                                    respuesta: string
                                },
                                estadoSerruchos: {
                                    respuesta: string
                                },
                                estadoMachetes: {
                                    respuesta: string
                                },
                                estadoBaldes: {
                                    respuesta: string
                                },
                                estadoTanques: {
                                    respuesta: string
                                },
                                estadoPalas: {
                                    respuesta: string
                                },
                                estadoEPP: {
                                    respuesta: string
                                },
                                estadoKitPoda: {
                                    respuesta: string
                                },
                                estadoKitVivero: {
                                    respuesta: string
                                },
                                estadoOtrosHerramientas: {
                                    respuesta: string
                                },
                                necesitaTijeras: {
                                    respuesta: string
                                },
                                necesitaSerruchos: {
                                    respuesta: string
                                },
                                necesitaMachetes: {
                                    respuesta: string
                                },
                                necesitaBaldes: {
                                    respuesta: string
                                },
                                necesitaTanques: {
                                    respuesta: string
                                },
                                necesitaPalas: {
                                    respuesta: string
                                },
                                necesitaEPP: {
                                    respuesta: string
                                },
                                necesitaKitPoda: {
                                    respuesta: string
                                },
                                necesitaKitVivero: {
                                    respuesta: string
                                },
                                necesitaOtrosHerramientas: {
                                    respuesta: string
                                }
                            }
                        },
                        proyectosInversion: {
                            preguntas: {
                                necesitaPlantasCacao800801: {
                                    respuesta: string
                                },
                                necesitaComboApicola: {
                                    respuesta: string
                                },
                                necesitaPiesCriasInsumos: {
                                    respuesta: string
                                },
                                necesitaPecesInsumos: {
                                    respuesta: string
                                },
                                necesitaRiego: {
                                    respuesta: string
                                },
                                necesitaOtrosProyectosInversion: {
                                    respuesta: string
                                },
                                disponibilidadInvertirPlantasCacao800801: {
                                    respuesta: string
                                },
                                disponibilidadInvertirComboApicola: {
                                    respuesta: string
                                },
                                disponibilidadInvertirPiesCriasInsumos: {
                                    respuesta: string
                                },
                                disponibilidadInvertirPecesInsumos: {
                                    respuesta: string
                                },
                                disponibilidadInvertirRiego: {
                                    respuesta: string
                                },
                                disponibilidadInvertirOtros: {
                                    respuesta: string
                                },
                                condAdecuadasPlantasCacao800801: {
                                    respuesta: string
                                },
                                condAdecuadasComboApicola: {
                                    respuesta: string
                                },
                                condAdecuadasPiesCriasInsumos: {
                                    respuesta: string
                                },
                                condAdecuadasPecesInsumos: {
                                    respuesta: string
                                },
                                condAdecuadasRiego: {
                                    respuesta: string
                                },
                                condAdecuadasOtros: {
                                    respuesta: string
                                },
                                condEconomicasPlantasCacao800801: {
                                    respuesta: string
                                },
                                condEconomicasComboApicola: {
                                    respuesta: string
                                },
                                condEconomicasPiesCriasInsumos: {
                                    respuesta: string
                                },
                                condEconomicasPecesInsumos: {
                                    respuesta: string
                                },
                                condEconomicasRiego: {
                                    respuesta: string
                                },
                                condEconomicasOtros: {
                                    respuesta: string
                                }
                            }
                        },
                        calidadPostCosecha: {
                            preguntas: {
                                necesitaCajonFermentacion: {
                                    respuesta: string
                                },
                                necesitaMarquesinas: {
                                    respuesta: string
                                },
                                necesitaTendales: {
                                    respuesta: string
                                },
                                necesitaSecadoras: {
                                    respuesta: string
                                },
                                necesitaOtrosCalidadPostCosecha: {
                                    respuesta: string
                                },
                                disponibilidadInvertirCajonFermentacion: {
                                    respuesta: string
                                },
                                disponibilidadInvertirMarquesinas: {
                                    respuesta: string
                                },
                                disponibilidadInvertirTendales: {
                                    respuesta: string
                                },
                                disponibilidadInvertirSecadoras: {
                                    respuesta: string
                                },
                                disponibilidadInvertirOtrosCalidadPostCosecha: {
                                    respuesta: string
                                },
                                condAdecuadasFermentacion: {
                                    respuesta: string
                                },
                                condAdecuadasMarquesinas: {
                                    respuesta: string
                                },
                                condAdecuadasTendales: {
                                    respuesta: string
                                },
                                condAdecuadasSecadoras: {
                                    respuesta: string
                                },
                                condAdecuadasOtrosCalidadPostCosecha: {
                                    respuesta: string
                                },
                                condEconomicasFermentacion: {
                                    respuesta: string
                                },
                                condEconomicasMarquesinas: {
                                    respuesta: string
                                },
                                condEconomicasTendales: {
                                    respuesta: string
                                },
                                condEconomicasSecadoras: {
                                    respuesta: string
                                },
                                condEconomicasOtrosCalidadPostCosecha: {
                                    respuesta: string
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}