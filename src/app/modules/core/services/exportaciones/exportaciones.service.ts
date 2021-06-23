import { Injectable } from '@angular/core';
import { FormularioLineaBaseService } from '../formularioLineaBase/formulario-linea-base.service';
import { formularioLineaBaseMapper } from 'src/environments/mappers/formularioLineaBase';
import { saveAs } from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class ExportacionesService {

  constructor(private formularioLineaBaseService: FormularioLineaBaseService) { }

  async exportarFormularioById(formulario: string, id: string): Promise<boolean> {
    let headersSeccion = this.getCodigoHeader();
    let header = ['ID', 'AGRICULTOR', 'TECNICO', 'FECHA VISITA'];
    let headerFinal = header.concat(headersSeccion);
    let dataFormulario = await this.prepareOneData(id);
    let arrayDataFormulario = [dataFormulario];

    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header2 = Object.keys(dataFormulario);
    const title = 'Formulario Individual Linea Base Exportado a CSV';
    let csv = arrayDataFormulario.map(row => header2.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));

    csv.unshift(headerFinal.join(','));
    csv.unshift(title);
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, "archivoExportadoOne.csv");
    return true;
  }

  async exportarAllFormularios(formulario: string): Promise<boolean> {
    let headersSeccion = this.getCodigoHeader();
    let header = ['ID', 'AGRICULTOR', 'TECNICO', 'FECHA VISITA'];
    let headerFinal = header.concat(headersSeccion);

    let dataFormulario = await this.prepareAllData();
    //console.log(dataFormulario);

    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header2 = Object.keys(dataFormulario[0]);
    const title = 'Formulario Completo Linea Base Exportado a CSV';
    let csv = dataFormulario.map(row => header2.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));

    csv.unshift(headerFinal.join(','));
    csv.unshift(title);
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, "archivoExportadoComplete.csv");
    return true;
  }

  async prepareAllData(): Promise<any[]> {
    let formularioLineaBaseMapperBlank = formularioLineaBaseMapper;
    let headerSecciones = Object.keys(formularioLineaBaseMapperBlank);
    let listaFormularios = await this.formularioLineaBaseService.getAllFormularios();
    //console.log(listaFormularios);
    let dataFormulario = [];
    for (let formulario of listaFormularios) {
      //console.log(formulario);
      const element = {
        id: formulario.id,
        agricultor: formulario.agricultor,
        tecnico: formulario.tecnico,
        fechaVisita: formulario.fechaVisita,
      }

      let objtSecciones = formulario.secciones;
      //console.log(objt);
      let nombreSeccion: keyof typeof objtSecciones;
      for (nombreSeccion in objtSecciones) {
        let objtPreguntas = objtSecciones[nombreSeccion].preguntas;
        for (let nombrePregunta in objtPreguntas) {
          let nombreSeccionMapper: keyof typeof headerSecciones;
          for (nombreSeccionMapper in headerSecciones) {
            if (headerSecciones[nombreSeccionMapper] === nombrePregunta) {
              if (Array.isArray(objtPreguntas[headerSecciones[nombreSeccionMapper]]['respuesta'])) {
                let arrayString = objtPreguntas[headerSecciones[nombreSeccionMapper]]['respuesta'].toString();
                element[headerSecciones[nombreSeccionMapper]] = arrayString;
              } else {
                element[headerSecciones[nombreSeccionMapper]] = objtPreguntas[headerSecciones[nombreSeccionMapper]]['respuesta'];
              }
              if (objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'] !== undefined) {
                //console.log(objt2[headerSecciones[y]]['preguntas']);
                for (let subPregunta1 in objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas']) {
                  if (Array.isArray(objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].respuesta)) {
                    let arrayString2 = objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].respuesta.toString();
                    element[subPregunta1] = arrayString2;
                  } else {
                    element[subPregunta1] = objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].respuesta;
                  }
                  if (objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas !== undefined) {
                    //console.log(objt2[headerSecciones[y]]['preguntas'][w].preguntas);
                    for (let subPregunta2 in objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas) {
                      if (Array.isArray(objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas[subPregunta2].respuesta)) {
                        let arrayString2 = objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas[subPregunta2].respuesta.toString();
                        element[subPregunta2] = arrayString2;
                      } else {
                        element[subPregunta2] = objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas[subPregunta2].respuesta;
                      }
                      if (objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas[subPregunta2].preguntas !== undefined) {
                        console.log('Alcanzado nivel 3 recursivo');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      dataFormulario.push(element);
    }
    //console.log(dataFormulario);
    return dataFormulario;
  }

  async prepareOneData(id: string): Promise<any> {
    let formularioLineaBaseParam = await this.formularioLineaBaseService.get(id);
    let formularioLineaBaseMapperBlank = formularioLineaBaseMapper;
    let headerSecciones = Object.keys(formularioLineaBaseMapperBlank);

    const dataFormulario =
    {
      id: formularioLineaBaseParam.id,
      agricultor: formularioLineaBaseParam.agricultor,
      tecnico: formularioLineaBaseParam.tecnico,
      fechaVisita: formularioLineaBaseParam.fechaVisita,
    };
    let objtSecciones = formularioLineaBaseParam.secciones;
    //console.log(objt);
    let nombreSeccion: keyof typeof objtSecciones;
    for (nombreSeccion in objtSecciones) {
      let objtPreguntas = objtSecciones[nombreSeccion].preguntas;
      for (let nombrePregunta in objtPreguntas) {
        let nombreSeccionMapper: keyof typeof headerSecciones;
        for (nombreSeccionMapper in headerSecciones) {
          if (headerSecciones[nombreSeccionMapper] === nombrePregunta) {
            if (Array.isArray(objtPreguntas[headerSecciones[nombreSeccionMapper]]['respuesta'])) {
              let arrayString = objtPreguntas[headerSecciones[nombreSeccionMapper]]['respuesta'].toString();
              dataFormulario[headerSecciones[nombreSeccionMapper]] = arrayString;
            } else {
              dataFormulario[headerSecciones[nombreSeccionMapper]] = objtPreguntas[headerSecciones[nombreSeccionMapper]]['respuesta'];
            }
            if (objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'] !== undefined) {
              //console.log(objt2[headerSecciones[y]]['preguntas']);
              for (let subPregunta1 in objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas']) {
                if (Array.isArray(objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].respuesta)) {
                  let arrayString2 = objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].respuesta.toString();
                  dataFormulario[subPregunta1] = arrayString2;
                } else {
                  dataFormulario[subPregunta1] = objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].respuesta;
                }
                if (objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas !== undefined) {
                  //console.log(objt2[headerSecciones[y]]['preguntas'][w].preguntas);
                  for (let subPregunta2 in objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas) {
                    if (Array.isArray(objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas[subPregunta2].respuesta)) {
                      let arrayString2 = objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas[subPregunta2].respuesta.toString();
                      dataFormulario[subPregunta2] = arrayString2;
                    } else {
                      dataFormulario[subPregunta2] = objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas[subPregunta2].respuesta;
                    }
                    if (objtPreguntas[headerSecciones[nombreSeccionMapper]]['preguntas'][subPregunta1].preguntas[subPregunta2].preguntas !== undefined) {
                      console.log('entro');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return dataFormulario;
  }

  getCodigoHeader(): string[] {
    let formularioLineaBaseMapperBlank = formularioLineaBaseMapper;
    let headersSection = [];
    Object.entries(formularioLineaBaseMapperBlank).forEach(value => {
      headersSection.push(value[1].codigo);
    });
    return headersSection;
  }

}
