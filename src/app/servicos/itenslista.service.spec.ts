import { TestBed } from '@angular/core/testing';

import { ItenslistaService } from './itenslista.service';

describe('ItenslistaService', () => {
  let service: ItenslistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItenslistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
