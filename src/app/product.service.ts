import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import { ProductDescriptionComponent } from './product-description/product-description.component';

@Injectable()
export class ProductService {

  priavte _albumUrl = '../assets/album.json'

  constructor(private _http: Http) {

  }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).map((response) => response.json())
  }

}
