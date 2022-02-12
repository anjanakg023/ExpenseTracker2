import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';
import{Item} from './item';
import {Expense} from "./expense";
import{Category} from './category'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensetrackerService {
  users:User[];
  items:Item[];
  expenses:Expense[];
  categories:Category[];
  formData: User=new User();

  constructor(private httpClient:HttpClient) { }

  bindListUsers(){
    this.httpClient.get(environment.apiUrl+'/api/Users')
    .toPromise().then(
      response=>{
        console.log("from Service ");
        console.log(response);
        this.users=response as User[]
      }
    );
  }

  //delete Customer
  deleteUser(id:number){
    return this.httpClient.delete(environment.apiUrl+"/api/users/"+id);
  }

//get customer by id
  getUserById(id:number) : Observable<any>
  {
    return this.httpClient.get(environment.apiUrl +"/api/users/"+id);
  }

//insert User
insertUser(user:User) : Observable<any>
{
  return this.httpClient.post(environment.apiUrl + "/api/users",user);
}

//update employee
updateUser(user:User) : Observable<any>
{
  return this.httpClient.put(environment.apiUrl + "/api/users",user);
}

  //......................................
  //List Items in decending order
  ListItems(){
    this.httpClient.get(environment.apiUrl+'/api/items/getitems')
    .toPromise().then(
      response=>{
        console.log("from Service ");
        console.log(response);
        this.items=response as Item[]
      }
    );
  }

  //list expense for previous 2 months

  ListExpenses2(){
    this.httpClient.get(environment.apiUrl+'/api/expenses/getexpenses')
    .toPromise().then(
      response=>{
        console.log("from Service ");
        console.log(response);
        this.expenses=response as Expense[]
      }
    );
  }

  //.................................................................
  //expense
  ListExpenses(){
    this.httpClient.get(environment.apiUrl+'/api/expenses/viewexpenses')
    .toPromise().then(
      response=>{
        console.log("from Service ");
        console.log(response);
        this.expenses=response as Expense[]
      }
    );
  }

  //get category
  ListCategories(){
    this.httpClient.get(environment.apiUrl+'/api/categories')
    .toPromise().then(
      response=>{
        console.log("from Service ");
        console.log(response);
        this.categories=response as Category[]
      }
    );
  }

  //delete category
  deleteCategory(id:number){
    return this.httpClient.delete(environment.apiUrl+"/api/categories/"+id);
  }


}
