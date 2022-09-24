import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers : Customer[]

  constructor(private cosutomerService:CustomerService) { }

  ngOnInit(): void {
  }

  reloadData(){
    console.log("Reload!");
    this.cosutomerService.getProductList().subscribe(customers => this.customers = this.customers);
  }

}
