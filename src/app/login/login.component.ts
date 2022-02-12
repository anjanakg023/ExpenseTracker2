import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Login} from '../shared/login';
import{AuthService} from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 //declare variables
 loginForm!:FormGroup;
 isSubmitted=false;
 error='';
 loginUser:any=new Login();
  constructor(private formBuilder:FormBuilder,
    private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
     //create a reactive Form model
     this.loginForm=this.formBuilder.group(
      {
        //formControlName Fields  (mention username and password)
         LoginId:['',[Validators.required]],
         Password:['',[Validators.required]]
      }
    )
  }
   //get controls for validation
   get formControls(){
    return this.loginForm.controls;
  }

  //login verify for credentials
  loginCredentials(){
    this.isSubmitted=true;
    alert("login")

    if(this.loginForm.invalid){
      console.log("submitted with INVALID")
      //this.error="";
      return;

    }
    if(this.loginForm.valid){
      console.log("submitted with VALID")
      this.error="";
      //calling method from authservice --Authentication and 
      this.authService.loginVerify(this.loginForm.value)
      .subscribe(
        data=>{
          console.log(data);
          this.loginUser=data;
          console.log(this.loginUser.LogId);
          
          //UserName,RoleId and Token
          sessionStorage.setItem('JwtTOKEN',this.loginUser.token)
          
          

          //check the role based on roleid,it redirects to respective component
          if(this.loginUser.LoginId=="ro01"){
            console.log("Admin");
            localStorage.setItem("USERNAME",this.loginUser.LoginId)
            sessionStorage.setItem("USERNAME",this.loginUser.LoginId)
            this.router.navigateByUrl('/admin');

          }
          else if(this.loginUser.LoginId !=null){
            console.log("users")
            localStorage.setItem("USERNAME",this.loginUser.LoginId)
            sessionStorage.setItem("USERNAME",this.loginUser.LoginId)
            this.router.navigateByUrl('/userhome');
          }
          else{
            this.error="sorry! Not authenticate/authorize to access this module"
          }
        },
        error=>{
          this.error="invalid username or password.try again"
        }
      )
    }
  }

}
