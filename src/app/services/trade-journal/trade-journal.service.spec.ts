import { TestBed } from '@angular/core/testing';

import { TradeJournalService } from './trade-journal.service';

describe('TradeJournalService', () => {
  let service: TradeJournalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeJournalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
