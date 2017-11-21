import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '', component: LayoutComponent,
		children:
			[
				{ 
					path: 'exceltojson', 
					loadChildren: '../exceltojson/exceltojson.module#ExceltoJSONModule'
				}
			]
	}
]

@NgModule({
	imports: [
		CommonModule,
		HeaderModule,
		SidebarModule,
		RouterModule.forChild(routes)
	],
	declarations: [LayoutComponent]
})
export class LayoutModule { }
