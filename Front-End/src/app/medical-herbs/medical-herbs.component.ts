import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { Product } from '../Models/Product';

@Component({
  selector: 'app-medical-herbs',
  templateUrl: './medical-herbs.component.html',
  styleUrls: ['./medical-herbs.component.scss']
})
export class MedicalHerbsComponent implements OnInit {
  Category = "medicalherbs";
  Products: Product[] ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8118/user/products/'+ this.Category )
    .subscribe(result => {this.Products = result['products']; });
    console.log(this.Products);
  }
}
