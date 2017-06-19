import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CheckoutService {

  private _url = 'http://localhost:8080/basket';

  // Calling an API
  constructor(private  _http: Http){}

  // Generic Method returning an object
  someMethod() {

    // return ITEMS;

    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }
}
