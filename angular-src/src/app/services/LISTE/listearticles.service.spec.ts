import { TestBed, inject } from '@angular/core/testing';

import { ListearticlesService } from './listearticles.service';

describe('ListearticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListearticlesService]
    });
  });

  it('should be created', inject([ListearticlesService], (service: ListearticlesService) => {
    expect(service).toBeTruthy();
  }));
});
