import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { LayoutComponent } from './layout.component';
import { PackagesComponent } from './packages.component';
// import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PackagesRoutingModule,
        ChartModule
    ],
    declarations: [
        LayoutComponent,
        PackagesComponent,
    ]
})
export class PackagesModule { }