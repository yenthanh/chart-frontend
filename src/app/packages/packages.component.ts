import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'packages.component.html' })
export class PackagesComponent {
    account = this.accountService.accountValue;
    Highcharts: typeof Highcharts = Highcharts; // required
    chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
    chartOptions: Highcharts.Options = {
        series: [{
          data: [1, 2, 3],
          type: 'line'
        }]
      }; // required
    chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
    updateFlag: boolean = false; // optional boolean
    oneToOneFlag: boolean = true; // optional boolean, defaults to false
    runOutsideAngular: boolean = false; 
    constructor(private accountService: AccountService) { }
}