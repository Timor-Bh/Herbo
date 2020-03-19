import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Product } from '../Models/Product';
import { User } from '../Models/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Product: Product;
  User: User;
  ProductId;
  Productid = localStorage.getItem("productId");
  showcomments = 'Show comments';
  component = false ;


  OnShowComment() {
    // tslint:disable-next-line: no-conditional-assignment
    if (this.component === false) {
      this.component = true;
      this.showcomments = 'Hide comments';
    } else if (this.component === true) {
      this.component = false;
      this.showcomments = 'Show comments';
 }

    console.log(this.component);
  }
  OnCancel() {

  }

  constructor(private http: HttpClient,private router : Router) { }

  ngOnInit() {
    this.http.get('user/product/'+ this.Productid )
    .subscribe(result => {
      this.Product = result['product'];
    console.log(result['product']);
  });

  // this.http.post('http://localhost:8118/user/profile/'+ this.Productid )
  // .subscribe(result => {
  //   this.User = result['user'];
  //   console.log(result['user']);
  // });
  }

  buy(){
    console.log(JSON.parse(localStorage.getItem("user"))["result"]["_id"]);

    this.http.patch('user/product',{
productId : this.Productid,
currentId : JSON.parse(localStorage.getItem("user"))["result"]["_id"],
quantity : 5,

    }  )
    .subscribe(result => {
      this.router.navigateByUrl('/orders');
     // this.Product = result['product'];
  //  console.log(result);
  });

  }
  addToCart(){
    this.http.post('user/addtocart',{
      ProductId : this.Productid,
      currentId : JSON.parse(localStorage.getItem("user"))["result"]["_id"],
      quantity : 5,
  }).subscribe(result => {


    console.log(result);

  })
    // console.log(JSON.parse(localStorage.getItem("user"))["result"]["_id"]);


  }
}
