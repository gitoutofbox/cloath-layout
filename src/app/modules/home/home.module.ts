import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { NewSeasonComponent } from './components/new-season/new-season.component';

@NgModule({
  declarations: [HomeComponent, NewSeasonComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
