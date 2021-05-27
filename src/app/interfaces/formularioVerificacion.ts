export interface FormularioLineaBase {
    fechaVisita: {
        respuesta: string
    },
    tecnico: {
        respuesta: string
    }
    secciones: {
        datosPersonales: {
            preguntas: {
                estadoCivil: {
                    respuesta: string
                },
                nivelEduacion: {
                    respuesta: string
                },
                celular1: {
                    respuesta: string
                },
                celular2: {
                    respuesta: string
                },
                hijosAsistenUnidadEucativa: {
                    respuesta: string
                }
            }
        },
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
        MPE: {
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
        }
    }
}