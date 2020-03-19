import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { Product } from '../../Models/Product';

@Component({
  selector: 'app-allproductscards',
  templateUrl: './allproductscards.component.html',
  styleUrls: ['./allproductscards.component.scss']
})
export class AllproductscardsComponent implements OnInit {
  @Input() Product: Product;
  ProductId;

  constructor(private http: HttpClient, private router: Router) { }

  onSeeProduct() {
    localStorage.setItem(this.ProductId, (this.Product._id));
    this.router.navigateByUrl("/product")

  }
  ngOnInit() {
  }

}
