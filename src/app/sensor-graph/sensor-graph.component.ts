import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Chart } from 'chart.js';
import * as ChartZoom from 'chartjs-plugin-zoom';
import { SensordataService } from '../sensordata.service';
import { Observable, of } from 'rxjs';
import { SensorDataHistory } from '../sensordata-swagger';
import { SpanSelectionComponent } from '../span-selection/span-selection.component';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'md-sensor-graph',
  templateUrl: './sensor-graph.component.html',
  styleUrls: ['./sensor-graph.component.scss']
})
export class SensorGraphComponent implements OnInit {

  @Input() dataTimeRange: Date[];
  public graphTitle = 'Machine 1';
  public sensorCount = 0;
  public firstFetch = false;
  public maxXscale = 1000;
  public timeFormat = 'MM/DD/YYYY HH:mm';
  public myvaluesY: number[];
  public myvaluesX: number[];
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        fontColor: 'rgba(0,0,0,1)',
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
          },
          scaleLabel: {
            display: true,
            labelString: 'temperature / °C',
            fontColor: 'rgba(32,18,171,1)',
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
          },
          scaleLabel: {
            display: true,
            labelString: 'pressure / bar',
            fontColor: 'rgba(235,140,0,1)',
         }
        }
      ]
    },
    annotation: {}
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
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

  constructor(private sensordataService: SensordataService) { }

/**
 * Fetches sensor data asynchron
 * adds plugin for zooming
 * sets the option for vizsalization
 */
  ngOnInit() {
    this.dataTimeRange = [new Date(2019, 0, 23, 15, 50), new Date(2019, 10, 23, 15, 50)];
    this.getSensorData();
  }

/*
 * Gets the sensors from central database by subscibing get request of sensordataService,
 * iterates fetched sensors to get history of every single one from database
 * and puts the fetched data rows into the lineChartData
 * reassignes another axis for pressure sensor
 */
  public getSensorData() {
    this.sensordataService.getSensors().subscribe(sensors => {
      this.lineChartData = [];
      sensors.forEach(sensor => {
        console.log('Sensor: ', sensor);
        this.sensordataService.getSensorHistory(sensor.id, this.dataTimeRange[0], this.dataTimeRange[1]).subscribe(sensorDataHistory => {
          const data: Chart.ChartPoint[] = [];
          sensorDataHistory.values.forEach( value => {
            data.push({x: new Date(value.date), y: value.value});
          });
          this.lineChartData.push({ data, label: sensor.name, yAxisID: sensor.type === 'pressure' ? 'y-axis-1' : null });
        });
      });
    });
  }

  /*
  *
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataTimeRange) {
      this.getSensorData();
    }
  }

  ngAfterContentInit(): void {
   this.getSensorData();
  }
}