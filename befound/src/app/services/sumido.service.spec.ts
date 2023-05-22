import { TestBed } from '@angular/core/testing';

import { SumidoService } from './sumido.service';

describe('SumidoService', () => {
  let service: SumidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
