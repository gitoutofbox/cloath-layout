import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  product: Product;
  selectedImage: any;
  constructor() { }

  ngOnInit() {
    this.product = {
        id: 1, name: "Kurta", desc: 'test', price: 200,
        images: [
          {id:1, path: "assets/images/products/1/photo.jpg"},
          {id:2, path: "assets/images/products/2/photo.jpg"},
          {id:3, path: "assets/images/products/3/photo.jpg"}
          
        ]
      };
      this.selectedImage = this.product.images[0];
  }

}
