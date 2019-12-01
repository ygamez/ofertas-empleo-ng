import { TestBed } from '@angular/core/testing';

import { UsuarioAdminAccessService } from './usuario-admin-access.service';

describe('UsuarioAdminAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioAdminAccessService = TestBed.get(UsuarioAdminAccessService);
    expect(service).toBeTruthy();
  });
});
