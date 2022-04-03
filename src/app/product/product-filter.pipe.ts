import { Pipe, PipeTransform } from '@angular/core';
import Product from './product';

Pipe({
  name:"productFilter"
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    if(!search) {
      return products;
    }
    return products.filter(product => product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }
}