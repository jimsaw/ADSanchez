import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
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

    async get(id: string): Promise<FormularioLineaBase> {
        return new Promise(async (resolve, reject) => {
            const docRef = this.firebase.firestore.collection('/formularios/lineaBase/estructuras').doc(id);
            const formulario = (await docRef.get()).data() as FormularioLineaBase;
            // this.initSections();
            // this.fetchSections();
            resolve(formulario);
        });
    }

    async getDiccionario(id: string): Promise<FormularioLineaBase> {
        return new Promise(async (resolve, reject) => {
            const docRef = this.firebase.firestore.collection('/formularios/lineaBase/diccionarios').doc(id);
            const formulario = (await docRef.get()).data()["diccionario"] as FormularioLineaBase;
            resolve(formulario);
        });
    }

    list(): Observable<Formulario[]> {
        return this.firebase.collection('/formularios/lineaBase/estructuras').snapshotChanges().pipe(
            map(formularios => {
                return formularios.map((formulario) => {
                    const formularioParam = formulario.payload.doc.data() as FormularioLineaBase;
                    return formularioParam;
                });
            })
        );
    }

    getAllFormularios(): Promise<FormularioLineaBase[]> {
        return new Promise(async (resolve, reject) => {
            let observable = this.list();
            let formularios = await observable.pipe(take(1)).toPromise();
            //console.log(formularios);
            let listaFormulariosLineaBase: FormularioLineaBase[] = [];
            for (let item of formularios) {
                //console.log(item['id']);
                let formularioLineaBaseElementPromise = this.get(item['id']);
                let formularioLineaBaseElement = await formularioLineaBaseElementPromise;
                //console.log(formularioLineaBaseElement);
                listaFormulariosLineaBase.push(formularioLineaBaseElement);
            }
            //console.log(listaFormulariosLineaBase);
            resolve(listaFormulariosLineaBase);
        });
    }

    set(item: Formulario): Promise<void> {
        const formularioLineaBase = item as FormularioLineaBase;
        return new Promise<void>((resolve, reject) => {
            const collRef = this.firebase.firestore.collection("/formularios/lineaBase/estructuras");
            this.firebase.firestore.runTransaction((transaction) => {
                return new Promise<void>((resolve, reject) => {
                    if (formularioLineaBase.id === '' || formularioLineaBase.id === undefined) {
                        formularioLineaBase.id = this.firebase.createId();
                    }
                    this.setDiccionario(formularioLineaBase, transaction);
                    const docRef = collRef.doc(formularioLineaBase.id);
                    transaction.set(docRef, {
                        id: formularioLineaBase.id,
                        agricultorId: formularioLineaBase.agricultor.id,
                        agricultor: formularioLineaBase.agricultor.nombre,
                        fechaVisita: formularioLineaBase.fechaVisita,
                        tecnico: formularioLineaBase.tecnico.nombre
                    });
                    this.writeSections(docRef, formularioLineaBase, transaction);
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

    private setDiccionario(formularioLineaBase: FormularioLineaBase, transaction: any) {
        const collRef = this.firebase.firestore.collection("/formularios/lineaBase/diccionarios");
        const docRef = collRef.doc(formularioLineaBase.id);
        transaction.set(docRef, {
            id: formularioLineaBase.id,
            diccionario: formularioLineaBase
        });
    }

    delete(formulario: FormularioLineaBase): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                await this.firebase.firestore.runTransaction(async transaction => {
                    const collRef = this.firebase.firestore.collection("/formularios/lineaBase/estructuras");
                    transaction.delete(collRef.doc(formulario.id));
                    return Promise.resolve();
                });
                resolve("Formulario de linea base eliminado correctamente");
            } catch (e) {
                console.log(e);
                reject("Ha ocurrido un error");
            }
        });
    }

    private deleteDiccionario(formularioLineaBase: FormularioLineaBase, transaction: any) {
        const collRef = this.firebase.firestore.collection("/formularios/lineaBase/diccionarios");
        const docRef = collRef.doc(formularioLineaBase.id);
        transaction.delete(docRef);
    }

}
