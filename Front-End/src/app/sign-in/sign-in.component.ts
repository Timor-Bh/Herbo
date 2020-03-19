import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { User } from '../Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

Email;
Password;
key = 'user';
connectionStatus;

SignInStat= false;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {

    console.log(this.SignInStat);
  }

  onLogin() {
    if (this.Email !== ' ' && this.Password !== ' ' ){
      this.http.post('log/In', {
      email : this.Email,
      Password : this.Password
    }).subscribe(result => {
      console.log(result);
      // tslint:disable-next-line: triple-equals
      if (result['Message'] == 'Login Success') {
        localStorage.setItem(this.key,JSON.stringify(result));
        console.log(JSON.parse(localStorage.getItem(this.key)));
        this.connectionStatus = true;
        this.router.navigateByUrl("/profile")
      } else {
        console.log( "Login Failed")
      }
    });
    }
    else{
      console.log( "Login Failed")
    }


  }
}
