import { Directive, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

declare var Dropzone: any;

@Directive({
    selector: '[dropzone]'
})
export class DropzoneDirective implements OnInit {

    @Output('fileLoaded') _fileLoaded: EventEmitter<any> = new EventEmitter();

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        let _this = this;
        let dropzone: any = new Dropzone(this.el.nativeElement, {
            init: function () {
                this.on('addedfile', function (file) {
                    _this._fileLoaded.emit(file);
                });
            }
        });
    }
}