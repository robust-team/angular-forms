/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DependencyService } from './dependency.service';

describe('Service: Dependency', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DependencyService]
    });
  });

  it('should ...', inject([DependencyService], (service: DependencyService) => {
    expect(service).toBeTruthy();
  }));
});
