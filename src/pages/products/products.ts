import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NavController } from 'ionic-angular';
import { ProductService } from '../../services/product.service';
import { myCartPage } from './myCart';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductPage {
  myCartPage = myCartPage;
  //page_loder : boolean;
  selectedProductCount : number
  products: Product[];
  constructor(public navCtrl: NavController, private _productService: ProductService) {
      //this.page_loder = false;
      this.selectedProductCount = 0;
  }
  getProducts() {
    this._productService.getProducts().then(products => this.products = products);
  }

  AddProductToCart(selProduct: Product) {
   // this.page_loder = true;
    if (this._productService.selectedProducts == undefined) {
      this._productService.selectedProducts = [];
    }
    var isExists = false;
    for (let seleProduct of this._productService.selectedProducts) // for acts as a foreach
    {
      if (seleProduct.product.id == selProduct.id) {
        isExists = true;
        seleProduct.qty++;
      }
    }
    if (!isExists)
      this._productService.selectedProducts.push({ product: selProduct, qty: 1 });

      this.selectedProductCount  = this._productService.selectedProducts.length;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.getProducts();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.products = this.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewWillEnter() {
    this.getProducts();
  }
}