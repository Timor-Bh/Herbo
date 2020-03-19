import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/Models/Order';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
@Input() Carts : Order;
  constructor() { }

  ngOnInit() {
  }

}
