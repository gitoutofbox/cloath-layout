import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/authentication';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'steps', loadChildren: './modules/steps/steps.module#StepsModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
