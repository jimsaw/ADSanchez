export const formularioLineaBaseMapper = {
    provincia: {
        codigo: 'FIN24_PROV',
        pregunta: 'PROVINCIA'
    },
    canton: {
        codigo: 'FIN02_CANT',
        pregunta: 'CANTÓN'
    },
    parroquia: {
        codigo: 'FIN03_PARR',
        pregunta: 'PARROQUIA'
    },
    recinto: {
        codigo: 'FIN04_REC',
        pregunta: 'RECINTO'
    },
    nombreFinca: {
        codigo: 'FIN05_NOMF',
        pregunta: 'NOMBRE DE LA FINCA'
    },
    descripcionLlegarFinca: {
        codigo: 'FIN06_DESCF',
        pregunta: 'DESCRIPCION DETALLADA PARA LLEGAR A LA FINCA'
    },
    dimensionTotalFinca: {
        codigo: 'FIN07_DIM',
        pregunta: 'DIMENSION TOTAL DE LA FINCA'
    },
    terreno: {
        codigo: 'FIN08_TERR',
        pregunta: 'EL TERRENO ES'
    },
    cultivoCacao: {
        codigo: 'FIN09_CULT',
        pregunta: 'EL CULTIVO DE CACAO ES',
    },
    asociadoConTiene: {
        codigo: 'FIN10_ASOCCOTIEN',
        pregunta: 'ESTÁ ASOCIADO CON / TIENE'
    },
    otrosEspecifique: {
        codigo: 'FIN13_OTRO',
        pregunta: 'ESPECIFIQUE'
    },
    areaNetaCacao: {
        codigo: 'CAC01_AREA',
        pregunta: 'AREA NETA DE CACAO'
    },
    distanciaPlantas: {
        codigo: 'CAC02_DIST',
        pregunta: 'DISTANCIA DE PLANTAS'
    },
    plantasXHectareas: {
        codigo: 'CAC03_PLAXH',
        pregunta: 'PLANTAS POR HECTAREAS'
    },
    tipoUbicacionZona: {
        codigo: 'CAC53_ZPRO',
        pregunta: 'LA FINCA SE ENCUENTRA'
    },
    areaTotalCNN: {
        codigo: 'CAC04_CCNAR',
        pregunta: 'AREA TOTAL DE CCN'
    },
    areaProduccion: {
        codigo: 'CAC05_CCNPRO',
        pregunta: 'AREA EN PRODUCCIÓN'
    },
    edadCacaoProductivo: {
        codigo: 'CAC06_CCNED',
        pregunta: 'EDAD CACAO PRODUCTIVO'
    },
    areaRecienSembrada: {
        codigo: 'CAC07_CCNREC',
        pregunta: 'AREA RECIEN SEMBRADA'
    },
    edadCacaoReciente: {
        codigo: 'CAC08_CCNEDR',
        pregunta: 'EDAD CACAO RECIENTE'
    },
    produccionAnioAnteriorCacaoCNN: {
        codigo: 'CAC34_PRODCC',
        pregunta: 'PRODUCCIÓN AÑO ANTERIOR CACAO CNN'
    },
    precioPromedio: {
        codigo: 'CAC36_PRECC',
        pregunta: 'CUAL ES EL PRECIO PROMEDIO QUE LE PAGAN POR EL CACAO CNN'
    },
    areaTotalNacional: {
        codigo: 'CAC09_NAREA',
        pregunta: 'ÁREA TOTAL DE NACIONAL'
    },
    areaTotalNacionalViejo: {
        codigo: 'CAC10_ACVIEJ',
        pregunta: 'ÁREA TOTAL DE NACIONAL VIEJO'
    },
    edadCacaoViejo: {
        codigo: 'CAC11_ECVIEJ',
        pregunta: 'EDAD CACAO VIEJO'
    },
    brotesBasales: {
        codigo: 'CAC56_BROT',
        pregunta: 'PRESENTA BROTES BASALES'
    },
    arbolesElite: {
        codigo: 'CAC57_ELIT',
        pregunta: 'PRESENTA ARBOLES ELITE'
    },
    areaTotalViejoInjertado: {
        codigo: 'CAC12_ACVIN',
        pregunta: 'HA. TOTAL VIEJO INJERTADO'
    },
    areaViejoInjertado: {
        codigo: 'CAC42_AVI1',
        pregunta: 'AREA VIEJO INJERTADO (1)'
    },
    edadViejoInjertado: {
        codigo: 'CAC13_ECVIN',
        pregunta: 'EDAD VIEJO INJERTADO (1)'
    },
    areaViejoInjertado2: {
        codigo: 'CAC43_AVI2',
        pregunta: 'AREA VIEJO INJERTADO (2)'
    },
    edadViejoInjertado2: {
        codigo: 'CAC44_EVI2',
        pregunta: 'EDAD VIEJO INJERTADO (2)'
    },
    areaTotalNuevosClones: {
        codigo: 'CAC14_NCAR',
        pregunta: 'HA. TOTAL NUEVOS CLONES'
    },
    areaNuevosClones: {
        codigo: 'CAC45_ANC1',
        pregunta: 'AREA NUEVOS CLONES (1)'
    },
    edadNuevosClones: {
        codigo: 'CAC15_NCED',
        pregunta: 'EDAD NUEVOS CLONES (1)'
    },
    areaNuevosClones2: {
        codigo: 'CAC46_ANC2',
        pregunta: 'AREA NUEVOS CLONES (2)'
    },
    edadNuevosClones2: {
        codigo: 'CAC47_ENC2',
        pregunta: 'EDAD NUEVOS CLONES (2)'
    },
    areaNuevosClones3: {
        codigo: 'CAC48_ANC3',
        pregunta: 'AREA NUEVOS CLONES (3)'
    },
    edadNuevosClones3: {
        codigo: 'CAC49_ENC3',
        pregunta: 'EDAD NUEVOS CLONES (3)'
    },
    produccionAnioAnteriorCacaoNacional: {
        codigo: 'CAC33_PRODN',
        pregunta: 'PRODUCCIÓN AÑO ANTERIOR CACAO NACIONAL'
    },
    precioPromedioXCacao: {
        codigo: 'CAC35_PREN',
        pregunta: 'CUAL ES EL PRECIO PROMEDIO QUE LE PAGAN POR EL CACAO NACIONAL'
    },
    usoAnteriorAreaNueva: {
        codigo: 'CAC16_NCUSO',
        pregunta: 'USO ANTERIOR DEL AREA NUEVA'
    },
    tipoVariedad: {
        codigo: 'CAC17_TIPVARI',
        pregunta: 'TIPO VARIEDAD'
    },
    especifiqueOtros: {
        codigo: 'CAC51_NC801',
        pregunta: 'VARIEDAD ESPECIFIQUE OTROS'
    },
    variedadesSembradasCalificacion: {
        codigo: 'CAC22_NCVAS',
        pregunta: 'LAS VARIEDADES SEMBRADAS DEMUESTRAN SER'
    },
    plantulasCondicionesEdafoclimaticas: {
        codigo: 'CAC23_PCOND',
        pregunta: 'SOBRE PLANTULAS: ADAPTACION A CONDICIONES EDAFOCLIMATICAS'
    },
    plantulasRendimiento: {
        codigo: 'CAC24_PREND',
        pregunta: 'SOBRE LAS PLANTULAS: RENDIMIENTO'
    },
    plantulasVigorPlanta: {
        codigo: 'CAC25_PVIG',
        pregunta: 'SOBRE LAS PLANTULAS: VIGOR DE LA PLANTA'
    },
    plantulasResistenciaEnfermedades: {
        codigo: 'CAC26_PREST',
        pregunta: 'SOBRE LAS PLANTULAS: RESISTENCIA A ENFERMEDADES'
    },
    nombreVivero: {
        codigo: 'CAC27_NVIV',
        pregunta: 'NOMBRE DEL VIVERO'
    },
    ubicacionVivero: {
        codigo: 'CAC28_UBIV',
        pregunta: 'UBICACIÓN DEL VIVERO'
    },
    encargadoPropagacion: {
        codigo: 'CAC29_PROP',
        pregunta: 'QUIEN REALIZO LA PROPAGACION'
    },
    tipoConocimiento: {
        codigo: 'CAC30_CONC',
        pregunta: 'TIPO DE CONOCIMIENTO'
    },
    entidadDonacion: {
        codigo: 'CAC31_DONO',
        pregunta: 'ENTIDAD QUE DONÓ (En caso de ser donación)'
    },
    cantidadPlantasRecibidas: {
        codigo: 'CAC32_NPLANT',
        pregunta: 'CANTIDAD DE PLANTAS RECIBIDAS'
    },
    miembro1ClasifiacionMiembroFamiliar: {
        codigo: 'FA01_MF1',
        pregunta: 'CLASIFICACIÓN DEL MIEMBRO FAMILIAR'
    },
    miembro1Edad: {
        codigo: 'FA02_ED1',
        pregunta: 'EDAD DEL MIEMBRO FAMILIAR'
    },
    miembro1Genero: {
        codigo: 'FA03_GEN1',
        pregunta: 'GÉNERO DEL MIEMBRO FAMILIAR'
    },
    miembro1SeguridadSocial: {
        codigo: 'FA04_SS1',
        pregunta: 'SEGURIDAD SOCIAL DEL MIEMBRO FAMILIAR'
    },
    miembro1NivelEduacion: {
        codigo: 'FA05_EDU1',
        pregunta: 'NIVEL DE EDUCACIÓN'
    },
    miembro1LaboraEnFinca: {
        codigo: 'FA06_LAB1',
        pregunta: 'LABORA EN LA FINCA'
    },
    miembro1LaborRealizado: {
        codigo: 'FA07_LABR1',
        pregunta: 'LABOR QUE REALIZA'
    },
    miembro1HorasAlDiaTrabaja: {
        codigo: 'FA08_HOR1',
        pregunta: '¿CUÁNTAS HORAS AL DÍA LABORA?'
    },
    miembro1tieneOtraFuenteIngreso: {
        codigo: 'FA09_RD1',
        pregunta: 'TIENE OTRA FUENTE DE INGRESOS'
    },
    miembro1sueldoIngresoMensual: {
        codigo: 'FA10_ING1',
        pregunta: 'SUELDO O INGRESO MENSUAL'
    },
    miembro2ClasifiacionMiembroFamiliar: {
        codigo: 'FA11_MF2',
        pregunta: 'CLASIFICACIÓN DEL MIEMBRO FAMILIAR'
    },
    miembro2Edad: {
        codigo: 'FA12_ED2',
        pregunta: 'EDAD DEL MIEMBRO FAMILIAR'
    },
    miembro2Genero: {
        codigo: 'FA13_GEN2',
        pregunta: 'GÉNERO DEL MIEMBRO FAMILIAR'
    },
    miembro2SeguridadSocial: {
        codigo: 'FA14_SS2',
        pregunta: 'SEGURIDAD SOCIAL DEL MIEMBRO FAMILIAR'
    },
    miembro2NivelEduacion: {
        codigo: 'FA15_EDU2',
        pregunta: 'NIVEL DE EDUCACIÓN'
    },
    miembro2LaboraEnFinca: {
        codigo: 'FA16_LAB2',
        pregunta: 'LABORA EN LA FINCA'
    },
    miembro2LaborRealizado: {
        codigo: 'FA17_LABR2',
        pregunta: 'LABOR QUE REALIZA'
    },
    miembro2HorasAlDiaTrabaja: {
        codigo: 'FA18_HOR2',
        pregunta: '¿CUÁNTAS HORAS AL DÍA LABORA?'
    },
    miembro2tieneOtraFuenteIngreso: {
        codigo: 'FA19_RD2',
        pregunta: 'TIENE OTRA FUENTE DE INGRESOS'
    },
    miembro2sueldoIngresoMensual: {
        codigo: 'FA20_ING2',
        pregunta: 'SUELDO O INGRESO MENSUAL'
    },
    miembro3ClasifiacionMiembroFamiliar: {
        codigo: 'FA21_MF3',
        pregunta: 'CLASIFICACIÓN DEL MIEMBRO FAMILIAR'
    },
    miembro3Edad: {
        codigo: 'FA22_ED3',
        pregunta: 'EDAD DEL MIEMBRO FAMILIAR'
    },
    miembro3Genero: {
        codigo: 'FA23_GEN3',
        pregunta: 'GÉNERO DEL MIEMBRO FAMILIAR'
    },
    miembro3SeguridadSocial: {
        codigo: 'FA24_SS3',
        pregunta: 'SEGURIDAD SOCIAL DEL MIEMBRO FAMILIAR'
    },
    miembro3NivelEduacion: {
        codigo: 'FA25_EDU3',
        pregunta: 'NIVEL DE EDUCACIÓN'
    },
    miembro3LaboraEnFinca: {
        codigo: 'FA26_LAB3',
        pregunta: 'LABORA EN LA FINCA'
    },
    miembro3LaborRealizado: {
        codigo: 'FA27_LABR3',
        pregunta: 'LABOR QUE REALIZA'
    },
    miembro3HorasAlDiaTrabaja: {
        codigo: 'FA28_HOR3',
        pregunta: '¿CUÁNTAS HORAS AL DÍA LABORA?'
    },
    miembro3tieneOtraFuenteIngreso: {
        codigo: 'FA29_RD3',
        pregunta: 'TIENE OTRA FUENTE DE INGRESOS'
    },
    miembro3sueldoIngresoMensual: {
        codigo: 'FA30_ING3',
        pregunta: 'SUELDO O INGRESO MENSUAL'
    },
    miembro4ClasifiacionMiembroFamiliar: {
        codigo: 'FA31_MF4',
        pregunta: 'CLASIFICACIÓN DEL MIEMBRO FAMILIAR'
    },
    miembro4Edad: {
        codigo: 'FA32_ED4',
        pregunta: 'EDAD DEL MIEMBRO FAMILIAR'
    },
    miembro4Genero: {
        codigo: 'FA33_GEN4',
        pregunta: 'GÉNERO DEL MIEMBRO FAMILIAR'
    },
    miembro4SeguridadSocial: {
        codigo: 'FA34_SS4',
        pregunta: 'SEGURIDAD SOCIAL DEL MIEMBRO FAMILIAR'
    },
    miembro4NivelEduacion: {
        codigo: 'FA35_EDU4',
        pregunta: 'NIVEL DE EDUCACIÓN'
    },
    miembro4LaboraEnFinca: {
        codigo: 'FA36_LAB4',
        pregunta: 'LABORA EN LA FINCA'
    },
    miembro4LaborRealizado: {
        codigo: 'FA37_LABR4',
        pregunta: 'LABOR QUE REALIZA'
    },
    miembro4HorasAlDiaTrabaja: {
        codigo: 'FA38_HOR4',
        pregunta: '¿CUÁNTAS HORAS AL DÍA LABORA?'
    },
    miembro4tieneOtraFuenteIngreso: {
        codigo: 'FA39_RD4',
        pregunta: 'TIENE OTRA FUENTE DE INGRESOS'
    },
    miembro4sueldoIngresoMensual: {
        codigo: 'FA40_ING4',
        pregunta: 'SUELDO O INGRESO MENSUAL'
    },
    familiarDiscapacitado: {
        codigo: 'FA42_DISCF',
        pregunta: 'ALGUN FAMILIAR QUE PRESENTE DISCAPACIDAD'
    },
    esposaInvolucradaEntrevista: {
        codigo: 'FA43_ESPA',
        pregunta: 'LA ESPOSA SE INVOLUCRA EN LA ENTREVISTA'
    },
    esposoIncluyeEsposaEntrevista: {
        codigo: 'FA44_ESPO',
        pregunta: 'ESPOSO INCLUYE A ESPOSA EN LA ENTREVISTA'
    },
    deseoIngresoAdicionalConyuge: {
        codigo: 'FA45_CONYIN',
        pregunta: 'GUSTARIA QUE SU CONYUGE TUVIESE ALGUN INGRESO ADICIONAL'
    },
    deseoTrabajoMedioTiempoProyectosFuturos: {
        codigo: 'FA46_MTVIV',
        pregunta: 'GUSTARÍA UN TRABAJO DE1/2 TIEMPO EN PROYECTOS FUTUROS DEL PROG.'
    },
    comoCual: {
        codigo: 'FA48_CUAL',
        pregunta: '¿COMO CUÁL?'
    },
    hijoInteresadoEnProyectosRehabilitacionFinca: {
        codigo: 'FA47_HIJP',
        pregunta: 'SU HIJO ESTARÍA INTERESADO EN PARTICIPAR EN PROYECTOS DE REHABILITACIÓN DE FINCA Y BRIGADAS'
    },
    interesElaborarFertilizanteNaturalOrganico: {
        codigo: 'FER18_CAPF',
        pregunta: '¿LE INTERERESARÍA ELABORAR FERTILIZANTES NATURALES / ORGÁNICOS?'
    },
    plagasAfectanCultivo: {
        codigo: 'MIPE09_PLAG',
        pregunta: 'PLAGAS QUE AFECTAN GENERALMENTE EN EL CULTIVO'
    },
    enfermedadesAfectanCultivo: {
        codigo: 'MIPE15_ENFERM',
        pregunta: 'ENFERMEDADES QUE AFECTAN GENERALMENTE EN EL CULTIVO'
    },
    escobabruja: {
        codigo: 'MIPE16_ESC',
        pregunta: 'ESCOBA BRUJA'
    },
    monilla: {
        codigo: 'MIPE17_EMO',
        pregunta: 'MONILLA'
    },
    malDeMachete: {
        codigo: 'MIPE18_EMM',
        pregunta: 'MAL DE MACHETE'
    },
    otrosEnfermedades: {
        codigo: 'MIPE19_EOTR',
        pregunta: 'OTROS'
    },
    productoParaPlagas: {
        codigo: 'MIPE07_PLA',
        pregunta: 'PRODUCTO QUIMICO O NATURAL QUE APLICÓ PARA LAS PLAGAS'
    },
    productoParaEnfermedades: {
        codigo: 'MIPE08_ENF',
        pregunta: 'PRODUCTO QUIMICO O NATURAL QUE APLICÓ PARA LAS ENFERMEDADES'
    },
    llevaRegistroPerdidasMazorcasXMonilla: {
        codigo: 'MIPE20_MZM',
        pregunta: '¿LLEVA REGISTRO DEL NÚMERO/PORCENTAJE DE MAZORCAS QUE PIERDE ANUALMENTE POR MONILLA?',
    },
    cantidadPerdidaMazorcas: {
        codigo: 'MIPE21_NMAZ',
        pregunta: '¿CUANTAS?'
    },
    periodoFertilizacion: {
        codigo: 'LAB01_F',
        pregunta: 'FERTILIZA'
    },
    periodoPoda: {
        codigo: 'LAB02_P',
        pregunta: 'PODA'
    },
    periodoControlMaleza: {
        codigo: 'LAB03_C',
        pregunta: 'CONTROLA MALEZA'
    },
    periodoMIPE: {
        codigo: 'LAB04_M',
        pregunta: 'MIPE'
    },
    periodoCosecha: {
        codigo: 'LAB05_C',
        pregunta: 'COSECHA'
    },
    accidentesLaboralesUltimoAnio: {
        codigo: 'SSO07_ACC',
        pregunta: '¿HA HABIDO ACCIDENTES LABORALES EN LA FINCA DURANTE EL ULTIMO AÑO?'
    },
    tipoAccidente: {
        codigo: 'SSO08_TACC',
        pregunta: 'QUÉ TIPO DE ACCIDENTE'
    },
    periodoIntoxicacionPresente: {
        codigo: 'SSO09_INT',
        pregunta: '¿HA SUFRIDO UD. O ALGUN MIEMBRO DE LA FAMILIA O ALGUN TRABAJADOR DE ALGUN EPISODIO DE INTOXICACION?'
    },
    producto: {
        codigo: 'SSO10_PROI',
        pregunta: '¿CON QUE PRODUCTO?'
    },
    centroSaludCercano: {
        codigo: 'SSO11_CS',
        pregunta: 'HAY UN CENTRO DE SALUD CERCANO'
    },
    periodoCadaTumba: {
        codigo: 'COS01_TUM',
        pregunta: 'SUS TUMBAS LAS REALIZA:'
    },
    latasCacaoXTumba: {
        codigo: 'COS02_LTC',
        pregunta: '¿CUÁNTAS LATAS DE CACAO FRESCO COSECHA POR TUMBA?'
    },
    realizaEscurridoSecadoCCN51: {
        codigo: 'FEM01_CCN',
        pregunta: '¿REALIZA ESCURRIDO Y/O PRE-SECADO PARA EL CCN51?'
    },
    diasFermentadoCacao: {
        codigo: 'FEM03_DIASF',
        pregunta: '¿CUÁNTOS DIAS FERMENTA EL CACAO?'
    },
    almacenaCacaoDespSecado: {
        codigo: 'CM01_ALM',
        pregunta: '¿ALMACENA EL CACAO DESPUES DEL SECADO?'
    },
    tiempoAlmacenadoCacao: {
        codigo: 'CM02_TALM',
        pregunta: 'POR CUANTO TIEMPO'
    },
    propiedadTransporte: {
        codigo: 'CM03_TRANS',
        pregunta: 'PROPIEDAD DEL TRANSPORTE'
    },
    tipoTransporte: {
        codigo: 'CM04_TTRAN',
        pregunta: 'TIPO DEL TRANSPORTE'
    },
    registroFinancieroFinca: {
        codigo: 'RGP01_RG',
        pregunta: '¿CUENTA CON UN REGISTRO DE COSTOS, GASTOS Y ACTIVIDADES DE LA FINCA?'
    },
    tipoRegistrosFinancierosFinca: {
        codigo: 'RGP07_PRM',
        pregunta: '¿QUÉ PARÁMETRO UTILIZA PARA CONTROLAR LOS RESULTADOS DE LAS ACTIVIDADES DE SU FINCA?'
    },
    perteneceAsocProgrCertif: {
        codigo: 'ASO01_PRO',
        pregunta: 'PERTENECE A UNA ORGANIZACIÓN / PROGRAMA / CERTIFICACION DE CACAO'
    },
    nombreAsociacion: {
        codigo: 'ASO02_NPRO',
        pregunta: 'NOMBRE DEL PROGRAMA, ASOCIACION, ETC'
    },
    cantidadMiembros: {
        codigo: 'ASO03_NMIEM',
        pregunta: 'CUANTOS MIEMBROS TIENE DICHA ASOCIACION'
    },
    recibeBeneficios: {
        codigo: 'ASO04_BENEF',
        pregunta: 'RECIBE BENEFICIOS O PROYECTOS DE DESARROLLO DE LA MISMA'
    },
    tiposBeneficios: {
        codigo: 'ASO05_TIPBENEF',
        pregunta: 'QUÉ TIPO DE BENEFICIOS'
    },
    ayudaOtraInstitucion: {
        codigo: 'ASO14_OTRI',
        pregunta: 'RECIBE AYUDA DE ALGUNA OTRA INSTITUCIÓN?'
    },
    nombreOtraInstitucion: {
        codigo: 'ASO15_NINST',
        pregunta: 'NOMBRE DE INSTITUCIÓN'
    },
    tipoAyuda: {
        codigo: 'ASO16_AYUI',
        pregunta: 'TIPO DE AYUDA'
    },
    contrataTrabajadores: {
        codigo: 'LBS01_TRAB',
        pregunta: '¿CONTRATA TRABAJADORES?'
    },
    cantidadTrabajadores: {
        codigo: 'LBS02_NTRAB',
        pregunta: '¿CUÁNTOS TRABAJADORES?'
    },
    areaInicialContrato: {
        codigo: 'LBS03_ARTR',
        pregunta: '¿A PARTIR DE QUÉ CANTIDAD DE ÁREA CONTRATA?'
    },
    tipoContratoTrabajo: {
        codigo: 'LBS04_TTRAB',
        pregunta: 'LOS TRABAJADORES QUE CONTRATA SON'
    },
    contrataMenoresEdad: {
        codigo: 'LBS05_MED',
        pregunta: '¿CONTRATA TRABAJADORES MENORES DE 18 AÑOS?'
    },
    poseePermiso: {
        codigo: 'LBS12_MEDAD',
        pregunta: 'EN CASO DE SI, ¿CUENTA CON UN PERMISO DE TRABAJO PARA MENOR DE EDAD?'
    },
    baseContratoAgricola: {
        codigo: 'LBS06_CONT',
        pregunta: '¿CUMPLE UD. CON LA BASE DEL CONTRATO AGRICOLA POR UN DIA PARA EL CONTRATO DE SU PERSONAL DE TEMPORADA?'
    },
    energiaElectrica: {
        codigo: 'SBA01_EE',
        pregunta: 'CUENTA CON ENERGIA ELECTRICA'
    },
    tipoAguaConsumoFamiliar: {
        codigo: 'SBA02_CAG',
        pregunta: 'EL AGUA PARA CONSUMO FAMILIAR Y PREPARACION DE ALIMENTO ES'
    },
    conocimientoManejoDesechos: {
        codigo: 'HDE06_MDE',
        pregunta: '¿TIENE UD. CONOCIMIENTO SOBRE EL MANEJO DE DESECHOS?'
    },
    productoContaminaEcosistema: {
        codigo: 'HDE07_CONT',
        pregunta: 'EL PRODUCTOR CONTAMINA ECOSISTEMAS ACUATICOS O TERRESTRES'
    },
    ubicacionDesechosAguasNegras: {
        codigo: 'HDE08_UBIDES',
        pregunta: '¿DÓNDE SE VIERTEN LAS AGUAS NEGRAS Y LOS DESECHOS LIQUIDOS?'
    },
    tieneArbolesSombrio: {
        codigo: 'BIO03_SOMB',
        pregunta: '¿EL PRODUCTOR TIENE ARBOLES DE SOMBRIO?'
    },
    cultivaVegetalesHortalizasFrutas: {
        codigo: 'BIO13_OCUL',
        pregunta: 'ADICIONAL AL CACAO, ¿DESTINA UD. ESPACIO PARA CULTIVO DE VEGETALES, HORTALIZAS Y FRUTAS DE AUTOCONSUMO?'
    },
    compraProductosMercadoLocales: {
        codigo: 'BIO14_MERC',
        pregunta: 'COMPRA UD. ESTOS PRODUCTOS EN MERCADO LOCALES'
    },
    valorPromedioGastado: {
        codigo: 'BIO15_GAST',
        pregunta: '¿CUÁL ES EL VALOR QUE GASTA SEMANALMENTE EN COMPRA DE ESTOS PRODUCTOS?'
    },
    recibirPlantasCacaoNacional: {
        codigo: 'PRO01_PLACN',
        pregunta: 'RECIBIR PLANTAS DE CACAO NACIONAL'
    },
    aprenderElabProductosNaturales: {
        codigo: 'PRO07_PNAT',
        pregunta: 'APRENDER ELAB. PRODUCTOS NATURALES'
    },
    bandejasCajonesFermentacion: {
        codigo: 'PRO08_FERM',
        pregunta: 'BANDEJAS O CAJONES DE FERMENTACION '
    },
    dispuestoHacerloPropiaCuenta: {
        codigo: 'PRO10_PROP',
        pregunta: 'ESTÁ DISPUESTO A HACERLO POR SU PROPIA CUENTA'
    },
    tendalesElevadosCania: {
        codigo: 'PRO09_TEND',
        pregunta: 'TENDALES ELEVADOS DE CAÑA'
    },
    secadorasComunitarias: {
        codigo: 'PRO11_SECC',
        pregunta: 'SECADORAS COMUNITARIAS'
    },
    contarAgrupacionParaProyecto: {
        codigo: 'PRO12_AGRUP',
        pregunta: 'CUENTA CON AGRUPACION/VECINOS PARA TRABAJAR EN EL PROYECTO'
    },
    huertosOrganicos: {
        codigo: 'PRO13_HUER',
        pregunta: 'HUERTOS ORGANICOS'
    },
    desarrolloViveros: {
        codigo: 'PRO14_VIV',
        pregunta: 'DESARROLLO DE VIVEROS'
    },
    desarrolloVentaFertilizantes: {
        codigo: 'PRO15_VFER',
        pregunta: 'DESARROLLO Y VENTA DE FERTILIZANTES'
    },
    rehabilitacionFinca: {
        codigo: 'PRO17_REHB',
        pregunta: 'REHABILITACIÓN DE FINCA'
    },
    brigadaPodadores: {
        codigo: 'PRO18_BRIG',
        pregunta: 'BRIGADA DE PODADORES'
    },
    contarExperienciaPoda: {
        codigo: 'PRO19_EXPP',
        pregunta: 'CUENTA CON EXPERIENCIA EN PODA'
    },
    aniosExperiencia: {
        codigo: 'PRO20_AEXP',
        pregunta: 'AÑOS DE EXPERIENCIA EN PODA'
    },
    tieneAreaLibreParaSembrar: {
        codigo: 'PRO02_HALB',
        pregunta: 'TIENE AREA LIBRE PARA SEMBRAR'
    },
    areaLibre: {
        codigo: 'PRO03_NHA',
        pregunta: 'CUANTO HAY DE AREA LIBRE'
    },
    necesitaRehaReinjerto: {
        codigo: 'PRO04_REHAB',
        pregunta: 'NECESIDAD REHAB. / REINJERTO'
    },
    cantidad: {
        codigo: 'PRO05_NREHB',
        pregunta: 'CUANTO NECESITA'
    }
}