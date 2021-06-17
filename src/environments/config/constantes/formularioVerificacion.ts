const yesNoAnswer = ['SI', 'NO'];
const datosFincaMotivoAreaNueva = ['EXPANSION', 'RENOVACION'];
const datosFincaUsoAreaNueva = ['BOSQUE', 'PLANTACION', 'HUERTA VIEJA', 'OTROS'];
const Meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
const manejoSueloTipoSuelo = ['FRANCO', 'ARENOSO', 'ARCILLOSO', 'LIMOSO'];
const manejoSueloManeraCorregirPH = ['QUIMICO', 'NATURAL'];
const manejoSueloTipoProductoQuimico = ['CAL AGRICOLA', 'YESO', 'CAL VIVA', 'OTROS'];
const manejoSueloTipoProductoNatural = ['ACIDOS HUMICOS', 'ENMIENDAS ORGANICAS', 'OTROS'];
const fertilizacionTipoProductoFertilizaCacaotales = ['QUIMICO', 'NATURAL', 'AMBOS'];
const vecesAlAnio = ['1 A 2 VECES', '3 A 4 VECES', '5 A 6 VECES', 'NUNCA'];
const fertilizacionTipoFertilizanteRecibido = ['EDAFICO', 'BIOESTIMULANTE', 'INSECTICIDAS', 'FOLIAR', 'CORRECTORES DE PH', 'BIOLES', 'FUNGICIDAS'];
const fertilizacionPercepcionFertilizanteRecibido = ['AUMENTA PRODUCCION', 'SE MANTIENE IGUAL', 'DISMINUYE PRODUCCION'];
const controlMalezaTipoMaleza = ['HOJA ANCHA', 'HOJA ANGOSTA'];
const controlMalezaComoControlaMaleza = ['QUIMICO', 'MECANICO/MANUAL', 'NATURAL/ORGANICO'];
const controlMalezaTipoRecomendacion = ['NO', 'TECNICO', 'EMPIRICO'];
const podaTipoPodaAplica = ['FORMACION', 'MANTENIMIENTO', 'FITOSANITARIA', 'REHABILITACION'];
const podaPlagas = ['XILEBORUS', 'CHINCHORRO', 'HORMIGA', 'OTROS'];
const podaEnfermedades = ['PHYTOPHTORA', 'MAL DE MACHETE', 'ROSELLINIA', 'OTROS'];
const mipeTipoControl = ['QUIMICO', 'MECANICO/MANUAL', 'BIOLOGICO'];
const registrosProductorEspecifiqueTipoCuenta = ['BANCO FORMAL', 'COOPERATIVA AHORRO Y CRÉDITO', 'BANCOS COMUNALES', 'OTROS'];
const fermentacionFermentaCacao = ['SIEMPRE', 'A VECES', 'NUNCA'];
const fermentacionRazonNoFermenta = ['LIMITANTE DE CLIMA', 'CARECE DE  INFRAESTRUCTURA', 'DESCONOCIMIENTO DEL TEMA', 'NECESIDAD DE LIQUIDEZ'];
const fermentacionComoHace1 = ['SACOS PLASTICO', 'TIPO LAGARTO', 'SACOS DE YUTE', 'CAJON DE MADERA', 'CAÑA PICADA', 'OTRO'];
const fermentacionComoHace2 = ['CON MEDIDAS DE HIGIENE', 'SIN MEDIDAS DE HIGIENE'];
const secadoNivelHumedad = ['50% BABA', '30% 1 SOL', '15% 2 SOLES', '13% 3 SOLES', '10% 4 SOLES', 'OTROS'];
const secadoComoRealizaSecado = ['ASFALTO', 'TENDAL CAÑA', 'TENDAL DE CEMENTO', 'MARQUESINA', 'SECADORA', 'PLASTICO NEGRO', 'PLASTICO BLANCO', 'OTRO'];
const ventaFrecuencia = ['UNA VEZ', 'DOS VECES', 'TRES O MAS VECES'];
const conservacionAguaManejoDesechosTipoExtraccion = ['GRAVEDAD', 'MECANIZADO'];
const conservacionAguaManejoDesechosInfraestructuraRiego = ['SUB-FOLIAR', 'GOTEO', 'CAÑON'];
const conservacionAguaManejoDesechosImpactoRiego = ['ALTO', 'MEDIO', 'BAJO'];
const conservacionAguaManejoDesechosDisenioRiego = ['FIJO', 'MOVIBLE'];
const conservacionAguaManejoDesechosFiltroEcologicoParaQueUso = ['LIXIVIADO DE CACAO', 'AGUAS RESIDUALES', 'RESIDUOS DE PRODUCTOS'];
const conservacionAguaManejoDesechosCriterioClasificarBasuraDomestica = ['PELIGROSO Y NO PELIGROSO', 'ORGÁNICO E INORGÁNICO', 'BIOLOGICO, PLASTICO Y VIDRIO'];
const conservacionAguaManejoDesechosTratamientoBasura = ['VENDE', 'RECOLECTA', 'REUTILIZA', 'ENTIERRA', 'QUEMA'];
const conservacionAguaManejoDesechosLugarAlmacenamiento = ['BODEGA', 'AMBIENTE', 'CASA', 'OTRO'];
const conservacionSuelosBiodiversidadPractivasConservacionSuelo = ['NO', 'COBERTURA VEGETAL', 'BARRERAS VIVAS', 'OTRAS'];
const conservacionSuelosBiodiversidadEspeciesArboles = ['LAUREL', 'FERNANSANCHEZ', 'TECA', 'GUAYACAN', 'OTRAS'];
const proteccionAreasRibereniasNombreFuenteHidrica = ['VERTIENTE 0-5 MTRS', 'ESTERO 6-10 MTRS', 'RIO 11 MTRS EN ADELANTE', 'POZO', 'OTRO'];
const proteccionAreasRibereniasTipoFuenteHidrica = ['SUPERFICIAL', 'TEMPORAL', 'ARTIFICIAL', 'SUBTERRANEA', 'PERMANENTE', 'NATURAL'];
const proteccionAreasRibereniasConsideradaFuenteHidrica = ['PRIMARIA', 'SECUNDARIA', 'TERCIARIA'];
const proteccionAreasRibereniasComoBrindaProtFuentHidr = ['CON MALEZA', 'CON ARBOLES', 'CON ARBUSTOS'];
const proteccionAreasRibereniasDistanciaRequerida = ['15 MTRS', '8 MTRS', '5 MTRS', 'OTRO'];
const proteccionAreasAltoValorTipoProblemaErosion = ['DESLIZAMIENTO LADERAS', 'HÍDRICA', 'PENDIENTES VULNERABLES', 'EÓLICA'];
const proteccionAreasAltoValorComoQuePracticas = ['OXIGENACIÓN', 'INCREMENTO DE SOMBRAS', 'OTRAS'];
const proteccionAreasAltoValorGradoPresentanPendientes = ['0 A 25', '26 A 50', '51 A 75', '76 A 100'];
const proteccionAreasAltoValorTipoAreaForestal = ['B. PRIMARIOS', 'B. SECUNDARIOS', 'PLANTACIONES', 'REMANENTE'];
const proteccionAreasAltoValorCualesEspeciesPeligroExtincion = ['VEGETAL', 'ANIMAL', 'AMBAS'];
const proteccionAreasAltoValorTipoAltoValor = ['DIVERSIDAD DE ESPECIES', 'ECOSISTEMAS A ESCALA PAISAJE', 'ECOSISTEMAS Y HABITATS', 'SERVICIOS ECOSISTEMICOS', 'NECESIDADES DE LAS COMUNIDADES', 'VALORES CULTURALES'];
const diversificacionUsoCultivoDiferenteCacao = ['VENTA', 'CONSUMO', 'AMBOS'];
const diversificacionOtraActividadDentroFincaConIngreso = ['PORCICULTURA', 'PISCICULTURA', 'APICULTURA', 'ELAB. PROD. ORGANICOS', 'VIVERO'];
const diversificacionActividadFueraFincaConIngreso = ['UNI. NEGOCIOS BIOFABRICAS', 'UNID. NEGOCIOS VIVEROS', 'BRIGADAS REHABILITACION'];
const utilidad = ['MUCHA UTILIDAD', 'UTIL', 'POCA UTILIDAD'];
const estado = ['BUENO', 'REGULAR', 'MALO'];

