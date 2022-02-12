import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensetrackerService } from 'src/app/shared/expensetracker.service';

@Component({
  selector: 'app-expenselist',
  templateUrl: './expenselist.component.html',
  styleUrls: ['./expenselist.component.scss']
})
export class ExpenselistComponent implements OnInit {
  page: number =1;
  filter:string;
  constructor(public expensetrackerService:ExpensetrackerService,private router:Router) { }

  ngOnInit(): void {
    this.expensetrackerService.ListExpenses2();
  }

}
