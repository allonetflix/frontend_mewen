import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodytestComponent } from './bodytest.component';

describe('BodytestComponent', () => {
  let component: BodytestComponent;
  let fixture: ComponentFixture<BodytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
