import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public createAgricultor(data) {
    return this.firestore.collection('agricultores').add(data);
  }
}
