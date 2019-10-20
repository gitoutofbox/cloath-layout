import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DropDownDirective } from './directives/drop-down.directive';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';

@NgModule({
    declarations: [HeaderComponent, DropDownDirective, ModalWindowComponent],
    imports: [
        CommonModule
    ],
    exports:[HeaderComponent, DropDownDirective]
})
export class SharedModule { }
