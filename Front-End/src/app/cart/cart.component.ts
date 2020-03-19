import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Models/Order';
HttpClient

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
Orders : Order[];
  constructor(private http : HttpClient) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('user'))['result']["_id"]);

    this.http.post('http://localhost:8118/user/cart', {
      currentId: JSON.parse(localStorage.getItem('user'))['result']["_id"]
    }).subscribe(result => {
      console.log(result);
      this.Orders =result["message"]


    })
  }
  buyCart(){

    this.Orders.forEach(product => {
      console.log(product._id);

      this.http.patch('http://localhost:8118/user/cart/buy', {
        currentId: JSON.parse(localStorage.getItem('user'))['result']["_id"],
        productId : product._id,
        quantity : 5
      }).subscribe(result => {
       console.log(result);

      })
      console.log();

        });

  }


}
