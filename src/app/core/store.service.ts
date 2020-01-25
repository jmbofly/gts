import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBrand } from '../store/interfaces/brands.interface';
import { ImageService } from './image.service';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private data: DataService, public image: ImageService, public http: HttpClient) { }

  /**
   * List all keys in data list
   *
   * @param list array of data
   *
   * @return array of keys
  */
  getKeys(list: any) {
    const keys = Object.keys(list);
    keys.map(key => key.toUpperCase())
    console.log('keys', keys);
    return keys;
  }


  addImageToItem(item: any) {
    const name = this.formatImgURL(item['SKU']);
    return this.getImage(name);
  }


  /**
   * HTTP call for json data that returns an Observable<Object>
   * 
   * @param company Name of company or brand
   * 
   * @return 'Observable<Object>'
  */
  getJsonData(dataLocation: string, key?: string) {
    return this.http.get(dataLocation).pipe(map(data => {
      // console.log(data[key]);
      for (let item in data[key]) {
        // console.log(item);
        data[key][item].IMAGE_URL = this.addImageToItem(data[key][item]);
      }
      return Array(...data[key]);
    })
    );

  }

  /**
   * Modify string format to get imageURL from host 
   *
   * @param nameOrId Name of company or brand
   *
   * @return image name string
  */
  formatImgURL(nameOrId: string) {
    const formatJpg = String(`${nameOrId}_image1.jpg`).toLowerCase();
    // console.log('format img', formatJpg)
    return formatJpg;
  }

  /**
   * Get imageURL from host
   *
   * @param name Name of image to be retrieved
   *
   * @return ImageURL string
  */
  getImage(name: string): string {
    // return `assets/img/${name}`;
    return `https://firebasestorage.googleapis.com/v0/b/gts-site-80a8a.appspot.com/o/img%2F${name}?alt=media&token=215393f1-dbc9-4761-aaa2-b8505ed73eb3`;
  }
}
