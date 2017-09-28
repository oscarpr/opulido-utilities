import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdButton } from "@angular/material";
import * as XLSX from 'xlsx';

declare var jQuery: any;

@Component({
	selector: 'app-exceltojson',
	templateUrl: './exceltojson.component.html',
	styleUrls: ['./exceltojson.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExceltojsonComponent implements OnInit {

	propertiessource: string = 'D';
	settings: Array<Object>;

	settingsForm: FormGroup;
	result: Array<Object>;

	constructor(private fb: FormBuilder) {
		this.settings = new Array<Object>();
		this.settingsForm = this.fb.group({
			propertyName: ['', Validators.required],
			columnNumber: ['', Validators.required]
		});
	}

	ngOnInit() { }


	private addSetting(): void {
		console.log(this.settingsForm.valid);
		
		if (this.settingsForm.valid) {
			let setting: Object = this.settingsForm.value;
			this.settings.push(setting);
			this.settingsForm.reset();
		}
	}


	private onFileLoaded(file: any) {
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];

			this.result = XLSX.utils.sheet_to_json(ws, { header: 1 });
			this.result = this.proccessResults(this.propertiessource);
		}
		reader.readAsBinaryString(file);
	}


	private proccessResults(propertiessource: string): Array<any> {

		if (propertiessource === 'C') {
			return this.customSettings(this.result, this.settings);
		}

		if (propertiessource === 'D') {
			return this.defaultSettings(this.result);
		}
	}


	private defaultSettings(data: Array<any>): Array<Object> {
		let properties: Array<string> = data[0];

		data.splice(0, 1);

		properties = properties.map(prop => {
			return prop.replace(/\s/, '').toLocaleLowerCase();
		});

		data = data.map((row: Array<string>) => {
			let aux: Object = {};
			properties.forEach((prop: string, index) => {
				aux[prop] = row[index];
			});
			return aux;
		});

		return data;
	}


	private customSettings(data: Array<any>, settings: Array<any>): Array<Object> {

		let response: Array<Object> = [];
		data.splice(0, 1);

		response = data.map((reg: Array<string>) => {
			let aux: Object = {};

			settings.forEach((setting: any) => {
				aux[setting['propertyName']] = reg[setting['columnNumber']];
			});

			return aux;

		});

		return response;
	}


	private downloadJSON(button: MdButton) {
		let downloadButton = jQuery(button._elementRef.nativeElement);

		let data = JSON.stringify(this.result, null, '\t');


		downloadButton.attr('href', `data:text/json;charset=utf-8,${encodeURIComponent(data)}`);

		downloadButton.attr('download', 'excel.json');
	}

}
