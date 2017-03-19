import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-userDetails',
    templateUrl: 'user_details.html'
})
export class userDetailsPage {
     isSubmitted : boolean;
    constructor(public navCtrl: NavController) {
        this.isSubmitted = false;
    }

}
