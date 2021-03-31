import { TestBed } from '@angular/core/testing';

import { QuestionsGetterService } from './questions-getter.service';

describe('QuestionsGetterService', () => {
  let service: QuestionsGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
