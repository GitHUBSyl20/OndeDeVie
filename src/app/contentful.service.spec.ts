import { TestBed } from '@angular/core/testing';
import { createClient, Entry } from 'contentful';

import { ContentfulService } from './contentful.service';

describe('ContentfullService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentfulService = TestBed.get(ContentfulService);
    expect(service).toBeTruthy();
  });
});
