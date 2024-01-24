import { Component, Injectable, NgModule, inject, signal } from '@angular/core';
import { Product } from '../product/product.types';
import { BasketItem } from './basket.type';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class BasketService {
  private _items = signal< BasketItem[]> ( []);

  private httpClient = inject(HttpClient);

  get items() {
    return this._items();
  }
  get total() {
    return this._items().reduce((acc, { price }) => acc + price, 0);
  }

  fetchBasket () {
    return this.httpClient.get<BasketItem[]>('http://localhost:8080/api/basket').pipe(
      tap({next:(response) => this._items.set(response), error:console.error})
    )
  }


  addItem(productId: string) {
    return this.httpClient
      .post<BasketItem>('http://localhost:8080/api/basket', { productId })
      .pipe(
        tap({
          next: (response) => this._items.update((prev) => [response, ...prev]),
        })
      );
  }
}
