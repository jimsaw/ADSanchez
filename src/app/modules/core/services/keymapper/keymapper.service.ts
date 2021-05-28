import { Injectable, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { map } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import { formularioLineaBaseMapper } from 'src/environments/mappers/formularioLineaBase';

@Injectable({
  providedIn: 'root'
})
export class KeymapperService {

  constructor() { }

  public keyMapper(dataInterface: Object, dataMapper: Object): Object {
    let result;
    if (Object.entries(dataInterface).length == 1) {
      console.log('Es para formulario');
      result = new Object;
      Object.keys(dataMapper).forEach(function (value) {
        // Objeto categoria
        //console.log(Object.entries(Object.entries(dataInterface)[0][1]));
        let categoria = Object.entries(Object.entries(dataInterface)[0][1]);
        categoria.forEach(function (indice) {
          // Objeto preguntas
          //console.log(Object.entries(indice[1]['preguntas']));
          let preguntas = Object.entries(indice[1]['preguntas']);
          preguntas.forEach(function (contenido) {
            //console.log(value);
            if (contenido[0] == value) {
              // Objeto con la key mapeada
              // Falta darle la estructura del interface con las secciones, categorias y preguntas
              // Falta hacerlo recursivo para las preguntas dentro de otra pregunta
              result[dataMapper[value].codigo] = contenido[1]['respuesta'];
            }
          })
        });
      });
    } else {
      console.log('Es para agricultor');
      result = new Object;
      Object.keys(dataMapper).forEach(function (value) {
        result[dataMapper[value].codigo] = dataInterface[value];
      });
    }
    console.log(result);
    console.log(Object.keys(result).length);
    return result;
  }

  public getQuestionCode(question: string): string {
    const code = formularioLineaBaseMapper[question]["codigo"]
    if (code === "") {
      return "NO CODE";
    }
    return code;
  }

  public getQuestionDescription(question: string): string {
    const  text = formularioLineaBaseMapper[question]["pregunta"];
    if (text === "") {
      return "NO TEXT";
    }
    return text;
  }

}
