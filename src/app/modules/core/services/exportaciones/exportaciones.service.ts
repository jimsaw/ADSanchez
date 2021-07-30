import { Injectable } from '@angular/core';
import { formularioLineaBaseMapper } from 'src/environments/mappers/formularioLineaBase';
import { saveAs } from "file-saver";
import { Formulario, FormularioType } from 'src/app/interfaces/formulario';
import { formularioVerificacionMapper } from 'src/environments/mappers/formularioVerificacion';

@Injectable({
  providedIn: 'root'
})
export class ExportacionesService {

  constructor() { }

  async exportFormulario(formulario: Formulario, formularioType: FormularioType): Promise<boolean> {
    let dataFormulario = await this.prepareOneDataRecursive(formulario);
    let header = this.mapHeader(dataFormulario, formularioType);
    let arrayDataFormulario = [dataFormulario];

    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const headerData = Object.keys(dataFormulario);
    const title = 'Formulario Individual Linea Base Exportado a CSV';
    let csv = arrayDataFormulario.map(row => headerData.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));

    csv.unshift(header.join(','));
    csv.unshift(title);
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, `${formularioType}_${formulario["id"]}.csv`);
    return true;
  }

  async exportarAllFormularios(formularios: Formulario[], formularioType: FormularioType): Promise<boolean> {
    let dataFormulario = await this.prepareAllDataRecursive(formularios);
    //console.log(dataFormulario);
    let indiceMaximo = this.maxFormularioKeys(dataFormulario);
    let header = this.mapHeader(dataFormulario[indiceMaximo], formularioType);

    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const headerData = Object.keys(dataFormulario[indiceMaximo]);
    const title = 'Formulario Completo Linea Base Exportado a CSV';
    let csv = dataFormulario.map(row => headerData.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));

    csv.unshift(header.join(','));
    csv.unshift(title);
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, `${formularioType}_TODOS.csv`);
    return true;
  }

  private mapHeader(object: Object, formularioType: FormularioType) {
    const formularioMapperBlank = this.pickMapper(formularioType)
    const header = Object.keys(object);
    let arrayHeaders = [];
    for (let key of header) {
      if (formularioMapperBlank[key] !== undefined) {
        arrayHeaders.push(formularioMapperBlank[key].codigo);
      } else if (key === 'id' || key === 'agricultor' || key === 'agricultorId' || key === 'tecnicoId' || key === 'tecnico' || key === 'fechaVisita') {
        arrayHeaders.push(key.toUpperCase());
      } else {
        //Usar el mapper
        let dinamicKey = formularioMapperBlank[key.slice(0, -1)].codigo + key.slice(-1);
        //let dinamicKey = this.createDinamicKey(key.slice(0, -1)) + key.slice(-1);
        arrayHeaders.push(dinamicKey);
      }
    }
    return arrayHeaders;
  }

  private pickMapper(formularioType: FormularioType): any {
    let formularioMapperBlank: any;
    switch (formularioType) {
      case FormularioType.formularioLineaBase:
          formularioMapperBlank = formularioLineaBaseMapper;
          break;
      case FormularioType.formularioVerificacion:
          formularioMapperBlank = formularioVerificacionMapper;
          break;
      default:
          break;
    }
    return formularioMapperBlank;
  }

  private maxFormularioKeys(listaFormularios: any[]) {
    let arrayCantidadKeys = []
    for (let value of listaFormularios) {
      arrayCantidadKeys.push(Object.keys(value).length);
    }
    let maxKeys = Math.max(...arrayCantidadKeys);
    let indx = arrayCantidadKeys.indexOf(maxKeys);
    return indx;
  }

  private async prepareAllDataRecursive(formularios: Formulario[]): Promise<any[]> {
    let dataFormulario = [];
    for (let formulario of formularios) {
      const element = {
        id: formulario["id"],
        agricultorId: formulario["agricultor"]["id"],
        agricultor: formulario["agricultor"]["nombre"],
        tecnicoId: formulario["tecnico"]["id"],
        tecnico: formulario["tecnico"]["nombre"],
        fechaVisita: formulario["fechaVisita"],
        };
      let objSeccion = formulario["secciones"];
      for (let nombreSeccion in objSeccion) {
        this.planObjectRecursive(objSeccion[nombreSeccion], element);
      }
      dataFormulario.push(element);
    }
    return dataFormulario
  }

  private planObjectRecursive(object: Object, element: Object) {
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
    for (let nombreSeccion in object['secciones']) {
      let newSeccionObj = object['secciones'][nombreSeccion];
      this.planObjectRecursive(newSeccionObj, element);
    }
  }

  private async prepareOneDataRecursive(formulario: Formulario) {
    const dataFormulario = {
      id: formulario["id"],
      agricultorId: formulario["agricultor"]["id"],
      agricultor: formulario["agricultor"]["nombre"],
      tecnicoId: formulario["tecnico"]["id"],
      tecnico: formulario["tecnico"]["nombre"],
      fechaVisita: formulario["fechaVisita"],
    };
    let objSeccion = formulario["secciones"];
    for (let nombreSeccion in objSeccion) {
      this.planObjectRecursive(objSeccion[nombreSeccion], dataFormulario);
    }
    return dataFormulario;
  }

}
