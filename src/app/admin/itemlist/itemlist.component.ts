import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensetrackerService } from 'src/app/shared/expensetracker.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {
  page: number =1;
  filter:string;

  constructor(public expensetrackerService:ExpensetrackerService,private router:Router) { }

  ngOnInit(): void {
    this.expensetrackerService.ListItems();
  }

}
