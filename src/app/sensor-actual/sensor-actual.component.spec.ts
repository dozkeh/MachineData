import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorActualComponent } from './sensor-actual.component';

describe('SensorActualComponent', () => {
  let component: SensorActualComponent;
  let fixture: ComponentFixture<SensorActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
