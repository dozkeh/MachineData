import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'md-span-selection',
  templateUrl: './span-selection.component.html',
  styleUrls: ['./span-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpanSelectionComponent implements OnInit {

  public dataTimeRange: Date[];
  /* TODO: Today is set 23/11/2019 15.50 and start time is set 23.01.19 5.50
  for demo using dummy-Data, must be changed in today */
  public today = new Date(2019, 10, 23, 15, 50);
  public annoDomini = new Date(2019, 0, 23, 5, 50);

  constructor() { }

  ngOnInit() {
  }

}
