import { Component, OnInit } from '@angular/core';
import { SessionDataService } from "../session-data/session-data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string; 
  message: string;

  constructor(private data: SessionDataService, private router: Router) { }

  ngOnInit() {
}

submitLogin() {
  this.data
    .login(this.email, this.password)
    .subscribe (
      user => {
        if (user) {
          this.router.navigate(['/my-listings']);
        } else {
          this.message = 'could not log in with provided credentials';
        }
      },

      e => this.message = 'ruh roh' + e
    );
}

submitThisForm() {

}



}
