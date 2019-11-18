import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'

@Injectable()
export class ProductService {

  priavte _albumUrl = '../assets/album.json'

  constructor(private _http: Http) {

  }

  getAlbum(id: number){
    return this._http.get(_albumUrl)
  }

}
