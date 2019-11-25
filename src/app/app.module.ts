import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { DefaultService } from './sensordata-swagger/api/default.service';
import { MatSidenavModule, MatButtonModule, MatIconModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorGraphComponent } from './sensor-graph/sensor-graph.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpanSelectionComponent } from './span-selection/span-selection.component';
import { SensorActualComponent } from './sensor-actual/sensor-actual.component';
import { SensorsActualComponent } from './sensors-actual/sensors-actual.component';


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
    // DefaultService,
  ],
  providers: [DefaultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
