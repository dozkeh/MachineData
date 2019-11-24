import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DefaultService } from './sensordata-swagger/api/default.service';
import { Sensor, SensorData, SensorDataHistory } from './sensordata-swagger';


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
    //return this.defaultService.getSensorHistoryById( id, dataTimeMin.toString() , dataTimeMax.toString(), null);
    return this.defaultService.getSensorHistoryById( id, null , null, 1000 );
  }

  getSensor(id: number): Observable<SensorData> {
    return this.defaultService.getSensorById(id );
  }
 }
