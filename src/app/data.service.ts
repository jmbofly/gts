import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

export class User {
  email: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userCollection: AngularFirestoreCollection<any>;

  constructor(public afs: AngularFirestore, public http: HttpClient) {
    this.userCollection = this.afs.collection<User>('users');
  }

  public signUp(email: string, data?: any) {
    const userData = { email, data };
    return this.userCollection.add(userData);
  }
}
