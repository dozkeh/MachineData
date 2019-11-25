import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SensorData } from '../sensordata-swagger';


@Component({
  selector: 'md-sensor-actual',
  templateUrl: './sensor-actual.component.html',
  styleUrls: ['./sensor-actual.component.scss']
})
export class SensorActualComponent implements OnInit {

  @Input() sensorData: SensorData;

  constructor() { }

  ngOnInit() {
  }

}
