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
        const docRef = this.firebase.firestore.collection('formulariosVerificacion').doc(id);
        const formulario = (await docRef.get()).data() as FormularioVerificacion;
        // this.initSections(formulario);
        // await this.fetchSections(formulario);
        resolve(formulario);
    });
  }

  list(): Observable<Formulario[]> {
    return this.firebase.collection('formulariosVerificacion').snapshotChanges().pipe(
      map(formularios => {
        return formularios.map((formulario) => {
          return formulario.payload.doc.data() as FormularioVerificacion;
        });
      })
    );
  }

  set(item: Formulario): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(formulario: Formulario): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.firebase.firestore.runTransaction(async transaction => {
          const collRef = this.firebase.firestore.collection("formulariosVerificacion");
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

