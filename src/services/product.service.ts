import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/mock-products';
import { SelectedProduct } from '../models/product'
import 'rxjs/Rx';

@Injectable()
export class ProductService {
  selectedProducts: SelectedProduct[]

  constructor() {

  }

  getProducts(searchName: string) {
    if (searchName == "") {
      return Promise.resolve(PRODUCTS);
    } else {
      return Promise.resolve(PRODUCTS).then(
        products => products.filter(product => product.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1)
      );
    }
  }

  getProduct(id: number) {
    return Promise.resolve(PRODUCTS).then(
      products => products.filter(product => product.id === id)[0]
    );
  }

  // getCategories() {
  //   return this.http.get(this.getCategoriesUrl)
  //     .map(response => response.json());
  // }

  // saveProduct(product: Product){
  //    //return Promise.resolve(PRODUCTS).then(function(products){

  //   });
  // }
}
