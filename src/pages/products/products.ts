import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NavController } from 'ionic-angular';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductPage {
 products: Product[];
  constructor(public navCtrl: NavController,private _productService: ProductService) {
    
  }
  getProducts() {
    this._productService.getProducts().then(products => this.products = products);
  }
  
ionViewWillEnter(){
  this.getProducts();
}
}