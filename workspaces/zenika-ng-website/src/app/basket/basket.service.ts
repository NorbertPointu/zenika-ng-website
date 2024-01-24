import { Component, Injectable, NgModule } from '@angular/core';
import { Product } from '../product/product.types';
import { BasketItem } from './basket.type';
@Injectable({ providedIn: 'root' })
export class BasketService {

  private _items :BasketItem[] =[]

  get items() { return this._items}
  get total() { return this._items.reduce((acc, {price})=> acc + price, 0)}

  addItem(item:BasketItem) {
      this._items.push(item);
    }
}
