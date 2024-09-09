import { TestBed } from '@angular/core/testing';

import { CardPatparvmService } from './card-patparvm.service';

describe('CardPatparvmService', () => {
  let service: CardPatparvmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardPatparvmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
