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

    let dataFormulario = await this.prepareOneDataRecursive(id);
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

    let dataFormulario = await this.prepareAllDataRecursive();
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

  async prepareAllDataRecursive(): Promise<any[]> {
    let listaFormularios = await this.formularioLineaBaseService.getAllFormularios();
    let dataFormulario = [];
    for (let formulario of listaFormularios) {
      const element = {
        id: formulario.id,
        agricultor: formulario.agricultor,
        tecnico: formulario.tecnico,
        fechaVisita: formulario.fechaVisita,
      };
      let objSeccion = formulario.secciones;
      for (let nombreSeccion in objSeccion) {
        this.planObjectRecursive(objSeccion[nombreSeccion], element);
      }
      dataFormulario.push(element);
    }
    //console.log(dataFormulario);
    return dataFormulario
  }

  planObjectRecursive(object: Object, element: Object) {
    for (let nombrePregunta in object['preguntas']) {
      if (Array.isArray(object['preguntas'][nombrePregunta]['respuesta'])) {
        let arrayString = object['preguntas'][nombrePregunta]['respuesta'].toString();
        element[nombrePregunta] = arrayString;
      } else {
        element[nombrePregunta] = object['preguntas'][nombrePregunta]['respuesta'];
      }
      if (object['preguntas'][nombrePregunta]['preguntas'] !== undefined) {
        this.planObjectRecursive(object['preguntas'][nombrePregunta], element);
      }
    }
  }

  async prepareOneDataRecursive(id: string) {
    let formularioLineaBaseParam = await this.formularioLineaBaseService.get(id);
    const dataFormulario =
    {
      id: formularioLineaBaseParam.id,
      agricultor: formularioLineaBaseParam.agricultor,
      tecnico: formularioLineaBaseParam.tecnico,
      fechaVisita: formularioLineaBaseParam.fechaVisita,
    };
    let objSeccion = formularioLineaBaseParam.secciones;
    for (let nombreSeccion in objSeccion) {
      this.planObjectRecursive(objSeccion[nombreSeccion], dataFormulario);
    }
    //console.log(dataFormulario);
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
