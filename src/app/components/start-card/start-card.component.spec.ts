import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCardComponent } from './start-card.component';

describe('StartCardComponent', () => {
  let component: StartCardComponent;
  let fixture: ComponentFixture<StartCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
