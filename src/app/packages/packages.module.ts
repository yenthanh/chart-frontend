import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { LayoutComponent } from './layout.component';
import { PackagesComponent } from './packages.component';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PackagesRoutingModule,
        HighchartsChartModule
    ],
    declarations: [
        LayoutComponent,
        PackagesComponent,
    ]
})
export class PackagesModule { }