import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensetrackerService } from "src/app/shared/expensetracker.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  page: number =1;
  filter:string;

  constructor(public expensetrackerService:ExpensetrackerService,private router:Router) { }

  ngOnInit(): void {
    this.expensetrackerService.bindListUsers();
  }

  //delete employee
  deleteUser(userId:number){
    if(confirm('Are you sure you want to Delete this record?')){
      this.expensetrackerService.deleteUser(userId).subscribe(
        response=>{
          this.expensetrackerService.bindListUsers();
        },
        error=>{
            console.log(error)
        }
      );
    }
  }

}
