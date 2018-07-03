import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemoviesComponent } from './listemovies.component';

describe('ListemoviesComponent', () => {
  let component: ListemoviesComponent;
  let fixture: ComponentFixture<ListemoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
