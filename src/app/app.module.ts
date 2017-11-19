import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { SDKBrowserModule } from './../shared/index'; //using sdk builder
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookingDataComponent } from './booking-data/booking-data.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'book', component: BookComponent},
  { path: 'booking-data', component: BookingDataComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    BookingDataComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    SDKBrowserModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
