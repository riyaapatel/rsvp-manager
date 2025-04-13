import { TestBed } from '@angular/core/testing';

import { RSVPServiceService } from './rsvpservice.service';

describe('RSVPServiceService', () => {
  let service: RSVPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RSVPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
