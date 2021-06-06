import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { environment } from 'src/environments/environment';
import { KeymapperService } from '../keymapper/keymapper.service';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {

  constructor(
    private firestore: AngularFirestore,
    private keymapperService: KeymapperService
  ) { }

  setAgricultor(agricultor: Agricultor): Promise<void> {
    if (agricultor.id === '' || agricultor.id === undefined) {
      agricultor.id = this.firestore.createId();
    }
    const mappedAgricultor = this.keymapperService.keyMapper(agricultor, environment.mappers.agricultorMapper);
    return this.firestore
      .collection("agricultores")
      .doc(mappedAgricultor["id"])
      .set(mappedAgricultor);
  }

  public getAll() {
    let docRef = this.firestore.collection('agricultores').get();
    let result = [];
    docRef.subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(doc.data()['NOMBRE']);
        let nombre = doc.data()['NOMBRE']
        result.push({ id: doc.id, nombre: nombre });
      });
    });
    return result;
  }

  private firebaseCode(value: string): string {
    return this.keymapperService.getAgricultorFirebaseCode(value);
  }

  public toMap(agricultor: Agricultor): any {
    return {
      id: agricultor.id,
      codigo: agricultor.codigo,
      cedula: agricultor.cedula,
      nombre: agricultor.nombre,
      fechaNacimiento: agricultor.fechaNacimiento.toString(),
      genero: agricultor.genero,
      estadoCivil: agricultor.estadoCivil,
      nivelEducacion: agricultor.nivelEducacion,
      celulares: agricultor.celulares,
      telefono: agricultor.telefono,
      isDiscapacitado: agricultor.isDiscapacitado,
      tecnico: agricultor.tecnico,
      fechaVisita: agricultor.fechaVisita.toString(),
    }
  }

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

  getAgricultores(): Observable<Agricultor[]> {
    return this.firestore.collection('agricultores').snapshotChanges().pipe(
      map(agricultores => {
        return agricultores.map((agricultor) => {
          return this.fromMap(agricultor.payload.doc.data());
        });
      })
    );
  }

  deleteAgricultor(agricultor: Agricultor): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.firestore.firestore.runTransaction(async transaction => {
          const collRef = this.firestore.firestore.collection("agricultores");
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

}

