import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';

import { ProductListComponent } from './pages/product-list/product-list.component';
import { ListingComponent } from './components/listing/listing.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';



@NgModule({
  declarations: [ProductListComponent, ListingComponent, ProductCategoryComponent, ProductFilterComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
