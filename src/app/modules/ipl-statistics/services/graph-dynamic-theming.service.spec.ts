import { TestBed } from '@angular/core/testing';

import { GraphDynamicThemingService } from './graph-dynamic-theming.service';

describe('GraphDynamicThemingService', () => {
  let service: GraphDynamicThemingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphDynamicThemingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
