import { TestBed } from '@angular/core/testing';

import { DataSiteService } from './data-site.service';

describe('DataSiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSiteService = TestBed.get(DataSiteService);
    expect(service).toBeTruthy();
  });
});
