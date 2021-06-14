import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { Database } from 'src/app/interfaces/database';
import { environment } from 'src/environments/environment';
import { KeymapperService } from '../keymapper/keymapper.service';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService implements Database<Agricultor> {

  constructor(
    private firebase: AngularFirestore,
    private keymapperService: KeymapperService
  ) { }


  list(): Observable<Agricultor[]> {
    return this.firebase.collection('agricultores').snapshotChanges().pipe(
      map(agricultores => {
        return agricultores.map((agricultor) => {
          return agricultor.payload.doc.data() as Agricultor;
        });
      })
    );
  }


  set(agricultor: Agricultor): Promise<void> {
    if (agricultor.id === '' || agricultor.id === undefined) {
      agricultor.id = this.firebase.createId();
    }
    console.log(agricultor);
    return this.firebase
      .collection("agricultores")
      .doc(agricultor.id)
      .set(agricultor);
  }


  delete(agricultor: Agricultor): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.firebase.firestore.runTransaction(async transaction => {
          const collRef = this.firebase.firestore.collection("agricultores");
          const docRef = collRef.doc(agricultor.id);
          transaction.delete(docRef);
          return Promise.resolve();
        });
        resolve("Agricultor eliminado correctamente");
      } catch (e) {
        console.log(e);
        reject("Ha ocurrido un error");
      }
    });
  }

  async get(id: string): Promise<Agricultor> {
    const docRef = this.firebase.firestore.collection("agricultores").doc(id);
    const agricultor = (await docRef.get()).data() as Agricultor;
    return agricultor;
  }

  public getAll() {
    let docRef = this.firebase.collection('agricultores').get();
    let result = [];
    docRef.subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let nombre = doc.data()['NOMBRE']
        result.push({ id: doc.id, nombre: nombre });
      });
    });
    return result;
  }

  private firebaseCode(value: string): string {
    return this.keymapperService.getAgricultorFirebaseCode(value);
  }

  /*
  public toMap(agricultor: Agricultor): any {
    return {
      id: agricultor.id,
      codigo: agricultor.codigo,
      cedula: agricultor.cedula,
      nombre: agricultor.nombre,
      fechaNacimiento: agricultor.fechaNacimiento.toDateString(),
      genero: agricultor.genero,
      estadoCivil: agricultor.estadoCivil,
      nivelEducacion: agricultor.nivelEducacion,
      celulares: agricultor.celulares,
      telefono: agricultor.telefono,
      isDiscapacitado: agricultor.isDiscapacitado,
      tecnico: agricultor.tecnico,
      fechaVisita: agricultor.fechaVisita.toDateString(),
    }
  }
  */

  private fromMap(data: any): Agricultor {
    return {
      id: data["id"],
      codigo: data[this.firebaseCode("codigo")],
      cedula: data[this.firebaseCode("cedula")],
      nombre: data[this.firebaseCode("nombre")],
      fechaNacimiento: new Date(data[this.firebaseCode("fechaNacimiento")]),
      genero: data[this.firebaseCode("genero")],
      estadoCivil: data[this.firebaseCode("estadoCivil")],
      nivelEducacion: data[this.firebaseCode("nivelEducacion")],
      celulares: data[this.firebaseCode("celulares")],
      telefono: data[this.firebaseCode("telefono")],
      isDiscapacitado: data[this.firebaseCode("isDiscapacitado")],
      tecnico: data[this.firebaseCode("tecnico")],
      fechaVisita: new Date(data[this.firebaseCode("fechaVisita")])
    }
  }

}

