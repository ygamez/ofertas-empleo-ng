import { TestBed } from '@angular/core/testing';

import { ListaVotantesService } from './lista-votantes.service';

describe('ListaVotantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaVotantesService = TestBed.get(ListaVotantesService);
    expect(service).toBeTruthy();
  });
});
