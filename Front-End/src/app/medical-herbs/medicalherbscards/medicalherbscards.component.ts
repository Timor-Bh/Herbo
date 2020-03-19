import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Product } from '../../Models/Product';

@Component({
  selector: 'app-medicalherbscards',
  templateUrl: './medicalherbscards.component.html',
  styleUrls: ['./medicalherbscards.component.scss']
})
export class MedicalherbscardsComponent implements OnInit {
  @Input() Product: Product;
  key= 'productId';
  ProductId;

  constructor(private http: HttpClient, private router: Router) { }

  onSeeProduct() {
    localStorage.setItem(this.key, (this.Product._id));
    this.router.navigateByUrl("/product")

  }
  ngOnInit() {
  }
}
