import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formulario } from 'src/app/interfaces/formulario';
import { FormularioService } from '../formulario/formulario.service';
import { KeymapperService } from '../keymapper/keymapper.service';
import { FormularioVerificacion } from '../../../../interfaces/formularioVerificacion';

@Injectable({
  providedIn: 'root'
})
export class FormularioVerificacionService extends FormularioService {

  constructor(
    private firebase: AngularFirestore,
    private keyMapper: KeymapperService
  ) {
    super(firebase, keyMapper);
  }

  async get(id: string): Promise<FormularioVerificacion> {
    return new Promise(async (resolve, reject) => {
        const docRef = this.firebase.firestore.collection('/formularios/verificacion/estructuras').doc(id);
        const formulario = (await docRef.get()).data() as FormularioVerificacion;
        // this.initSections(formulario);
        // await this.fetchSections(formulario);
        resolve(formulario);
    });
  }

  async getDiccionario(id: string): Promise<FormularioVerificacion> {
    return new Promise(async (resolve, reject) => {
        const docRef = this.firebase.firestore.collection('/formularios/verificacion/diccionarios').doc(id);
        const formulario = (await docRef.get()).data()["diccionario"] as FormularioVerificacion;
        resolve(formulario);
    });
}

  list(): Observable<Formulario[]> {
    return this.firebase.collection('/formularios/verificacion/estructuras').snapshotChanges().pipe(
      map(formularios => {
        return formularios.map((formulario) => {
          return formulario.payload.doc.data() as FormularioVerificacion;
        });
      })
    );
  }

  set(item: Formulario): Promise<void> {
    const formularioVerificacion = item as FormularioVerificacion;
    return new Promise<void>((resolve, reject) => {
      const collRef = this.firebase.firestore.collection("/formularios/verificacion/estructuras");
      this.firebase.firestore.runTransaction((transaction) => {
        return new Promise<void>((resolve, reject) => {
          if (formularioVerificacion.id === "" || formularioVerificacion.id === undefined) {
            formularioVerificacion.id = this.firebase.createId();
          }
          this.setDiccionario(formularioVerificacion, transaction);
          const docRef = collRef.doc(formularioVerificacion.id);
          transaction.set(docRef, {
              id: formularioVerificacion.id,
              agricultor: formularioVerificacion.agricultor.nombre,
              agricultorId: formularioVerificacion.agricultor.id,
              fechaVisita: formularioVerificacion.fechaVisita,
              tecnico: formularioVerificacion.tecnico.nombre
          });
          this.writeSections(docRef, formularioVerificacion, transaction);
          resolve();
        });
      }).then(() => {
          resolve();
      }).catch((e) => {
          console.log(e);
          reject(e);
      });
    });
  }

  private setDiccionario(formularioVerificacion: FormularioVerificacion, transaction: any) {
    const collRef = this.firebase.firestore.collection("/formularios/verificacion/diccionarios");
    const docRef = collRef.doc(formularioVerificacion.id);
    transaction.set(docRef, {
        id: formularioVerificacion.id,
        diccionario: formularioVerificacion
    });
  }

  delete(formulario: Formulario): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.firebase.firestore.runTransaction(async transaction => {
          const collRef = this.firebase.firestore.collection("/formularios/verificacion/estructuras");
          const docRef = collRef.doc(formulario["id"]);
          transaction.delete(docRef);
          return Promise.resolve();
        });
        resolve("Formulario de verificacion eliminado correctamente");
      } catch (e) {
        console.log(e);
        reject("Ha ocurrido un error");
      }
    });
  }

}

