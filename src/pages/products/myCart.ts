import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from '../../services/product.service';
import { SelectedProduct } from '../../models/product'
import { userDetailsPage } from '../User/user_details';

@Component({
    selector: 'page-myCart',
    templateUrl: 'myCart.html'
})
export class myCartPage {
    userDetailsPage = userDetailsPage;
    selProducts: SelectedProduct[];
    totalPrice: number;
    constructor(public navCtrl: NavController, private _productService: ProductService) {
        this.selProducts = this._productService.selectedProducts;
    }

    updateTotalPrice() {
        this.totalPrice = 0;
        for (let seleProduct of this._productService.selectedProducts) // for acts as a foreach
        {
            this.totalPrice += seleProduct.qty * seleProduct.product.price;
        }
    }

    removeProductFromCart(removedProduct: SelectedProduct) {
        var index = this._productService.selectedProducts.indexOf(removedProduct);
        if (index > -1) {
            this._productService.selectedProducts.splice(index, 1);
            this.updateTotalPrice();
        }
    }

    ionViewWillEnter() {
        this.updateTotalPrice();
    }
}
