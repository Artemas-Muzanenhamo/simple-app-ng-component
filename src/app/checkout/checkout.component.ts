import {Component} from '@angular/core';
import {CheckoutService} from './checkout.service';
import {Item} from './item';

@Component({
  selector: 'app-checkout-section',
  templateUrl: './checkout.component.html',
  styleUrls: ['../app.component.css']
})
export class CheckoutComponent {

  title: Item[];

  // DI
  constructor(private _checkoutService: CheckoutService){

  }

  ngOnInit(){
    this._checkoutService.someMethod()
      .subscribe(resItemData => this.title = resItemData);
  }

}
