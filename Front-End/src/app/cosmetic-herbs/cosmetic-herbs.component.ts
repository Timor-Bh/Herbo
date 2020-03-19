import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Product } from '../Models/Product';


@Component({
  selector: 'app-cosmetic-herbs',
  templateUrl: './cosmetic-herbs.component.html',
  styleUrls: ['./cosmetic-herbs.component.scss']
})
export class CosmeticHerbsComponent implements OnInit {
  Category = 'cosmeticherbs';
  Products: Product[] ;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('user/products/' + this.Category )
    .subscribe(result => {this.Products = result ['products']; });
    console.log(this.Products);
  }

}
