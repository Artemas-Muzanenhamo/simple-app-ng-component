
import {Injectable} from '@angular/core';
import {Item} from "../checkout/item";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IntroService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  });
  private url = "http://localhost:8080/addItems";

  // Calling the API
  constructor(private http: Http) { }

  // Method to Add Items to
  // addItems(item: Item) {
  //   Observable<Response> ob = this.http.post(this._url, item)
  // }

  addItems(item: Item): Promise<Item>{
    return this.http
      .post(this.url, JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
