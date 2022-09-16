import { TestBed } from '@angular/core/testing';

import { PararutaidusuarioService } from './pararutaidusuario.service';

describe('PararutaidusuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PararutaidusuarioService = TestBed.get(PararutaidusuarioService);
    expect(service).toBeTruthy();
  });
});
