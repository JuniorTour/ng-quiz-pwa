import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesCardComponent } from './ques-card.component';

describe('QuesCardComponent', () => {
  let component: QuesCardComponent;
  let fixture: ComponentFixture<QuesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
