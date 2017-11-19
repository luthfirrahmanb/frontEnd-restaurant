import { Component, OnInit } from '@angular/core';
import { TableDataApi } from '../../shared/services/custom/TableData';
import { TableBookingApi } from '../../shared/services/custom/TableBooking';
import { Router } from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  tables: any;
  warningText: any;
  dataBook: any = {
    tableDataId: "",
    name: "",
    email: "",
    bookDate: "",
    address: "",
    numberOfPeople: "",
    contactNumber: ""
  };
  constructor(
    private tableDataApi: TableDataApi,
    private tableBookingApi: TableBookingApi,
    private router: Router
  ) {
    this.getDataTable();
  }

  ngOnInit() {
  }

  //getting All data of table
  getDataTable() {
    this.tableDataApi.find().subscribe((result) => {
      this.tables = result;
    })
  }

  //submit new booking request
  submitData() {
    this.tableDataApi.find().subscribe((result) => {
      let data = result;
      // for(this.tables of result){}
      console.log(data, "data")
      this.tableBookingApi.create(this.dataBook).subscribe((result) => {
        alert("success book table");
        this.router.navigate(['/home']);
      })
    })

  }

  //showing span for warning when user selecting table
  onSelect(id) {
    if (id == 1) {
      this.warningText = "*Must 8 to 12 People"
    } else if (id % 2 == 0) {
      this.warningText = "*Must 3 to 5 People"
    } else if (id % 2 == 1) {
      this.warningText = "*Must 1 to 2 People"
    }
  }
}
