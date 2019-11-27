import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SensorData } from '../sensordata-swagger';
import { SensordataAndName } from '../sensordata-and-name';


@Component({
  selector: 'md-sensor-actual',
  templateUrl: './sensor-actual.component.html',
  styleUrls: ['./sensor-actual.component.scss']
})

/*
 * This class holds data of the card to show the current sensor value
 */
export class SensorActualComponent implements OnInit {

  @Input() sensorDataAndName: SensordataAndName;

  constructor() { }

  ngOnInit() {
  }

/*
 * @return current sensor value reduced on two decimal places
 */
  public getValueRound(): string {
    return this.sensorDataAndName.sensordata.value.toFixed(2);
  }

}
