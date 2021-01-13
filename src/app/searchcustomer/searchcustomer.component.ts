import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {

  customers:Customer[];
  age:number;
  constructor(private customerService:CustomerserviceService) { }

  p:Number = 1;
  count:Number = 3;
  ngOnInit(): void {
    this.age = 0;
  }

  searchCustomer(){
    this.customers = [];
    this.customerService.getCustomersByAge(this.age)
    .subscribe(data => this.customers = data);
  }

  onSubmit(){
    this.searchCustomer();
  }
}
