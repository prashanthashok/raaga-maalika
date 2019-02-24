import { TestBed } from '@angular/core/testing';

import { MockTracksService } from './mock-tracks.service';

describe('MockTracksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockTracksService = TestBed.get(MockTracksService);
    expect(service).toBeTruthy();
  });
});
