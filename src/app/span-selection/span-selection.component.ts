import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'md-span-selection',
  templateUrl: './span-selection.component.html',
  styleUrls: ['./span-selection.component.scss'],
})
export class SpanSelectionComponent implements OnInit {

  public dataTimeRange: Date[] = [];
  /* TODO: Today is set 23/11/2019 15.50 and start time is set 23.01.19 5.50
  for demo using dummy data, must be changed in today start day of measurement*/
  public today = new Date(2019, 10, 23, 15, 50);
  public annoDomini = new Date(2019, 3, 23, 5, 50);

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.dataTimeRange = [this.annoDomini, this.today];
  }

}
