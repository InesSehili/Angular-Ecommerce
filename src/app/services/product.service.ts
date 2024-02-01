import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  httpClient : HttpClient) { }


  getAllProduct(): Observable<Product[]>
  {
     return this.httpClient.get<GetResponse>("http://localhost:8080/api/products").
     pipe(
      map(response => response._embedded.products));

  }
}

interface GetResponse {
  _embedded : {
    products : Product[];
  }
}
