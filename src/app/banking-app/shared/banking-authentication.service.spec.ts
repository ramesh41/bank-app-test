import { TestBed } from '@angular/core/testing';

import { BankingAuthenticationService } from './banking-authentication.service';

describe('BankingAuthenticationService', () => {
  let service: BankingAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankingAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
