import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Product } from '../Models/Product';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit {
  Category = "ourproducts";
  Products: Product[] ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('user/products/'+ this.Category )
    .subscribe(result => {this.Products = result ['products']; });
  }
}
