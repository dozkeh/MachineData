import { Component, OnInit } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@Component({
  selector: 'md-span-selection',
  templateUrl: './span-selection.component.html',
  styleUrls: ['./span-selection.component.scss']
})
export class SpanSelectionComponent implements OnInit {

  public startDate = new Date(2019, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}
