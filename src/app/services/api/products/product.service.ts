import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRep } from '../models/product-rep';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com';

  constructor(private httpService: HttpClient) {}

  getPaginatedProducts(limit: number = 5): Observable<Array<ProductRep>> {
    const productsUrl: string = `${this.baseUrl}/products?limit=${limit}`;
    return this.httpService.get<Array<ProductRep>>(productsUrl);
  }

  createProduct(product: ProductRep): Observable<ProductRep> {
    const productsUrl: string = `${this.baseUrl}/products`;
    return this.httpService.post<ProductRep>(productsUrl, product);
  }
}
