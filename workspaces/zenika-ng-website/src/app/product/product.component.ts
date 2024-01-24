import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product.types';
import { CurrencyPipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgClass, UpperCasePipe, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addToBasket = new EventEmitter<Product>();

  addToBasketClicked() {
    this.addToBasket.emit(this.product);
  }

  isLowStock() {
    return this.product.stock === 1;
  }
}
