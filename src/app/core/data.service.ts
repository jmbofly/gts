import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { HostImage, ImageService } from './image.service';
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
  // private imageNameCollection: AngularFirestoreCollection<HostImage>;
  private imagesCollection: AngularFirestoreCollection<HostImage>;
  private userCollection: AngularFirestoreCollection<User>;
  private contactCollection: AngularFirestoreCollection<any>;
  private prizeEntryCollection: AngularFirestoreCollection<any>;
  data$: Observable<any>;

  constructor(public afs: AngularFirestore, public http: HttpClient, private fns: AngularFireFunctions, public images: ImageService) {
    this.userCollection = this.afs.collection<User>('users');
    this.contactCollection = this.afs.collection<any>('contacts');
    this.prizeEntryCollection = this.afs.collection<any>('prize-entries');
    // this.imageNameCollection = this.afs.collection<HostImage>('imageNames');
    this.imagesCollection = this.afs.collection<HostImage>('images');
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

  formatImgURL(nameOrId: string, args?: string[]) {
    const upper = String(nameOrId).toLowerCase();
    const formatJpg = upper + `_image1.jpg`;
    console.log('format img', formatJpg)
    return formatJpg;
  }

  getImage(name: string): string {
    // return `assets/img/${name}`;
    return `https://firebasestorage.googleapis.com/v0/b/gts-site-80a8a.appspot.com/o/img%2F${name}?alt=media&token=137c99b9-6dd2-443e-933c-ae29c15198be`;
  }
  newContact(data: any) {
    data.timestamp = new Date();
    return this.contactCollection.add(data);
  }

}
