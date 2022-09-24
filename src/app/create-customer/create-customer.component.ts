import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService , private router: Router) { }

  ngOnInit(): void {

  }

  save(){//asíncrono

   console.log(this.customer)

   this.customerService.createCostumer(this.customer).subscribe(

    data => this.router.navigate(['/list'])

   );

   console.log("Esperar por favor")

  }

}
