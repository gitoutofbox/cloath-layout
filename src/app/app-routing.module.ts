import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule', data: {animation: 'home'} },
  { path: 'steps', loadChildren: './modules/steps/steps.module#StepsModule', data: {animation: 'steps'} },
  { path: 'product', loadChildren: './modules/product/product.module#ProductModule', data: {animation: 'product'} },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
