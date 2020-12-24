import { TestBed } from '@angular/core/testing';

import { RegistroCoordService } from './registro-coord.service';

describe('RegistroCoordService', () => {
  let service: RegistroCoordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroCoordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
