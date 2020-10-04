import { TestBed } from '@angular/core/testing';

import { BusquedasService } from './busquedas.service';

describe('BusquedasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusquedasService = TestBed.get(BusquedasService);
    expect(service).toBeTruthy();
  });
});
