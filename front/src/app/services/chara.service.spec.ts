import { TestBed } from '@angular/core/testing';
import { CharaService } from './chara.service';

describe('CharaService', () => {

  let service: CharaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
