import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensetrackerService } from 'src/app/shared/expensetracker.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  constructor(private router:Router,public expService: ExpensetrackerService) { }
loggedId:string
  ngOnInit(): void {
    this.loggedId=localStorage.getItem("USERNAME")
  }

  //edit employee
  updateUser(userId:number){
    console.log(userId);
    //navigate to edit form with selected employee details
    this.router.navigate(['employee',userId])
  }

}
