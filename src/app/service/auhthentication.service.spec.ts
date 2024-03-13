import { TestBed } from '@angular/core/testing';

import { AuhthenticationService } from './auhthentication.service';

describe('AuhthenticationService', () => {
  let service: AuhthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuhthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
