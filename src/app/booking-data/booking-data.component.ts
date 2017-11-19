import { Component, OnInit } from '@angular/core';
import { TableDataApi } from '../../shared/services/custom/TableData';
// import { TableBookingApi } from '../../shared/services/custom/TableBooking';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-data',
  templateUrl: './booking-data.component.html',
  styleUrls: ['./booking-data.component.scss']
})
export class BookingDataComponent implements OnInit {

  datas:any;
  constructor(
    private tableDataApi: TableDataApi
  ) { 
    this.getBookingData();
  }

  ngOnInit() {
  }

  getBookingData() {
    this.tableDataApi.find({
      include: {
        relation: 'tableBooking'
      }
    }).subscribe((result) => {
      this.datas = result;
    })
  }

}
