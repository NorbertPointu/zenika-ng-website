import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { Product } from './product/product.types';
import { ProductComponent } from "./product/product.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuComponent, ProductComponent]
})
export class AppComponent {
  title = 'my first component';

  products: Productc =[
    {
      "id": "welsch",
      "title": "Coding the welsch",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-welsch.jpg",
      "price": 20,
      "stock": 2
    },
    {
      "id": "world",
      "title": "Coding the world",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-world.jpg",
      "price": 18,
      "stock": 2
    },
    {
      "id": "vador",
      "title": "Duck Vador",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-stars.jpg",
      "price": 21,
      "stock": 2
    },
    {
      "id": "snow",
      "title": "Coding the snow",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-snow.jpg",
      "price": 19,
      "stock": 2
    }
  ]
}
