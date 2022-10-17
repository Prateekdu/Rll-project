import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
  user:string ="";
  constructor(private router:Router) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.user=obj;
    }
  }

  logout() {
    sessionStorage.removeItem("userDetails");
    this.router.navigate(["login"]);
  }

}
