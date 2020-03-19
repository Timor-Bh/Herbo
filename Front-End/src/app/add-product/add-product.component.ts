import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { newProduct } from '../Models/PostProduct';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newProduct: newProduct;
  ProductName;
  Description;
  Categorie;
  Price;
  AvailableQuantity;
  Photo;
  key = "user";
 // User = JSON.parse(localStorage.getItem(this.key._id));

  constructor(private http: HttpClient) { }
  edit;
  onCancel() {
    this.edit  = false;
      }
      onEdit() {
    this.edit = true;
      }
  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem(this.key))["result"]["_id"]);

  }

  onPost(){

    this.newProduct  = {
    name: this.ProductName,
    description : this.Description,
    category: this.Categorie,
    price: this.Price,
    availableQuantity: this.AvailableQuantity,
    photo: this.Photo,
    Sellerid:JSON.parse(localStorage.getItem(this.key))["result"]["_id"],
 }
    this.http.post( 'seller/product/add', this.newProduct)
    .subscribe(result => console.log(result));
    console.log(this.newProduct);

  }

}
