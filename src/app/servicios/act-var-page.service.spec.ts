import { TestBed } from '@angular/core/testing';

import { ActVarPageService } from './act-var-page.service';

describe('ActVarPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActVarPageService = TestBed.get(ActVarPageService);
    expect(service).toBeTruthy();
  });
});
