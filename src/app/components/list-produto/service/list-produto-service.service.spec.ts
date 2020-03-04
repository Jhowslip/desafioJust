import { TestBed } from '@angular/core/testing';

import { ListProdutoServiceService } from './list-produto-service.service';

describe('ListProdutoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProdutoServiceService = TestBed.get(ListProdutoServiceService);
    expect(service).toBeTruthy();
  });
});
