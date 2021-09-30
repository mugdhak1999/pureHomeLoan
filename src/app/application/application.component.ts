import { Component, OnInit } from '@angular/core';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  username:any;
  appid:any;
  constructor(private service:PersonaldetailsService) { }

  ngOnInit(): void {
    this.appid=sessionStorage.getItem('appid');
  }

}
