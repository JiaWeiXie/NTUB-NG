import { TestBed, inject } from '@angular/core/testing';

import { Hw3Service } from './hw3.service';

describe('Hw3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hw3Service]
    });
  });

  it('should be created', inject([Hw3Service], (service: Hw3Service) => {
    expect(service).toBeTruthy();
  }));
});
