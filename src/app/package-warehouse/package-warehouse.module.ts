import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PackageWarehouseRoutingModule } from './package-warehouse-routing.module';
import { LayoutComponent } from './layout.component';
import { PackageWarehouseComponent } from './package-warehouse.component';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PackageWarehouseRoutingModule,
        HighchartsChartModule
    ],
    declarations: [
        LayoutComponent,
        PackageWarehouseComponent,
    ]
})
export class PackageWarehouseModule { }