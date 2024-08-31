import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebase:AngularFireAuth) { }

  async auth(email:string, password:string) {
    const request=await this.firebase.createUserWithEmailAndPassword(email, password)
    return request
   }
}
