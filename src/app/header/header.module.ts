import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        MatToolbarModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule { }