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
    const min = dataTimeMin.getDate().toString() + '.' + dataTimeMin.getMonth().toString() + '.' + dataTimeMin.getFullYear().toString() +
    ' ' + dataTimeMin.getHours().toString() +  ':' + dataTimeMin.getMinutes().toString();
    const max = dataTimeMax.getDate().toString() + '.' + dataTimeMax.getMonth().toString() + '.' + dataTimeMax.getFullYear().toString() +
    ' ' + dataTimeMax.getHours().toString() +  ':' + dataTimeMax.getMinutes().toString();
    return this.defaultService.getSensorHistoryById( id, min, max, 100);
  }

  getSensor(id: number): Observable<SensorData> {
    return this.defaultService.getSensorById(id );
  }
 }
