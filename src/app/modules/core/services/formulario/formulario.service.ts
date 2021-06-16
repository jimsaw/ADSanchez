import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
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

  writeQuestion(question: string, lastObject: any, lastCollectionRef: CollectionReference, transaction: any) {
    for (let response of Object.keys(lastObject[question])) {
      if (response === "respuesta") {
        transaction.set(lastCollectionRef.doc(question), {
          id: question,
          pregunta: this.keyMapperObj.getQuestionDescription(question),
          respuesta: lastObject[question][response] === undefined ? "" : lastObject[question][response]
        })
      } else if (response === "preguntas") {
        const newCollectionRef = lastCollectionRef.doc(question).collection("preguntas");
        const newLastObject = lastObject[question][response];
        for (let question in newLastObject) {
          this.writeQuestion(question, newLastObject, newCollectionRef, transaction);
        }
      }
    }
  }

  saveFormularioLineaBase(agriculorId: string, formularioLineaBase: FormularioLineaBase, date: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const agricultorDocRef = this.firebaseObj.firestore.collection("agricultores").doc(agriculorId);
      this.firebaseObj.firestore.runTransaction((transaction) => {
        return transaction.get(agricultorDocRef).then((agricultorDoc) => {
          if (!agricultorDoc.exists) {
            reject("ERROR: DOCUMENT DOESN'T EXIST");
          }
          const formularioCollRef = agricultorDocRef.collection("formulariosDeLineaBase");
          const formularioId = this.firebaseObj.createId();
          const formularioDocRef = formularioCollRef.doc(formularioId);
          transaction.set(formularioDocRef, {id: formularioId, fecha: date});
          const seccionesCollRef = formularioDocRef.collection("secciones");
          for (let section of Object.keys(formularioLineaBase["secciones"])) {
            transaction.set(seccionesCollRef.doc(section), {id: section});
            const questionsRef = seccionesCollRef.doc(section).collection("preguntas");
            for (let question of Object.keys(formularioLineaBase["secciones"][section]["preguntas"])) {
              this.writeQuestion(question, formularioLineaBase["secciones"][section]["preguntas"], questionsRef, transaction);
            }
          }
        });
      }).then(() => {
        resolve("OK");
      }).catch((error) => {
        reject(error);
      });
    });
  }

  saveFormInCollection(formularioLineaBase: FormularioLineaBase): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const collRef = this.firebaseObj.firestore.collection("formulariosLineaBase");
      this.firebaseObj.firestore.runTransaction((transaction) => {
        return new Promise((resolve, reject) => {
          if (formularioLineaBase.id === '' || formularioLineaBase.id === undefined) {
            formularioLineaBase.id = this.firebaseObj.createId();
          }
          const docRef = collRef.doc(formularioLineaBase.id);
          transaction.set(docRef, {
            id: formularioLineaBase.id,
            agricultorId: formularioLineaBase.agricultor.id,
            agricultor: formularioLineaBase.agricultor.nombre,
            fechaVisita: formularioLineaBase.fechaVisita,
            tecnico: formularioLineaBase.tecnico.nombre
          });
          const seccionesCollRef = docRef.collection("secciones");
          for (let section of Object.keys(formularioLineaBase["secciones"])) {
            transaction.set(seccionesCollRef.doc(section), {id: section});
            const questionsRef = seccionesCollRef.doc(section).collection("preguntas");
            for (let question of Object.keys(formularioLineaBase["secciones"][section]["preguntas"])) {
              this.writeQuestion(question, formularioLineaBase["secciones"][section]["preguntas"], questionsRef, transaction);
            }
          }
          resolve("OK");
        });
      }).then(() => {
        resolve("COLLECION GUARDADA");
      }).catch((e) => {
        console.log(e);
        reject(e);
      });
    });
  }

}
