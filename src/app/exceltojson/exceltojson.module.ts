import { DropzoneModule } from './../directives/dropzone/dropzone.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExceltojsonComponent } from './exceltojson.component';

import {
    MatButtonModule, MatCardModule, MatRadioModule, MatInputModule, MatListModule,
    MatTableModule
} from '@angular/material';


const routes: Routes = [
    { path: '', component: ExceltojsonComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        DropzoneModule
    ],
    declarations: [
        ExceltojsonComponent
    ]
})
export class ExceltoJSONModule { }
