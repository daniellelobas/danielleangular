import { Product } from './product-create/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://192.168.10.9:3001/products"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }

  create(Product: Product): Observable <Product>{
    return this.http.post<Product>(this.baseUrl, Product)
  }
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl,)
  }
  readById(id: any): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
    update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
  delete (id: any): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url);
  }
}
