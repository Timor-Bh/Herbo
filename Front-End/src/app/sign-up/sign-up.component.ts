
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as CryptoJS from 'crypto-js';

import {SignUp} from '../Models/SignUp';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  SlideStat = 'User';
  UserType = this.SlideStat;
  email;
  FirstName;
  LastName;
  UserName;
  Password;
  ConfirmPassword;
  Gender;
  Age;
  Location;
  PhoneNumber;

  User: SignUp;

  SignUpStat = false;



  constructor(private http: HttpClient) {
  }

  ngOnInit() {
   /* if (){
      this.SignUpStat= true;
    }
    else{
      this.SignUpStat= false
    }*/
    console.log(this.UserType);
  }
  onSignUp() {
    let encrypt = CryptoJS.AES.encrypt(this.Password, "this.secretKey".trim()).toString();
    console.log(encrypt);

    this.User  = { accType: this.UserType,
      ProfileImage: 'https://ecoei.org/wp-content/uploads/2018/01/Man.png',
      email: this.email ,
      FirstName: this.FirstName ,
      LastName: this.LastName,
      UserName: this.UserName,
      Password: encrypt,
      Gender: this.Gender,
      Age: this.Age,
      Location: this.Location,
      PhoneNumber: this.PhoneNumber,

 };


    this.http.post( 'signup', this.User).subscribe(result => console.log(result));
    console.log(this.User);

  }
  onSlideStat() {
    if (this.SlideStat === 'User' ) {
      this.SlideStat = 'Seller';
    } else {
      this.SlideStat = 'User';
    }
    console.log(this.SlideStat);
  }

}
