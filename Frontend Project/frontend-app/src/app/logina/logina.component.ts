import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logina',
  templateUrl: './logina.component.html',
  styleUrls: ['./logina.component.css']
})
export class LoginaComponent implements OnInit {
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeOfUser:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService,public router:Router) { }

  ngOnInit(): void {
  }

  signIn(){
    let login = this.loginRef.value;
    console.log(login);
    this.ls.signIn(login).subscribe({
      next:(result:any)=>{
        console.log(result);
        if(result=="Admin sucessfully login"){
            sessionStorage.setItem("userDetails",login.emailid);
            this.router.navigate(["adminHome"])
        }else if(result=="User successfully login"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["userHome"])
        }
        else if(result=="employee successfully login")
        {
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["employeeHome"])
        }
        else {
            this.msg=result;
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

}
