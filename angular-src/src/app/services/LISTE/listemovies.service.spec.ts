import { TestBed, inject } from '@angular/core/testing';

import { ListemoviesService } from './listemovies.service';

describe('ListemoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListemoviesService]
    });
  });

  it('should be created', inject([ListemoviesService], (service: ListemoviesService) => {
    expect(service).toBeTruthy();
  }));
});
