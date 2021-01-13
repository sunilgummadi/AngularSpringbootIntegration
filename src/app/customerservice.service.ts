import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  private baseUrl = 'http://localhost:8080/api/customer';
  constructor(private http:HttpClient) { }
  createCustomer(customer:any):Observable<any>{
    return this.http.post(this.baseUrl,customer);
  }

  getCustomersList():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getCustomer(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCustomer(customer:Customer):Observable<any>{
    return this.http.put(`${this.baseUrl}`+`/update`,customer);
  }

  deleteCustomer(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(this.baseUrl);
  }

  getCustomersByAge(age:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }
}
