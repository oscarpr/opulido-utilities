import { DropzoneDirective } from './dropzone.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        DropzoneDirective
    ],
    exports: [
        DropzoneDirective
    ]
})
export class DropzoneModule { }
