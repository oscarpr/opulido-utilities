import { SidebarModule } from './sidebar/sidebar.module';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ExceltojsonComponent } from './exceltojson/exceltojson.component';


const routes: Route[] = [
	{ path: 'exceltojson', loadChildren: './exceltojson/exceltojson.module#ExceltoJSONModule' }
]

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(routes),
		HeaderModule,
		SidebarModule,
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
