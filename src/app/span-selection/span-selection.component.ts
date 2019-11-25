import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'md-span-selection',
  templateUrl: './span-selection.component.html',
  styleUrls: ['./span-selection.component.scss'],
})
export class SpanSelectionComponent implements OnInit, AfterContentInit {

  public dataTimeRange: Date[] = [];
  /* TODO: Today is set 23/11/2019 15.50 and start time is set 20/10/19 5.50
  for demo using dummy data, must be changed in today and default starttime
  annoDomini allows just data from the beginning of measurement*/
  public today = new Date(2019, 10, 23, 15, 50);
  public start = new Date(2019, 10, 20, 15, 50);
  public annoDomini = new Date(2019, 3, 20, 5, 50);

  constructor() { }

  ngOnInit() {
  }

/*
 * Sets the dataTimeRange after the content is builded and starts the first data fetch
 */
  ngAfterContentInit(): void {
    this.dataTimeRange = [this.start, this.today];
  }

}
