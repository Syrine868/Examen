import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  producturl = "  http://localhost:3000/product"
  carturl = "  http://localhost:3000/cart"


  httpOptions={
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  }
  constructor(private http: HttpClient) { }


  addp(p: Product): Observable<Product>{
    return this.http.post<Product>(this.producturl, p,this.httpOptions);
  }

  getProducts(): Observable<Product[]>{
   return this.http.get<Product[]>(this.producturl);
  }

  addToCart(p:Product) : Observable<Product> {
    return this.http.post<Product>(this.carturl,p, this.httpOptions)
  }

}
