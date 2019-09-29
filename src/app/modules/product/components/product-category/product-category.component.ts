import { Component, OnInit } from '@angular/core';
import { Category } from "../../models/category.model"

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  public categories: Array<Category> = [];
  constructor() { }

  ngOnInit() {
    this.categories = [
      {
        id: 1,
        name: 'Cloathing',
        subCategory: [
          { id: 1, name: "Skirts" },
          { id: 2, name: "Shorts" },
          { id: 3, name: "T-shirts" },
          { id: 1, name: "Tops & Shirts" },
          { id: 2, name: "Jeans" }
        ]
      },
      {
        id: 2,
        name: 'Shoes',
        subCategory: [
          { id: 1, name: "Shoe1" },
          { id: 2, name: "Shoe2" },
          { id: 3, name: "T-Shoe" },
          { id: 1, name: "Tops shoe" },
          { id: 2, name: "Shoe3" }
        ]
      }
    ]
  }

}
