import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

export class User {
  email: string;
  data?: UserData;
}

export class UserData {
  timestamp: any;
  extra?: any;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userCollection: AngularFirestoreCollection<User>;
  contactCollection: AngularFirestoreCollection<any>;
  prizeEntryCollection: AngularFirestoreCollection<any>;

  constructor(public afs: AngularFirestore, public http: HttpClient) {
    this.userCollection = this.afs.collection<User>('users');
    this.contactCollection = this.afs.collection<any>('contacts');
    this.prizeEntryCollection = this.afs.collection<any>('prize-entries');
  }

  public signUp(email: string, data?: UserData) {
    const userData = { email, data };
    userData.data.timestamp = new Date();
    return this.userCollection.add(userData);
  }

  prizeEntrySignUp(data: any) {
    data.timestamp = new Date();
    return this.prizeEntryCollection.add(data);
  }

  newContact(data: any) {
    data.timestamp = new Date();
    return this.contactCollection.add(data);
  }
}
