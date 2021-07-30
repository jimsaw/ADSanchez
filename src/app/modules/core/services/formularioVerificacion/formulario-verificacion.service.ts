import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formulario, FormularioType } from 'src/app/interfaces/formulario';
import { FormularioService } from '../formulario/formulario.service';
import { KeymapperService } from '../keymapper/keymapper.service';
import { FormularioVerificacion } from '../../../../interfaces/formularioVerificacion';
import { ExportacionesService } from '../exportaciones/exportaciones.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioVerificacionService extends FormularioService {
      
  constructor(
    private firebase: AngularFirestore,
    private keyMapper: KeymapperService,
    private exportacionService: ExportacionesService
  ) {
    super(firebase, keyMapper, exportacionService);
  }

  async get(id: string): Promise<FormularioVerificacion> {
    return new Promise(async (resolve, reject) => {
        const docRef = this.firebase.firestore.collection('/formularios/verificacion/estructuras').doc(id);
        const formulario = (await docRef.get()).data() as FormularioVerificacion;
        // this.initSections();
        // this.fetchSections();
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

  list(): Observable<FormularioVerificacion[]> {
    return this.firebase.collection('/formularios/verificacion/estructuras').snapshotChanges().pipe(
      map(formularios => {
        return formularios.map((formulario) => {
          return formulario.payload.doc.data() as FormularioVerificacion;
        });
      })
    );
  }

  getAllFormulariosDict(): Promise<FormularioVerificacion[]> {
    return new Promise<FormularioVerificacion[]>(async (resolve, reject) => {
      try {
        const formularios: FormularioVerificacion[] = []
        const collRef = this.firebase.firestore.collection('/formularios/verificacion/diccionarios');
        const formulariosData = (await collRef.get()).docs;
        for (const formulario of formulariosData) {
          formularios.push((formulario.data()["diccionario"] as FormularioVerificacion))
        }
        resolve(formularios);
      } catch (e) {
        reject(e);
      }
    });
  }

  set(item: Formulario): Promise<void> {
    const formularioVerificacion = item as FormularioVerificacion;
    return new Promise<void>(async (resolve, reject) => {
      try {
        const collRef = this.firebase.firestore.collection("/formularios/verificacion/estructuras");
        await this.firebase.firestore.runTransaction((transaction) => {
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
          return Promise.resolve();
        });
        resolve();
      } catch(e) {
        console.log(e);
        throw(e);
      }
    });
  }

  private setDiccionario(formularioVerificacion: FormularioVerificacion, transaction: any) {
    try {
      const collRef = this.firebase.firestore.collection("/formularios/verificacion/diccionarios");
      const docRef = collRef.doc(formularioVerificacion.id);
      transaction.set(docRef, {
          id: formularioVerificacion.id,
          diccionario: formularioVerificacion
      });
    } catch(e) {
      console.log(e);
      throw(e);
    }
    
  }

  delete(formulario: FormularioVerificacion): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.firebase.firestore.runTransaction(async transaction => {
          const collRef = this.firebase.firestore.collection("/formularios/verificacion/estructuras");
          this.deleteDiccionario(formulario, transaction);
          transaction.delete(collRef.doc(formulario.id));
          return Promise.resolve();
        });
        resolve("Formulario de verificacion eliminado correctamente");
      } catch (e) {
        console.log(e);
        reject("Ha ocurrido un error");
      }
    });
  }

  private deleteDiccionario(formularioVerificacion: FormularioVerificacion, transaction: any) {
    const collRef = this.firebase.firestore.collection("/formularios/verificacion/diccionarios");
    const docRef = collRef.doc(formularioVerificacion.id);
    transaction.delete(docRef);
  }

  async export(id: string): Promise<void> {
    const formulario = await this.getDiccionario(id);
    const result = await this.exportacionService.exportFormulario(formulario, FormularioType.formularioVerificacion);
  }

  async exportAll(): Promise<void> {
    const formularios = await this.getAllFormulariosDict();
    const result = await this.exportacionService.exportarAllFormularios(formularios, FormularioType.formularioVerificacion);
  }

}

