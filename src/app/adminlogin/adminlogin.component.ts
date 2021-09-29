import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaldetailsService } from '../personaldetails.service';
import { Admindetails } from '../admindetails';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  AdminLogin=new FormGroup({
    Username:new FormControl(),
    Password:new FormControl()
  })
  message!: string;
  constructor(private service:PersonaldetailsService,private router:Router) { }

  ngOnInit(): void {
  }
  adminlogin()
  {
    console.log(this.AdminLogin)
    this.service.adminlogin(this.AdminLogin.value).subscribe(res=>{
      console.log(res)
      console.log('login successful')
      this.router.navigateByUrl('admin');
    },
    error=>this.message="Login Failed"

    )
  }


}
