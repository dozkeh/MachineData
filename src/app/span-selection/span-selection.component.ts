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
  // TODO: Today is set 23/11/2019 for demo using dummy-Data, must be changed in today
  public today = new Date(2019, 10, 23, 18, 0);

  constructor() { }

  ngOnInit() {
  }

}
