import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  today: any;
  open: any;
  closed: any;
  restOpenStatus: boolean = false;
  constructor() {

    // this.RestaurantOpenStatus();


  }
  ngOnInit() {
    //checking every 1 seconds the status of restaurant
    setInterval(() => {
      this.RestaurantOpenStatus();
    }, 1000)
  }

  RestaurantOpenStatus() {
    this.today = moment().format('hh:mm A');
    this.open = '10:00 AM';
    this.closed = '10:00 PM';
    if (this.today >= this.open || this.today < this.closed) {
      this.restOpenStatus = true;
    } else {
      this.restOpenStatus = false;
    }
  }
}
