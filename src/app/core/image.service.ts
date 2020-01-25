import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask, fromTask } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class HostImage {
  name: string;
  url: Observable<any>;
};
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imgRef: AngularFireStorageReference;
  imgList: HostImage[];
  constructor(public storage: AngularFireStorage) {
    this.imgRef = this.storage.ref('img');
  }
  getImage(dir: string, name: string) {
    const ref = this.storage.ref(`${dir}${name}`);
    return ref.getDownloadURL();
  }

}
