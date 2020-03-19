import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { Product } from '../../Models/Product';

@Component({
  selector: 'app-cosmeticherbscards',
  templateUrl: './cosmeticherbscards.component.html',
  styleUrls: ['./cosmeticherbscards.component.scss']
})
export class CosmeticherbscardsComponent implements OnInit {
  @Input() Product: Product;
  key = 'productId';
  ProductId;

  constructor(private http: HttpClient, private router: Router) { }

  onSeeProduct() {
    localStorage.setItem(this.key, (this.Product._id));
    this.router.navigateByUrl('/product');

  }
  ngOnInit() {
  }
}
