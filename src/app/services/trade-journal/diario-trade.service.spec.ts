import { TestBed } from '@angular/core/testing';

import { DiarioTradeService } from './diario-trade.service';

describe('TradeJournalService', () => {
  let service: DiarioTradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiarioTradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
