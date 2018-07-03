import { TestBed, inject } from '@angular/core/testing';

import { ListeseriesService } from './listeseries.service';

describe('ListeseriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeseriesService]
    });
  });

  it('should be created', inject([ListeseriesService], (service: ListeseriesService) => {
    expect(service).toBeTruthy();
  }));
});
