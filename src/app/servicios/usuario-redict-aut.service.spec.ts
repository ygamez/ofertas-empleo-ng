import { TestBed } from '@angular/core/testing';

import { UsuarioRedictAutService } from './usuario-redict-aut.service';

describe('UsuarioRedictAutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioRedictAutService = TestBed.get(UsuarioRedictAutService);
    expect(service).toBeTruthy();
  });
});
