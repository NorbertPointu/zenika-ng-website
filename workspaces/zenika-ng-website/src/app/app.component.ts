import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { Product } from './product/product.types';
import { ProductComponent } from './product/product.component';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { CatalogService } from './catalog/catalog.service';
import { BasketService } from './basket/basket.service';
import { SelectProductKeyComponent } from "./select-product-key/select-product-key.component";
import { SelectProductKey } from './select-product-key/select-product-key.types';
import { SortProductsPipe } from './sort-product/sort-product.pipe';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuComponent, ProductComponent, NgFor, NgIf, CurrencyPipe, SelectProductKeyComponent, SortProductsPipe]
})
export class AppComponent {
  title = 'my first component';
  basket: { quantity: number; product: Product }[] = [];

  protected catalogService = inject(CatalogService)
  protected basketService = inject(BasketService)
  productKey: SelectProductKey = undefined;

  protected addItem(product: Product) {
    if (this.catalogService.decreaseStock(product.id)){
    this.basketService.addItem(product)}
  }
  
  get total() {
    return this.basketService.total;
  }

  get products() {
    return this.catalogService.products;
  }

  get hasProductsInStock() {
    return this.catalogService.hasProductsInStock;
  }
}
