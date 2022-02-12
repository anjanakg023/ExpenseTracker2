import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExpensetrackerService } from '../shared/expensetracker.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId: number;
  constructor(public expService: ExpensetrackerService, private route: ActivatedRoute,
    private toastrService: ToastrService, private router:Router) { }

  ngOnInit(): void {

    //get userId from ActivateRoute
    this.userId = this.route.snapshot.params['userId'];
    console.log(this.userId);
    
    //get user by Id
    if (this.userId!=0 || this.userId!=null) {
      //get user
      this.expService.getUserById(this.userId).subscribe(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
    }

  }

  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.expService.formData.UserId;

    //insert or update
    if (addId == 0 || addId == null) {
      this.insertUserRecord(form);
    }
    else {
      //update
      this.updateUserRecord(form);
     }


  }
  //insert
  insertUserRecord(form?: NgForm) {
    console.log("inserting a record...");
    this.expService.insertUser(form.value).subscribe(
      (result) => {
        console.log(result);
        //call resetform for cln the contents
        this.resetForm(form);
        this.toastrService.success('User record has been inserted');
        this.router.navigateByUrl('/userhome');
      },
      (error) => {
        console.log(error);

      }
    )

  }

  //update
  updateUserRecord(form?: NgForm) {
    console.log("updatinging a record...");
    this.expService.updateUser(form.value).subscribe(
      (result) => {
        console.log(result);
//call resetform for cln the contents
        this.resetForm(form)
        this.toastrService.success('User record has been updated');
        this.router.navigateByUrl('/userhome');
      },
      (error) => {
        console.log(error);

      }
    )

  }

  //clear all contents after submit  --initialization
  resetForm(form? : NgForm){
    if (form != null) {
      form.resetForm();
      
    }
  }

}
