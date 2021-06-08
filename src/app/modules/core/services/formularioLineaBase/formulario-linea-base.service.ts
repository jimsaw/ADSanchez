import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formulario } from 'src/app/interfaces/formulario';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { FormularioService } from '../formulario/formulario.service';
import { KeymapperService } from '../keymapper/keymapper.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioLineaBaseService extends FormularioService {

  constructor(
    private firebase: AngularFirestore,
    private keyMapper: KeymapperService
  ) {
    super(firebase, keyMapper);
  }

  list(): Observable<Formulario[]> {
    return this.firebase.collection('formulariosLineaBase').snapshotChanges().pipe(
      map(formularios => {
        return formularios.map((formulario) => {
          return formulario.payload.doc.data() as FormularioLineaBase;
        });
      })
    );
  }

  set(item: Formulario): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(formulario: FormularioLineaBase): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.firebase.firestore.runTransaction(async transaction => {
          const collRef = this.firebase.firestore.collection("formulariosLineaBase");
          const docRef = collRef.doc(formulario["id"]);
          transaction.delete(docRef);
          return Promise.resolve();
        });
        resolve("Formulario de linea base eliminado correctamente");
      } catch (e) {
        console.log(e);
        reject("Ha ocurrido un error");
      }
    });
  }
  
}
