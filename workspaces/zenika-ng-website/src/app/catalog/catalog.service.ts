import { Component, Injectable, NgModule, inject, signal } from '@angular/core';
import { Product } from '../product/product.types';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CatalogService {
  private _products = signal<Product[]>([]);

  private httpClient = inject(HttpClient);

  get products(): Product[] {
    return this._products();
  }

  get hasProductsInStock(): boolean {
    return this._products().some(({ stock }) => stock > 0);
  }

  fetchProducts() {
    return this.httpClient
      .get<Product[]>('http://localhost:8080/api/products')
      .pipe(tap({ next: (response) => this._products.set(response) }));
  }

  decreaseStock(productId: string) {
    const product = this._products().find(({ id }) => id === productId);
    if (!product) {
      return false;
    }

    product.stock -= 1;

    return true;
  }
}
