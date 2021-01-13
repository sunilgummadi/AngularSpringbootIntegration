import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer:Customer = new Customer();
  constructor(private customerService:CustomerserviceService,private router:Router) { }

  ngOnInit(): void {
    this.editCustomer();
  }
  editCustomer(){
    let id = localStorage.getItem("id");
    this.customerService.getCustomer(+id)
    .subscribe(data => {this.customer = data;})
    
  }

  onUpdate(){
    console.log("into update");
    this.customerService.updateCustomer(this.customer)
    .subscribe(data =>
      {
        console.log(data);
        this.router.navigate(["customer"]);
        
      },
      error => console.log(error));
      this.customer = new Customer();
  }
}
