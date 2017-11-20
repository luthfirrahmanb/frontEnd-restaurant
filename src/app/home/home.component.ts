import { Component, OnInit } from '@angular/core';
import { TableDataApi } from '../../shared/services/custom/TableData';
import { TableBookingApi } from '../../shared/services/custom/TableBooking';
import * as moment from 'moment';
import { Router } from "@angular/router";
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tables: any;
  today = moment().format();
  dataTable: any;

  constructor(
    private tableDataApi: TableDataApi,
    private tableBookingApi: TableBookingApi,
    private router: Router
  ) {
    this.getTableData();

  }

  ngOnInit() {
    //update when page refresh
    this.updateTableStatus();
  }

  //getting All table data
  getTableData() {
    this.tableDataApi.find().subscribe((result) => {
      this.tables = result;
    })
  }

  //for updating table status
  updateTableStatus() {
    this.tableBookingApi.find().subscribe((result) => {
      this.dataTable = result;

      for (this.dataTable of result) {

        //when actual datetime more than booking datetime
        if (this.today >= moment(this.dataTable.bookDate).format() || this.today < moment(this.dataTable.bookDate).add(1, 'hours').format()) {
          this.tableDataApi.upsertWithWhere({
            id: this.dataTable.tableDataId
          }, {
              isBooked: 1
            }
          ).subscribe((result) => {

          })

        }
        //when booking datetime + 1 hour more than actual time
        else {
          this.tableDataApi.upsertWithWhere({
            id: this.dataTable.tableDataId
          }, {
              isBooked: 0
            }
          ).subscribe((result) => {

          })
        }
      }
    })
  }

}
