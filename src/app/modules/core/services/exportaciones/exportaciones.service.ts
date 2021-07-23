import { Injectable } from '@angular/core';
import { FormularioLineaBaseService } from '../formularioLineaBase/formulario-linea-base.service';
import { formularioLineaBaseMapper } from 'src/environments/mappers/formularioLineaBase';
import { saveAs } from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class ExportacionesService {

  constructor(
    private formularioLineaBaseService: FormularioLineaBaseService
  ) { }

  mapHeader(object: Object) {
    const header = Object.keys(object);
    let arrayHeaders = [];
    let formularioLineaBaseMapperBlank = formularioLineaBaseMapper;
    for (let key of header) {
      if (formularioLineaBaseMapperBlank[key] !== undefined) {
        arrayHeaders.push(formularioLineaBaseMapperBlank[key].codigo);
      } else if (key === 'id' || key === 'agricultor' || key === 'tecnico' || key === 'fechaVisita') {
        arrayHeaders.push(key.toUpperCase());
      } else {
        //Usar el mapper
        let dinamicKey = formularioLineaBaseMapperBlank[key.slice(0, -1)].codigo + key.slice(-1);
        //let dinamicKey = this.createDinamicKey(key.slice(0, -1)) + key.slice(-1);
        arrayHeaders.push(dinamicKey);
      }
    }
    return arrayHeaders;
  }

  maxFormularioKeys(listaFormularios: any[]) {
    let arrayCantidadKeys = []
    for (let value of listaFormularios) {
      arrayCantidadKeys.push(Object.keys(value).length);
    }
    let maxKeys = Math.max(...arrayCantidadKeys);
    let indx = arrayCantidadKeys.indexOf(maxKeys);
    return indx;
  }

  async exportarFormularioById(id: string): Promise<boolean> {
    let dataFormulario = await this.prepareOneDataRecursive(id);
    //console.log(dataFormulario);
    let header = this.mapHeader(dataFormulario);
    let arrayDataFormulario = [dataFormulario];

    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const headerData = Object.keys(dataFormulario);
    const title = 'Formulario Individual Linea Base Exportado a CSV';
    let csv = arrayDataFormulario.map(row => headerData.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));

    csv.unshift(header.join(','));
    csv.unshift(title);
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, "archivoExportadoOne.csv");
    return true;
  }

  async exportarAllFormularios(formulario: string): Promise<boolean> {
    let dataFormulario = await this.prepareAllDataRecursive();
    //console.log(dataFormulario);
    let indiceMaximo = this.maxFormularioKeys(dataFormulario);
    let header = this.mapHeader(dataFormulario[indiceMaximo]);

    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const headerData = Object.keys(dataFormulario[indiceMaximo]);
    const title = 'Formulario Completo Linea Base Exportado a CSV';
    let csv = dataFormulario.map(row => headerData.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));

    csv.unshift(header.join(','));
    csv.unshift(title);
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, "archivoExportadoComplete.csv");
    return true;
  }

  async prepareAllDataRecursive(): Promise<any[]> {
    let listaFormularios = await this.formularioLineaBaseService.getAllFormulariosDict();
    let dataFormulario = [];
    for (let formulario of listaFormularios) {
      const element = {
        id: formulario.id,
        agricultor: formulario.agricultor.nombre,
        tecnico: formulario.tecnico.nombre,
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
      } else if (object['preguntas'][nombrePregunta]['arreglo'] !== undefined) {
        //arreglo miembro
        let contador = 1;
        for (let objDinamico of object['preguntas'][nombrePregunta]['arreglo']) {
          //Variable dentro de cada miembro
          for (let keyObjetoDinamico in objDinamico) {
            //console.log(value2 + contador, value[value2]);
            element[keyObjetoDinamico + contador] = objDinamico[keyObjetoDinamico]['respuesta'];
          }
          contador++;
        }
      } else {
        element[nombrePregunta] = object['preguntas'][nombrePregunta]['respuesta'];
      }
      if (object['preguntas'][nombrePregunta]['preguntas'] !== undefined) {
        this.planObjectRecursive(object['preguntas'][nombrePregunta], element);
      }
    }
  }

  async prepareOneDataRecursive(id: string) {
    let formularioLineaBaseParam = await this.formularioLineaBaseService.getDiccionario(id);
    const dataFormulario = {
      id: formularioLineaBaseParam.id,
      agricultor: formularioLineaBaseParam.agricultor.nombre,
      tecnico: formularioLineaBaseParam.tecnico.nombre,
      fechaVisita: formularioLineaBaseParam.fechaVisita,
    };
    let objSeccion = formularioLineaBaseParam.secciones;
    for (let nombreSeccion in objSeccion) {
      this.planObjectRecursive(objSeccion[nombreSeccion], dataFormulario);
    }
    //console.log(dataFormulario);
    return dataFormulario;
  }

}
