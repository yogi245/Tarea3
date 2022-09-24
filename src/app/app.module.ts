import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustumerDetailsComponent } from './custumer-details/custumer-details.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    CustumerDetailsComponent,
    SearchCustomerComponent,
    HomeCustomerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
