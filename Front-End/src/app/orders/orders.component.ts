import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Models/Order';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
 order : Order[]
  constructor(private http: HttpClient) { }


  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('user'))['result']["_id"]);

    this.http.post('http://localhost:8118/user/orders', {
      currentId: JSON.parse(localStorage.getItem('user'))['result']["_id"]
    }).subscribe(result => {
      this.order =result["docs"]
    })
  }


}
