import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  public products: Array<Product> = [];
  constructor() { }

  ngOnInit() {
    this.products = [
      { id: 1, name: "Kurta", desc: 'test', price: 200, image: "assets/images/products/1/photo.jpg" },
      { id: 2, name: "Kurta", desc: 'test', price: 200, image: "assets/images/products/2/photo.jpg" },
      { id: 3, name: "Kurta", desc: 'test', price: 200, image: "assets/images/products/3/photo.jpg" },
      { id: 1, name: "Kurta", desc: 'test', price: 200, image: "assets/images/products/1/photo.jpg" },
      { id: 2, name: "Kurta", desc: 'test', price: 200, image: "assets/images/products/2/photo.jpg" },
      { id: 3, name: "Kurta", desc: 'test', price: 200, image: "assets/images/products/3/photo.jpg" },
      { id: 1, name: "Kurta", desc: 'test', price: 200, image: "assets/images/products/1/photo.jpg" },
      { id: 2, name: "Kurta", desc: 'test', price: 200, image: "assets/images/products/2/photo.jpg" },
      { id: 3, name: "Kurta", desc: 'test', price: 200, image: "assets/images/products/3/photo.jpg" }
    ];
  }
}
