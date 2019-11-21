import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';




@Component({
  selector: 'md-sensor-graph',
  templateUrl: './sensor-graph.component.html',
  styleUrls: ['./sensor-graph.component.scss']
})
export class SensorGraphComponent implements OnInit {

  public maxXscale = 1000;
  public myvaluesY: number[];
  public myvaluesX: number[];
  public startTime: Date = new Date(2019, 9, 31, 9, 26, 15, 18) ;
  public endTime: Date = new Date(2019, 9, 31, 9, 26, 15, 18) ;
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        fontColor: 'rgba(0,0,0,1)',
        fontSize: 26,
      },
    },
    elements: {
      point: {
        radius: 0.1,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        display: 'false',
        type: 'time',
        ticks: {
          fontColor: 'rgba(0,0,0,1)',
          fontSize: 26,
          autoSkip: true,
          display: false,
        },
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          gridLines: {
            color: 'rgba(32,18,171,0.5)',
          },
          ticks: {
            fontColor: 'rgba(32,18,171,1)',
            fontSize: 26,
          },
          scaleLabel: {
            display: true,
            labelString: 'temperature / °C',
            fontColor: 'rgba(32,18,171,1)',
            fontSize: 26,
         }
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(235,140,0,0.5)',
          },
          ticks: {
            fontColor: 'rgba(235,140,0,1)',
            fontSize: 26,
          },
          scaleLabel: {
            display: true,
            labelString: 'pressure / bar',
            fontColor: 'rgba(235,140,0,1)',
            fontSize: 26,
         }
        }
      ]
    },
    annotation: {
    }
  };
  public lineChartColors: Color[] = [
    { // dark blue
      backgroundColor: 'transparent',
      borderColor: 'rgba(22,13,120,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // light blue
      backgroundColor: 'transparent',
      borderColor: 'rgba(32,18,171,0.6)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // weidmueller
      backgroundColor: 'rgba(235,140,0,0.21)',
      borderColor: 'rgba(235,140,0,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(235,140,0,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';


  constructor() { }

  ngOnInit() {
    this.setChartData();
  }

  public setChartData(): void {
    let myValuesY: number[] = [];
    let myValuesX: number[] = [];
    let myValues: any[] = [];
    for (let i = 0; i < 1000; i++) {
      myValuesY.push(i / 999 * 60);
    }
    for (let i = 0; i < 1000; i++) {
      myValuesX.push(i / 999 * 6);
    }
    for (let i = 0; i < 1000; i++) {
      myValues.push({x: myValuesX[i], y: myValuesY[i]});
    }

    this.lineChartData = [
      { data: myValues,
        label: 'TemperatureS1' },
      { data: [
        {x: 0, y: 10},
        {x: 1, y: 11},
        {x: 2, y: 20},
        {x: 3, y: 11},
        {x: 4, y: 10},
        {x: 5, y: 8},
        {x: 6, y: 40}],
        label: 'TemperatureS2' },
      { data: [
          {x: 0, y: 2},
          {x: 1, y: 6},
          {x: 2, y: 9},
          {x: 3, y: 30},
          {x: 4, y: 30},
          {x: 5, y: 40},
          {x: 6, y: 20}],
          label: 'PressureS1', yAxisID: 'y-axis-1' },
    ];
  }

}
