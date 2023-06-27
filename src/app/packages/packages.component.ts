import { Component } from '@angular/core';
// import * as Highcharts from 'highcharts';

import { Chart } from 'angular-highcharts';
import { AccountService } from '@app/_services';
import { PackagesService } from './packages.service';
import { PackageResponse } from './../_models/packages'; // Im
@Component({ templateUrl: 'packages.component.html' })
export class PackagesComponent {
  chart: Chart | undefined;
  account = this.accountService.accountValue;
  // Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  // chartOptions: Highcharts.Options = {
  //   series: [{
  //     data: [1, 2, 3],
  //     type: 'line',
  //   }]
  // }; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false;
  constructor(private accountService: AccountService, private packagesService: PackagesService) { }
  displayChart(response: PackageResponse) {
    console.log(response.data);
    // var char_data: Highcharts.Options  = {
    //   labels: response.labels,
    // };
    // Highcharts.chart('chartContainer', char_data);
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'ewewewew'
      },
      credits: {
        enabled: false
      },

      // label: '  Divided packages',
      // backgroundColor: "#D60000",
      // data: response.data.divided_packages,
      // borderColor: "#D60000",
      series: [{
        name: '  Add extra photos',
        color: "#36A2EB",
        type: 'line',
        data: response.data?.add_extra_photos,
      },
      {
        name: '  Divided packages',
        color: "#D60000",
        type: 'line',
        data: response.data?.divided_packages,
      },
      {
        name: '  Returned packages',
        color: "#F46300",
        data: response.data?.returned_packages,
        type: 'line',
      },
      {
        name: '  Picked-up packages',
        color: "#FFFF00",
        data: response.data?.picked_up_packages,
        type: 'line',
      },
      {
        name: '  Grouping packages',
        color: "#44DE28",
        data: response.data?.grouping_packages,
        type: 'line',
      },
      {
        name: '  Paid packages',
        color: "#0358B6",
        data: response.data?.paid_packages,
        type: 'line',
      },
      {
        name: '  Shipped packages',
        color: "#FF0000",
        data: response.data?.shipped_packages,
        type: 'line',
      },
      {
        name: '  Received packages',
        color: "#CF7DD1",
        data: response.data?.received_packages,
        type: 'line',
      },
      {
        name: '  Deleted packages',
        color: "#FF6384",
        data: response.data?.deleted_packages,
        type: 'line',
      }
      ]

      // series: [{
      //   name: 'Line 1',
      //   data: [1, 2, 3]
      // }]
    });
    this.chart = chart;
  }
  fetchItems() {
    this.packagesService.getItems().subscribe((response: PackageResponse) => {
      this.displayChart(response);
    });
  }

}