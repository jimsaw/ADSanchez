import { Formulario } from "./formulario";

export interface FormularioLineaBase extends Formulario {
    fechaVisita: {
        respuesta: string
    },
    tecnico: {
        respuesta: string
    },
    secciones: {
        informacionFinca: {
            preguntas: {
                provincia: {
                    respuesta: string
                },
                canton: {
                    respuesta: string
                },
                parroquia: {
                    respuesta: string
                },
                recinto: {
                    respuesta: string
                },
                nombreFinca: {
                    respuesta: string
                },
                descripcionLlegarFinca: {
                    respuesta: string
                }
            }
        },
        hectareaje: {
            preguntas: {
                dimensionTotalFinca: {
                    respuesta: string
                },
                terreno: {
                    respuesta: string
                },
                cultivoCacao: {
                    respuesta: string,
                    preguntas: {
                        asociadoConTiene: {
                            respuesta: string,
                            preguntas: {
                                otrosEspecifique: {
                                    respuesta: string
                                }
                            }
                        }
                    }
                },
                areaNetaCacao: {
                    respuesta: string
                },
                distanciaPlantas: {
                    respuesta: string
                },
                plantasXHectareas: {
                    respuesta: string
                },
                tipoUbicacionZona: {
                    respuesta: string
                }
            }
        },
        cacaoCNN: {
            preguntas: {
                areaTotalCNN: {
                    respuesta: string
                },
                areaProduccion: {
                    respuesta: string
                },
                edadCacaoProductivo: {
                    respuesta: string
                },
                areaRecienSembrada: {
                    respuesta: string
                },
                edadCacaoReciente: {
                    respuesta: string
                },
                produccionAnioAnteriorCacaoCNN: {
                    respuesta: string
                },
                precioPromedio: {
                    respuesta: string
                }
            }
        },
        cacaoNacional: {
            preguntas: {
                areaTotalNacional: {
                    respuesta: string
                },
                areaTotalNacionalViejo: {
                    respuesta: string
                },
                edadCacaoViejo: {
                    respuesta: string
                },
                brotesBasales: {
                    respuesta: string
                },
                arbolesElite: {
                    respuesta: string
                },
                areaTotalViejoInjertado: {
                    respuesta: string
                },
                areaViejoInjertado: {
                    respuesta: string
                },
                edadViejoInjertado: {
                    respuesta: string
                },
                areaViejoInjertado2: {
                    respuesta: string
                },
                edadViejoInjertado2: {
                    respuesta: string
                },
                areaTotalNuevosClones: {
                    respuesta: string
                },
                areaNuevosClones: {
                    respuesta: string
                },
                edadNuevosClones: {
                    respuesta: string
                },
                areaNuevosClones2: {
                    respuesta: string
                },
                edadNuevosClones2: {
                    respuesta: string
                },
                areaNuevosClones3: {
                    respuesta: string
                },
                edadNuevosClones3: {
                    respuesta: string
                },
                produccionAnioAnteriorCacaoNacional: {
                    respuesta: string
                },
                precioPromedioXCacao: {
                    respuesta: string
                }
            }
        },
        cacaoNacionalNuevosClones: {
            preguntas: {
                usoAnteriorAreaNueva: {
                    respuesta: string
                },
                tipoVariedad: {
                    respuesta: string,
                    preguntas: {
                        especifiqueOtros: {
                            respuesta: string
                        }
                    }
                },
                variedadesSembradasCalificacion: {
                    respuesta: string
                },
                plantulasCondicionesEdafoclimaticas: {
                    respuesta: string
                },
                plantulasRendimiento: {
                    respuesta: string
                },
                plantulasVigorPlanta: {
                    respuesta: string
                },
                plantulasResistenciaEnfermedades: {
                    respuesta: string
                }
            }
        },
        origenPlantas: {
            preguntas: {
                nombreVivero: {
                    respuesta: string
                },
                ubicacionVivero: {
                    respuesta: string
                },
                encargadoPropagacion: {
                    respuesta: string
                },
                tipoConocimiento: {
                    respuesta: string
                },
                entidadDonacion: {
                    respuesta: string
                },
                cantidadPlantasRecibidas: {
                    respuesta: string
                }
            }
        },
        informacionFamilia: {
            preguntas: {
                miembro1ClasifiacionMiembroFamiliar: {
                    respuesta: string
                },
                miembro1Edad: {
                    respuesta: string
                },
                miembro1Genero: {
                    respuesta: string
                },
                miembro1SeguridadSocial: {
                    respuesta: string
                },
                miembro1NivelEduacion: {
                    respuesta: string
                },
                miembro1LaboraEnFinca: {
                    respuesta: string
                },
                miembro1LaborRealizado: {
                    respuesta: string
                },
                miembro1HorasAlDiaTrabaja: {
                    respuesta: string
                },
                miembro1tieneOtraFuenteIngreso: {
                    respuesta: string
                },
                miembro1sueldoIngresoMensual: {
                    respuesta: string
                },
                miembro2ClasifiacionMiembroFamiliar: {
                    respuesta: string
                },
                miembro2Edad: {
                    respuesta: string
                },
                miembro2Genero: {
                    respuesta: string
                },
                miembro2SeguridadSocial: {
                    respuesta: string
                },
                miembro2NivelEduacion: {
                    respuesta: string
                },
                miembro2LaboraEnFinca: {
                    respuesta: string
                },
                miembro2LaborRealizado: {
                    respuesta: string
                },
                miembro2HorasAlDiaTrabaja: {
                    respuesta: string
                },
                miembro2tieneOtraFuenteIngreso: {
                    respuesta: string
                },
                miembro2sueldoIngresoMensual: {
                    respuesta: string
                },
                miembro3ClasifiacionMiembroFamiliar: {
                    respuesta: string
                },
                miembro3Edad: {
                    respuesta: string
                },
                miembro3Genero: {
                    respuesta: string
                },
                miembro3SeguridadSocial: {
                    respuesta: string
                },
                miembro3NivelEduacion: {
                    respuesta: string
                },
                miembro3LaboraEnFinca: {
                    respuesta: string
                },
                miembro3LaborRealizado: {
                    respuesta: string
                },
                miembro3HorasAlDiaTrabaja: {
                    respuesta: string
                },
                miembro3tieneOtraFuenteIngreso: {
                    respuesta: string
                },
                miembro3sueldoIngresoMensual: {
                    respuesta: string
                },
                miembro4ClasifiacionMiembroFamiliar: {
                    respuesta: string
                },
                miembro4Edad: {
                    respuesta: string
                },
                miembro4Genero: {
                    respuesta: string
                },
                miembro4SeguridadSocial: {
                    respuesta: string
                },
                miembro4NivelEduacion: {
                    respuesta: string
                },
                miembro4LaboraEnFinca: {
                    respuesta: string
                },
                miembro4LaborRealizado: {
                    respuesta: string
                },
                miembro4HorasAlDiaTrabaja: {
                    respuesta: string
                },
                miembro4tieneOtraFuenteIngreso: {
                    respuesta: string
                },
                miembro4sueldoIngresoMensual: {
                    respuesta: string
                },
                familiarDiscapacitado: {
                    respuesta: string
                },
                esposaInvolucradaEntrevista: {
                    respuesta: string
                },
                esposoIncluyeEsposaEntrevista: {
                    respuesta: string
                },
                deseoIngresoAdicionalConyuge: {
                    respuesta: string
                },
                deseoTrabajoMedioTiempoProyectosFuturos: {
                    respuesta: string
                    preguntas: {
                        comoCual: {
                            respuesta: string
                        }
                    }
                },
                hijoInteresadoEnProyectosRehabilitacionFinca: {
                    respuesta: string
                }
            }
        },
        practicasAgricolas: {
            preguntas: {
                interesElaborarFertilizanteNaturalOrganico: {
                    respuesta: string
                },
                plagasAfectanCultivo: {
                    respuesta: string
                },
                enfermedadesAfectanCultivo: {
                    respuesta: string
                },
                productoParaPlagas: {
                    respuesta: string
                },
                productoParaEnfermedades: {
                    respuesta: string
                },
                llevaRegistroPerdidasMazorcasXMonilla: {
                    respuesta: string,
                    preguntas: {
                        cantidadPerdidaMazorcas: {
                            respuesta: string
                        }
                    }
                },
                periodoFertilizacion: {
                    respuesta: string
                },
                periodoPoda: {
                    respuesta: string
                },
                periodoControlMaleza: {
                    respuesta: string
                },
                periodoMIPE: {
                    respuesta: string
                },
                periodoCosecha: {
                    respuesta: string
                }
            }
        },
        saludSeguridadOcupacional: {
            preguntas: {
                accidentesLaboralesUltimoAnio: {
                    respuesta: string,
                    preguntas: {
                        tipoAccidente: {
                            respuesta: string
                        }
                    }
                },
                periodoIntoxicacionPresente: {
                    respuesta: string,
                    preguntas: {
                        producto: {
                            respuesta: string
                        }
                    }
                },
                centroSaludCercano: {
                    respuesta: string
                }
            }
        },
        cosecha: {
            preguntas: {
                periodoCadaTumba: {
                    respuesta: string
                },
                latasCacaoXTumba: {
                    respuesta: string
                },
                realizaEscurridoSecadoCCN51: {
                    respuesta: string
                },
                diasFermentadoCacao: {
                    respuesta: string
                }
            }
        },
        venta: {
            preguntas: {
                almacenaCacaoDespSecado: {
                    respuesta: string,
                    preguntas: {
                        tiempoAlmacenadoCacao: {
                            respuesta: string
                        }
                    }
                },
                propiedadTransporte: {
                    respuesta: string
                },
                tipoTransporte: {
                    respuesta: string
                },
                registroFinancieroFinca: {
                    respuesta: string
                },
                tipoRegistrosFinancierosFinca: {
                    respuesta: string
                }
            }
        },
        nivelAsociatividad: {
            preguntas: {
                perteneceAsocProgrCertif: {
                    respuesta: string,
                    preguntas: {
                        nombreAsociacion: {
                            respueta: string
                        },
                        cantidadMiembros: {
                            respuesta: string
                        },
                        recibeBeneficios: {
                            respuesta: string
                        },
                        tiposBeneficios: {
                            respuesta: string
                        }
                    }
                },
                ayudaOtraInstitucion: {
                    respuesta: string,
                    preguntas: {
                        nombreOtraInstitucion: {
                            respuesta: string
                        },
                        tipoAyuda: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        condicionesLaborales: {
            preguntas: {
                contrataTrabajadores: {
                    respuesta: string,
                    preguntas: {
                        cantidadTrabajadores: {
                            respuesta: string
                        }
                    }
                },
                areaInicialContrato: {
                    respuesta: string
                },
                tipoContratoTrabajo: {
                    respuesta: string
                },
                contrataMenoresEdad: {
                    respuesta: string,
                    preguntas: {
                        poseePermiso: {
                            respuesta: string
                        }
                    }
                },
                baseContratoAgricola: {
                    respuesta: string
                }
            }
        },
        serviciosBasicos: {
            preguntas: {
                energiaElectrica: {
                    respuesta: string
                },
                tipoAguaConsumoFamiliar: {
                    respuesta: string
                }
            }
        },
        conservacionRecursosManejoDesechos: {
            preguntas: {
                conocimientoManejoDesechos: {
                    respuesta: string
                },
                productoContaminaEcosistema: {
                    respuesta: string,
                    preguntas: {
                        ubicacionDesechosAguasNegras: {
                            respuesta: string
                        }
                    }
                },
                tieneArbolesSombrio: {
                    respuesta: string
                },
                cultivaVegetalesHortalizasFrutas: {
                    respuesta: string
                },
                compraProductosMercadoLocales: {
                    respuesta: string,
                    preguntas: {
                        valorPromedioGastado: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        incrementarProductividad: {
            preguntas: {
                recibirPlantasCacaoNacional: {
                    respuesta: string
                },
                aprenderElabProductosNaturales: {
                    respuesta: string
                }
            }
        },
        mejorarCalidadCacao: {
            preguntas: {
                bandejasCajonesFermentacion: {
                    respuesta: string,
                    preguntas: {
                        dispuestoHacerloPropiaCuenta: {
                            respuesta: string
                        }
                    }
                },
                tendalesElevadosCania: {
                    respuesta: string
                },
                secadorasComunitarias: {
                    respuesta: string,
                    preguntas: {
                        contarAgrupacionParaProyecto: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        diversificacionIngresos: {
            preguntas: {
                huertosOrganicos: {
                    respuesta: string
                },
                desarrolloViveros: {
                    respuesta: string
                },
                desarrolloVentaFertilizantes: {
                    respuesta: string
                },
                rehabilitacionFinca: {
                    respuesta: string
                },
                brigadaPodadores: {
                    respuesta: string,
                    preguntas: {
                        contarExperienciaPoda: {
                            respuesta: string,
                            preguntas: {
                                aniosExperiencia: {
                                    respuesta: string
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
                    respuesta: string,
                    preguntas: {
                        areaLibre: {
                            respuesta: string
                        }
                    }
                },
                necesitaRehaReinjerto: {
                    respuesta: string,
                    preguntas: {
                        cantidad: {
                            respuesta: string
                        }
                    }
                }
            }
        }
    }
}