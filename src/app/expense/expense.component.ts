import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensetrackerService } from '../shared/expensetracker.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  page: number =1;
  filter:string;
  constructor(public expensetrackerService:ExpensetrackerService,private router:Router) { }

  ngOnInit(): void {
    this.expensetrackerService.ListExpenses();
  }

}
