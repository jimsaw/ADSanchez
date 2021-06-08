import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Formulario } from 'src/app/interfaces/formulario';
import { FormularioService } from '../formulario/formulario.service';
import { KeymapperService } from '../keymapper/keymapper.service';

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

  list(): Observable<Formulario[]> {
    throw new Error('Method not implemented.');
  }

  set(item: Formulario): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(item: Formulario): Promise<string> {
    throw new Error('Method not implemented.');
  }

}
