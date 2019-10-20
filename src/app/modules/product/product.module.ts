import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ListingComponent } from './components/listing/listing.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ProductListComponent, ListingComponent, ProductCategoryComponent, ProductFilterComponent, ProductDetailComponent, ImageSliderComponent],
  imports: [
    CommonModule,
    
    //BrowserAnimationsModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
