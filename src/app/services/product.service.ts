import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl = 'http://localhost:8080/api/products';
  constructor(private  httpClient : HttpClient) { }

  getAllCategory(): Observable<ProductCategory[]>
  {
    const categoryUrl = 'http://localhost:8080/api/product-category';
   return  this.httpClient.get<GetResponse2>(categoryUrl).pipe(
      map(data => data._embedded.productCategory)
    );
  }
  getAllProduct(categoryid : number): Observable<Product[]>
  {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryid}`;
     return this.httpClient.get<GetResponse>(searchUrl).
     pipe(
      map(response => response._embedded.products));

  }
  getProductByName(currentProductName: string) : Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${currentProductName}`;
     return this.httpClient.get<GetResponse>(searchUrl).
     pipe(
      map(response => response._embedded.products));
    
  }
  getProductById(id : number) : Observable <Product>{

    return this.httpClient.get<Product>( `${this.baseUrl}/${id}`);
    
  }
  
}

interface GetResponse {
  _embedded : {
    products : Product[];
  }
}

interface GetResponse2 {
  _embedded : {
    productCategory : ProductCategory[];
  }
}

