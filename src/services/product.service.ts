import { Injectable } from '@angular/core';
import {PRODUCTS}     from '../data/mock-products';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    return Promise.resolve(PRODUCTS);
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