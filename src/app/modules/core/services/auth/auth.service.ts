import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorMessage;

  constructor(
    public firebaseAuth: AngularFireAuth
  ) {}

  signIn(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.firebaseAuth.signOut();
  }

  hasUser() {
    return this.firebaseAuth.authState;
  }

  getUser() {
    return this.firebaseAuth.user;
  }

}
