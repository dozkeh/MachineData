import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsActualComponent } from './sensors-actual.component';

describe('SensorsActualComponent', () => {
  let component: SensorsActualComponent;
  let fixture: ComponentFixture<SensorsActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorsActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
