import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { DefaultService } from './sensordata-swagger/api/default.service';
import { Sensor, SensorData, SensorDataHistory } from './sensordata-swagger';


@Injectable({
  providedIn: 'root'
})

/*
* Connects API from [[DefaultService]]
*/
export class SensordataService {

  public sensors: Sensor[];
  public sensorDataHistory: SensorDataHistory;
  public sensorData: SensorData;

  constructor(private http: HttpClient, private defaultService: DefaultService) {
   }

/*
* Fetches data of all sensors due to model [[Sensor]] in database
* @return myObserver Observable<Sensor[]> one can subscripe to get the event
*/
  getSensors(): Observable<Sensor[]> {
    const myObserver: Observable<Sensor[]> = this.defaultService.getSensors();
    console.log(myObserver);
    return myObserver;
  }

/*
* Fetches data of the history values of one sensor due to model [[SensorDataHistory]]
* @param id Id of the sensor to fetch data from
* @param from date of the start time
* @param to date of the end time
* @return myObserver Observable<SensorDataHirtsory[]> one can subscripe to get the event
*/
  getSensorHistory(id: number, from: Date, to: Date): Observable<SensorDataHistory> {
    const min = from.getDate().toString() + '.' + from.getMonth().toString() + '.' + from.getFullYear().toString() +
    ' ' + from.getHours().toString() +  ':' + from.getMinutes().toString();
    const max = to.getDate().toString() + '.' + to.getMonth().toString() + '.' + to.getFullYear().toString() +
    ' ' + to.getHours().toString() +  ':' + to.getMinutes().toString();
    return this.defaultService.getSensorHistoryById( id, min, max, 100);
  }
/*
* Fetches data of the current sensor value of one sensor due to model [[SensorData]]
* @param id Id of the sensor to fetch data from
* @return myObserver Observable<SensorData[]> one can subscripe to get the event
*/
  getSensor(id: number): Observable<SensorData> {
    return this.defaultService.getSensorById(id );
  }
 }
