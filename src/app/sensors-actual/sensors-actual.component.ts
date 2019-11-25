import { Component, OnInit } from '@angular/core';
import { SensordataService } from '../sensordata.service';
import { SensordataAndName } from '../sensordata-and-name';

@Component({
  selector: 'md-sensors-actual',
  templateUrl: './sensors-actual.component.html',
  styleUrls: ['./sensors-actual.component.scss']
})
export class SensorsActualComponent implements OnInit {

  public actualSensorDatas: SensordataAndName[] = [];

  constructor(private sensordataService: SensordataService) { }

  ngOnInit() {
    this.getActualSensorData();
  }

  getActualSensorData(): void {
    this.sensordataService.getSensors().subscribe(sensors => {
      sensors.forEach(sensor => {
        this.sensordataService.getSensor(sensor.id).subscribe( actualSensorData => {
        this.actualSensorDatas.push({name: sensor.name, sensordata: actualSensorData});
        });
      });
      });
  }

}
