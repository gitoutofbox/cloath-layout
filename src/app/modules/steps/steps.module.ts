import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsRoutingModule } from './steps-routing.module';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { LanguageComponent } from './pages/language/language.component';
import { UserSelectionComponent } from './pages/user-selection/user-selection.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [LanguageComponent, LanguageListComponent, UserSelectionComponent, UserListComponent],
  imports: [
    CommonModule,
    StepsRoutingModule
  ]
})
export class StepsModule { }
