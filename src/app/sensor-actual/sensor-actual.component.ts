import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SensorData } from '../sensordata-swagger';
import { SensordataAndName } from '../sensordata-and-name';


@Component({
  selector: 'md-sensor-actual',
  templateUrl: './sensor-actual.component.html',
  styleUrls: ['./sensor-actual.component.scss']
})
export class SensorActualComponent implements OnInit {

  @Input() sensorDataAndName: SensordataAndName;

  constructor() { }

  ngOnInit() {
  }

  public getValueRound(): string {
    return this.sensorDataAndName.sensordata.value.toFixed(2);
  }

}
