import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService:CustomerserviceService,private router:Router) { }

  customers:Observable<Customer[]>;
  p:Number = 1;
  count:Number = 5;
  // @Input() customer:Customer;
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.customers = this.customerService.getCustomersList();
  }
  editCustomer(customer:Customer){
    console.log("into edit");
    localStorage.setItem("id",customer.id.toString());
    this.router.navigate(["edit"]);
    
  }
  deleteCustomer(customer:Customer){
    this.customerService.deleteCustomer(customer.id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
        
      },
      error => console.log(error));
  }

  deleteCustomers(){
    this.customerService.deleteAll()
    .subscribe(
      data =>{
        console.log(data);
        this.reloadData();
        
      },
      error => console.log(error));
  }
}
