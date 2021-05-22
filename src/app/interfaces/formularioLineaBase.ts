export interface FormularioLineaBase {
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
                        maiz: {
                            respuesta: string
                        },
                        naranja: {
                            respuesta: string
                        },
                        platano: {
                            respuesta: string
                        },
                        mani: {
                            respuesta: string
                        },
                        otros: {
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
                produccionAnioAnterior: {
                    respuesta: string
                },
                precioPromedio: {
                    respuesta: string
                }
            }
        }
    }
}