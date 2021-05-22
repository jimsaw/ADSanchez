import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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

  public create(agricultor: Agricultor): Promise<any> {
    let mappedAgricultor = this.keymapperService.keyMapper(agricultor, environment.mappers.agricultorMapper);
    return this.firestore.collection('agricultores').add(mappedAgricultor);
  }



}