export const formularioVerificacion = {
    yesNoAnswer,
    datosFincaMotivoAreaNueva,
    datosFincaUsoAreaNueva,
    Meses,
    manejoSueloTipoSuelo,
    manejoSueloManeraCorregirPH,
    manejoSueloTipoProductoNatural,
    manejoSueloTipoProductoQuimico,
    fertilizacionTipoProductoFertilizaCacaotales,
    vecesAlAnio,
    fertilizacionTipoFertilizanteRecibido,
    fertilizacionPercepcionFertilizanteRecibido,
    controlMalezaTipoMaleza,
    controlMalezaComoControlaMaleza,
    controlMalezaTipoRecomendacion,
    podaTipoPodaAplica,
    podaEnfermedades,
    podaPlagas,
    mipeTipoControl,
    registrosProductorEspecifiqueTipoCuenta,
    fermentacionFermentaCacao,
    fermentacionRazonNoFermenta,
    fermentacionComoHace1,
    fermentacionComoHace2,
    secadoNivelHumedad,
    secadoComoRealizaSecado,
    ventaFrecuencia,
    conservacionAguaManejoDesechosTipoExtraccion,
    conservacionAguaManejoDesechosInfraestructuraRiego,
    conservacionAguaManejoDesechosImpactoRiego,
    conservacionAguaManejoDesechosDisenioRiego,
    conservacionAguaManejoDesechosFiltroEcologicoParaQueUso,
    conservacionAguaManejoDesechosCriterioClasificarBasuraDomestica,
    conservacionAguaManejoDesechosTratamientoBasura,
    conservacionAguaManejoDesechosLugarAlmacenamiento,
    conservacionSuelosBiodiversidadPractivasConservacionSuelo,
    conservacionSuelosBiodiversidadEspeciesArboles,
    proteccionAreasRibereniasNombreFuenteHidrica,
    proteccionAreasRibereniasTipoFuenteHidrica,
    proteccionAreasRibereniasConsideradaFuenteHidrica,
    proteccionAreasRibereniasComoBrindaProtFuentHidr,
    proteccionAreasRibereniasDistanciaRequerida,
    proteccionAreasAltoValorTipoProblemaErosion,
    proteccionAreasAltoValorComoQuePracticas,
    proteccionAreasAltoValorGradoPresentanPendientes,
    proteccionAreasAltoValorTipoAreaForestal,
    proteccionAreasAltoValorCualesEspeciesPeligroExtincion,
    proteccionAreasAltoValorTipoAltoValor,
    diversificacionUsoCultivoDiferenteCacao,
    diversificacionOtraActividadDentroFincaConIngreso,
    diversificacionActividadFueraFincaConIngreso,
    utilidad,
    estado
}