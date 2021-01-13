import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';

const routes: Routes = [
  {
    path:'add',
    component:CreateCustomerComponent
  },
  {
    path:'customer',
    component:CustomerListComponent
  },
  {
    path:'edit',
    component:EditCustomerComponent
  },
  {
    path:'findbyage',
    component:SearchcustomerComponent}
  // },
  // {
  //   path:'',
  //   redirectTo:'customer',
  //   pathMatch:'Full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
