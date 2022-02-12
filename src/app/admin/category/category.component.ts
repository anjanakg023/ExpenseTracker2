import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensetrackerService } from 'src/app/shared/expensetracker.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  page: number =1;
  filter:string;
  constructor(public expService:ExpensetrackerService,private router:Router) { }

  ngOnInit(): void {
    this.expService.ListCategories();
  }
  
  //delete employee
  deleteCategory(categoryId:number){
    if(confirm('Are you sure you want to Delete this record?')){
      this.expService.deleteCategory(categoryId).subscribe(
        response=>{
          this.expService.bindListUsers();
        },
        error=>{
            console.log(error)
        }
      );
    }
  }

}
