import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanSelectionComponent } from './span-selection.component';

describe('SpanSelectionComponent', () => {
  let component: SpanSelectionComponent;
  let fixture: ComponentFixture<SpanSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
