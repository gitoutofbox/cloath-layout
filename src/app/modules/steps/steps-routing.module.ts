import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './pages/language/language.component';
import { UserSelectionComponent } from './pages/user-selection/user-selection.component';

const routes: Routes = [
    { path: 'select-language', component: LanguageComponent },
    { path: 'select-user', component: UserSelectionComponent },
    //{ path: '', component: LanguageComponent },
    { path: '', redirectTo: 'select-language', pathMatch: 'full' }
];

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StepsRoutingModule { }
