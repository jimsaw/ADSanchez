import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, DocumentData, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Database } from 'src/app/interfaces/database';
import { Formulario } from 'src/app/interfaces/formulario';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { KeymapperService } from '../keymapper/keymapper.service';

@Injectable({
  providedIn: 'root'
})
export abstract class FormularioService implements Database<Formulario> {

  constructor(
    private firebaseObj: AngularFirestore,
    private keyMapperObj: KeymapperService
  ) { }

  abstract list(): Observable<Formulario[]>;

  abstract set(item: Formulario): Promise<void>;

  abstract delete(item: Formulario): Promise<string>;

  protected writeSections(docRef: DocumentReference, formulario: Formulario, transaction: any) {
    const seccionesCollRef = docRef.collection("secciones");
    for (let section of Object.keys(formulario["secciones"])) {
      transaction.set(seccionesCollRef.doc(section), { id: section });
      const questionsRef = seccionesCollRef.doc(section).collection("preguntas");
      if (formulario["secciones"][section]["preguntas"] != undefined) {
        for (let question of Object.keys(formulario["secciones"][section]["preguntas"])) {
          this.writeQuestions(question, formulario["secciones"][section]["preguntas"], questionsRef, transaction);
        }
      }
      if (formulario["secciones"][section]["secciones"] != undefined) {
        const lastObject = formulario["secciones"][section]
        this.writeSections(seccionesCollRef.doc(section), lastObject, transaction);
      }
    }
  }

  private writeQuestions(question: string, lastObject: any, lastCollectionRef: CollectionReference, transaction: any) {
    for (let response of Object.keys(lastObject[question])) {
      if (response === "respuesta") {
        transaction.set(lastCollectionRef.doc(question), {
          id: question,
          pregunta: question,
          respuesta: lastObject[question][response] === undefined ? "" : lastObject[question][response]
        });
      } else if (response === "preguntas") {
        const newCollectionRef = lastCollectionRef.doc(question).collection("preguntas");
        const newLastObject = lastObject[question][response];
        for (let question in newLastObject) {
          this.writeQuestions(question, newLastObject, newCollectionRef, transaction);
        }
      } else if (response === "arreglo") {
        transaction.set(lastCollectionRef.doc(question), {
          id: question,
          arreglo: lastObject[question][response]
        });
        const objetosRef = lastCollectionRef.doc(question).collection("objetos");
        const arreglo = lastObject[question][response];
        for (let numeroPregunta of Object.keys(arreglo)) {
          const newLastObject = arreglo[numeroPregunta];
          transaction.set(objetosRef.doc(numeroPregunta), { id: numeroPregunta });
          const newCollectionRef = objetosRef.doc(numeroPregunta).collection("preguntas");
          for (let questInArray in newLastObject) {
            this.writeQuestions(questInArray, newLastObject, newCollectionRef, transaction);
          }
        }
      }
    }
  }

  protected async fetchSections(formulario: FormularioLineaBase) {
    const initialCollRef = this.firebaseObj.firestore.collection(`formulariosLineaBase/${formulario.id}/secciones`);
    try {
      const secciones = await initialCollRef.get();
      for (const seccion of secciones.docs) {
        const seccionData = seccion.data();
        const preguntasCollectionRef = initialCollRef.doc(seccionData["id"]).collection("preguntas");
        const preguntasCollection = await preguntasCollectionRef.get();
        for (const pregunta of preguntasCollection.docs) {
          const preguntaData = pregunta.data();
          await this.fetchQuestions(preguntaData, formulario["secciones"][seccionData["id"]]["preguntas"], preguntasCollectionRef);
        }
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }


  private async fetchQuestions(data: any, lastObject: any, lastCollectionRef: CollectionReference) {
    const question = data["id"];
    if (lastObject[question] !== undefined) {
      for (let response of Object.keys(lastObject[question])) {
        if (response === "respuesta") {
          lastObject[question][response] = data["respuesta"];
        } else if (response === "preguntas") {
          const newCollectionRef = lastCollectionRef.doc(question).collection("preguntas");
          const newLastObject = lastObject[question][response];
          try {
            const preguntas = await newCollectionRef.get();
            for (const pregunta of preguntas.docs) {
              const preguntaData = pregunta.data();
              await this.fetchQuestions(preguntaData, newLastObject, newCollectionRef);
            }
          } catch (e) {
            console.log(e);
            throw e;
          }
        } else if (response === "arreglo") {
          lastObject[question][response] = data["arreglo"]
        }
      }
    }
  }

  protected async deleteSections(seccionCollRef: CollectionReference, transaction: any) {
    const secciones = (await seccionCollRef.get()).docs;
    for (let seccion of secciones) {
      const id = seccion.data()["id"];
      const seccionRef = seccionCollRef.doc(id);
      const questions = (await seccionRef.collection("preguntas").get()).docs;
      for (let question of questions) {
        await this.deleteQuestions(question.data(), seccionRef.collection('preguntas'), transaction);
      }
      await this.deleteSections(seccionRef.collection("secciones"), transaction);
      transaction.delete(seccionRef);
    }
  }

  private async deleteQuestions(data: any, lastRef: CollectionReference, transaction: any) {
    const question = data["id"];
    const questionRef = lastRef.doc(question);
    const newQuestions = (await questionRef.collection("preguntas").get()).docs;
    for (const newQuestion of newQuestions) {
      await this.deleteQuestions(newQuestion.data(), questionRef.collection("preguntas"), transaction);
    }
    transaction.delete(questionRef)
  }

}
