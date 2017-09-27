import { Component, OnInit } from '@angular/core';
import { SessionDataService } from "../session-data/session-data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string; 
  message: string;

  constructor(private data: SessionDataService) { }

  ngOnInit() {
}

submitLogin() {
  this.data
    .login(this.email, this.password)
    .subscribe (
      user => this.message ='horray your name is ' + user.first_name,
      e => this.message = 'ruh roh' + e
    );
}

submitThisForm() {

}



}
