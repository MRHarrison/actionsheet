import { TestBed, inject } from '@angular/core/testing';

import { ActionsheetService } from './project.service';

describe('ActionsheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionsheetService]
    });
  });

  it('should ...', inject([ActionsheetService], (service: ActionsheetService) => {
    expect(service).toBeTruthy();
  }));
});
