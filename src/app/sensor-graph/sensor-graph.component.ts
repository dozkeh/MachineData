import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Chart } from 'chart.js';
import * as ChartZoom from 'chartjs-plugin-zoom';
import { SensordataService } from '../sensordata.service';
import { Observable, of } from 'rxjs';
import { SensorDataHistory } from '../sensordata-swagger';


@Component({
  selector: 'md-sensor-graph',
  templateUrl: './sensor-graph.component.html',
  styleUrls: ['./sensor-graph.component.scss']
})
export class SensorGraphComponent implements OnInit {

  public graphTitle = 'Machine 1';
  public maxXscale = 1000;
  public timeFormat = 'MM/DD/YYYY HH:mm';
  public myvaluesY: number[];
  public myvaluesX: number[];
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    plugins: {
      zoom: {
        zoom: {
          enabled: true,
          mode: 'x'
        },
        rangeMax: {
          // Format of max pan range depends on scale type
          x: null,
          y: null
        },
      }
    },
    legend: {
      position: 'right',
      labels: {
        fontColor: 'rgba(0,0,0,1)',
        fontFamily: 'Roboto, monospace',
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
      xAxes: [{
        display: 'true',
        type: 'time',
        time: {
          parser: this.timeFormat,
          // round: 'day'
          tooltipFormat: 'DD/MM'
        },
        ticks: {
          fontColor: 'rgba(0,0,0,1)',
          fontSize: 26,
          fontFamily: 'Roboto, monospace',
          autoSkip: true,
          display: true,
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
            fontFamily: 'Roboto, monospace',
          },
          scaleLabel: {
            display: true,
            labelString: 'temperature / °C',
            fontColor: 'rgba(32,18,171,1)',
            fontSize: 26,
            fontFamily: 'Roboto, monospace',
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
            fontFamily: 'Roboto, monospace',
          },
          scaleLabel: {
            display: true,
            labelString: 'pressure / bar',
            fontColor: 'rgba(235,140,0,1)',
            fontSize: 26,
            fontFamily: 'Roboto, monospace',
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


  constructor(private sensordataService: SensordataService) { }

  ngOnInit() {

    Chart.pluginService.register(ChartZoom);
    this.getSensorData();
  }

  public getSensorData() {
    this.sensordataService.getSensors().subscribe(sensors => {
      this.lineChartData = [];
      sensors.forEach(sensor => {
        console.log('Sensor: ', sensor);
        this.sensordataService.getSensorHistory(sensor.id).subscribe(sensorDataHistory => {
          const data: Chart.ChartPoint[] = [];
          sensorDataHistory.values.forEach( value => {
            data.push({x: new Date(value.date), y: value.value});
          });
          console.log('Have data for sensor ', sensor, ': ', data);
          this.lineChartData.push({ data, label: sensor.name, yAxisID: sensor.type == 'pressure' ? 'y-axis-1' : null });
        });
      });
    });
  }

  /*public setChartData(): void {
    const myValuesY: number[] = [];
    const myValuesX: Date[] = [];
    const myValuesData1: any[] = [];
    const myValuesData2: any[] = [];
    const myValuesData3: any[] = [];
    let randNum: number;
    let myDate: Date = new Date('1995-12-17T03:24:00Z');
    for (let i = 0; i < 1000; i++) {
      randNum = Math.floor(Math.random() * (60 - 50 + 1)) + 50 * i / 999;
      myValuesY.push(randNum);
    }
    for (let i = 0; i < 1000; i++) {
      myDate = new Date(myDate.getTime() + 3000000);
      myValuesX.push( myDate );
    }
    console.log(myValuesX);

    for (let i = 0; i < 1000; i++) {
      myValuesData1.push({x: myValuesX[i], y: myValuesY[i]});
    }
    for (let i = 0; i < 1000; i++) {
      randNum = Math.floor(Math.random() * (50 - 50 + 1)) + 50 * i / 999;
      myValuesY.push(randNum);
    }
    for (let i = 0; i < 1000; i++) {
      myValuesData2.push({x: myValuesX[i], y: myValuesY[i]});
    }
    for (let i = 0; i < 1000; i++) {
      randNum = Math.floor(Math.random() * (60 - 10 + 1)) + 10 * i / 999;
      myValuesY.push(randNum);
    }
    for (let i = 0; i < 1000; i++) {
      myValuesData3.push({x: myValuesX[i], y: myValuesY[i]});
    }

    this.lineChartData = [
      { data: myValuesData1,
        label: 'TemperatureS1' },
      { data: myValuesData2,
        label: 'TemperatureS2' },
      { data: myValuesData3,
          label: 'PressureS1', yAxisID: 'y-axis-1' },
    ];
  }

    public timeToLaunch(): void{
    // Get the current date
    let currentDate = new Date();
    let targetDate = new Date('1995-12-17T03:24:00Z');

    // Find the difference between dates
   // const diff = (currentDate.Di) / 1000;

    /*var diff = Math.abs(Math.floor(diff));  

    // Check number of days until target
    days = Math.floor(diff/(24*60*60));
    sec = diff - days * 24*60*60;

    // Check number of hours until target
    hrs = Math.floor(sec/(60*60));
    sec = sec - hrs * 60*60;

    // Check number of minutes until target
    min = Math.floor(sec/(60));
    sec = sec - min * 60;
}*/

}
