import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DefaultService } from './sensordata-swagger/api/default.service';
import { Sensor, SensorData, SensorDataHistory } from './sensordata-swagger';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class SensordataService {

  public sensors: Sensor[];
  public sensorDataHistory: SensorDataHistory;
  public sensorData: SensorData;

  constructor(private http: HttpClient, private defaultService: DefaultService) {
   }

  getSensors(): Observable<Sensor[]> {
    const myObserver: Observable<Sensor[]> = this.defaultService.getSensors();
    console.log(myObserver);
    return myObserver;
  }

  getSensorHistory(id: number, dataTimeMin: Date, dataTimeMax: Date): Observable<SensorDataHistory> {
    console.log(dataTimeMin.toLocaleString());
    console.log(dataTimeMax.toLocaleString());
    const min = moment(dataTimeMin, 'DD.MM.YYYY HH:mm').toLocaleString();
    const max = moment(dataTimeMax, 'DD.MM.YYYY HH:mm').toLocaleString();
    console.log(min);
    console.log(max);
    return this.defaultService.getSensorHistoryById( id, '01.04.2019 12:00' , '01.09.2019 14:00', 100);
    // return this.defaultService.getSensorHistoryById( id, null , null, 0 );
    //return this.defaultService.getSensorHistoryById( id, dataTimeMin.toLocaleString() , dataTimeMax.toLocaleString(), 1000);
  }

  getSensor(id: number): Observable<SensorData> {
    return this.defaultService.getSensorById(id );
  }
 }
