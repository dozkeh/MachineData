import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule, MatButtonModule, MatIconModule} from '@angular/material';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { SensorGraphComponent } from './sensor-graph/sensor-graph.component';
import { SpanSelectionComponent } from './span-selection/span-selection.component';
import { SensorActualComponent } from './sensor-actual/sensor-actual.component';
import { SensorsActualComponent } from './sensors-actual/sensors-actual.component';

import { SensordataService } from './sensordata.service';
import { DefaultService } from './sensordata-swagger/api/default.service';


@NgModule({
  declarations: [
    AppComponent,
    SensorGraphComponent,
    SpanSelectionComponent,
    SensorActualComponent,
    SensorsActualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AngularSvgIconModule,
    // DefaultService,
  ],
  providers: [DefaultService, SensordataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
