import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Product } from '../Models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Products: Product[] ;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('user/products' )
    .subscribe(result => {this.Products = result ['product']; });
  }
}
