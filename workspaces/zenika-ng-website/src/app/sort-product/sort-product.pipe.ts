import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.types';
@Pipe({ 
    standalone:true,
    pure:false,
    name: 'sortProducts' })
export class SortProductsPipe implements PipeTransform {
  transform(products: Product[], sortBy? :'price' | 'stock' ): Product[] {
    if (!sortBy){
        return products
    }

    return [...products ?? []].sort((left, right) => left[sortBy] - right[sortBy]);
  }
}
