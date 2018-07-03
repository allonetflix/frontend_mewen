import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeseriesComponent } from './listeseries.component';

describe('ListeseriesComponent', () => {
  let component: ListeseriesComponent;
  let fixture: ComponentFixture<ListeseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
