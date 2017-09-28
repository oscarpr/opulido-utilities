import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { NgModule } from '@angular/core';


import { MatSidenavModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        RouterModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule { }
