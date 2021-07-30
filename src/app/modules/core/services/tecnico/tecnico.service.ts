import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tecnico } from 'src/app/interfaces/tecnico';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  loggedTecnico: Tecnico = {
    id: "",
    nombre: "",
    correo: ""
  };

  constructor(
    private firebase: AngularFirestore,
    private authService: AuthService
  ) { }

  fetch() {
    this.authService.getUser().subscribe(user => {
      this.getTecnicoById(user.uid).subscribe(tecnico => {
        this.loggedTecnico.id = tecnico.id;
        this.loggedTecnico.nombre = tecnico.nombre;
        this.loggedTecnico.correo = tecnico.correo;
      });
    });
  }

  async get(id: string): Promise<Tecnico> {
    const docRef = this.firebase.firestore.collection("tecnicos").doc(id);
    const tecnico = (await docRef.get()).data() as Tecnico;
    return tecnico;
  }

  getTecnicoById(id: string): Observable<Tecnico> {
    return this.firebase.collection("tecnicos").doc(id)
      .snapshotChanges().pipe(
        map(tecnico => {
          return tecnico.payload.data() as Tecnico;
        })
      );
  }

}
