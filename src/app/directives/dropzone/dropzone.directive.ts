import { Directive, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

declare var Dropzone: any;

@Directive({
    selector: '[dropzone]'
})
export class DropzoneDirective implements OnInit {

    @Output() fileLoaded: EventEmitter<any> = new EventEmitter();

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        const _this = this;
        const dropzone: any = new Dropzone(this.el.nativeElement, {
            maxFiles: 1,
            acceptedFiles: 'application/xls,application/excel,application/vnd.ms-excel,application/vnd.ms-excel; charset=binary,application/msexcel,application/x-excel,application/x-msexcel,application/x-ms-excel,application/x-dos_ms_excel',
            init: function () {
                this.on('addedfile', function (file) {
                    _this.fileLoaded.emit(file);
                });
            }
        });
    }
}
