import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { rejects } from 'assert';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { KeymapperService } from '../keymapper/keymapper.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(
    private db: AngularFirestore,
    private keyMapper: KeymapperService
  ) { }


  writeQuestion(question: string, lastObject: any, lastCollectionRef: CollectionReference, transaction: any) {
    for (let response of Object.keys(lastObject[question])) {
      if (response === "respuesta") {
        transaction.set(lastCollectionRef.doc(this.keyMapper.getQuestionCode(question)), {
          id: this.keyMapper.getQuestionCode(question),
          pregunta: this.keyMapper.getQuestionDescription(question),
          respuesta: lastObject[question][response]
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

  saveFormularioLineaBase(agriculorId: string, formularioLineaBase: FormularioLineaBase, date: string) {
    return new Promise((resolve, reject) => {
      const agricultorDocRef = this.db.firestore.collection("agricultores").doc(agriculorId);
      this.db.firestore.runTransaction((transaction) => {
        return transaction.get(agricultorDocRef).then((agricultorDoc) => {
          if (!agricultorDoc.exists) {
            reject("ERROR: DOCUMENT DOESN'T EXIST");
          }
          const formularioCollRef = agricultorDocRef.collection("formulariosDeLineaBase");
          const formularioId = this.db.createId();
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

}
