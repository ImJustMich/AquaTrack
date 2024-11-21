import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(response => {

        return response;
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          throw new Error('Email already exists');  
        }

        throw error;
      });
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

}