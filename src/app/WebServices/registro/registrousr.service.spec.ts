import { TestBed } from '@angular/core/testing';

import { RegistrousrService } from './registrousr.service';

describe('RegistrousrService', () => {
  let service: RegistrousrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrousrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
