import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from '../../services/product.service';
import {SelectedProduct} from '../../models/product'

@Component({
  selector: 'page-myCart',
  templateUrl: 'myCart.html'
})
export class myCartPage {
selProducts : SelectedProduct[];
purchageForm : boolean;

  constructor(public navCtrl: NavController, private _productService: ProductService) {
     this.selProducts =  this._productService.selectedProducts;
     this.purchageForm = false;
  }

}
