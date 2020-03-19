import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../Models/Product';
import {SignUp} from '../Models/SignUp';
import { Router } from '@angular/router';
import { User } from '../Models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  key = 'user';
  UserType = JSON.parse(localStorage.getItem(this.key))["result"]["accType"];

  ProfileImage = JSON.parse(localStorage.getItem(this.key))["result"]["ProfileImage"];
  email = JSON.parse(localStorage.getItem(this.key))["result"]["email"];
  FirstName = JSON.parse(localStorage.getItem(this.key))["result"]["FirstName"] ;
  LastName = JSON.parse(localStorage.getItem(this.key))["result"]["LastName"] ;
  UserName = JSON.parse(localStorage.getItem(this.key))["result"]["UserName"] ;
  Password = JSON.parse(localStorage.getItem(this.key))["result"]["Password"] ;
  Gender = JSON.parse(localStorage.getItem(this.key))["result"]["Gender"] ;
  Age = JSON.parse(localStorage.getItem(this.key))["result"]["Age"] ;
  Location = JSON.parse(localStorage.getItem(this.key))["result"]["Location"];
  PhoneNumber = JSON.parse(localStorage.getItem(this.key))["result"]["PhoneNumber"] ;
  UserId = JSON.parse(localStorage.getItem(this.key))["result"]["_id"] ;

  edit = false;

  newProfileImage;
  newemail;
  newFirstName ;
  newLastName;
  newUserName ;
  newPassword ;
  newGender;
  newAge;
  newLocation ;
  newPhoneNumber;
  newUserType;

EditedUser:SignUp;
User: User;

constructor(private http: HttpClient,private router: Router ) {
}
onDelete(){
  this.http.patch('http://localhost:8118/user/profile/delete', this.UserId)
  .subscribe ( result => {
    if (result[' message'] === 'Story Liked!!') {
    this.User.accStatus = 'disabled';
    }
  });
}
// Edit Profile
onEdit() {
  this.edit = true;
    }
  onCancel() {
this.edit  = false;
  }
  onValidate() {
    this.EditedUser  = { accType: this.newUserType,
      ProfileImage: this.newProfileImage,
      email: this.newemail ,
      FirstName: this.newFirstName ,
      LastName: this.newLastName,
      UserName: this.newUserName,
      Password: this.newPassword,
      Gender: this.Gender,
      Age: this.newAge,
      Location: this.newLocation,
      PhoneNumber: this.newPhoneNumber,
 };
    this.http.patch( 'http://localhost:8118/user/profile/edit', this.EditedUser).subscribe(docs =>{
      console.log(docs);
      localStorage.setItem(this.key, JSON.stringify(docs));
    })
    console.log(this.EditedUser);
    this.edit = false;
  }

  ngOnInit() {
  }

}
