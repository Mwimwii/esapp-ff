import { TestBed } from '@angular/core/testing'

import { EsappRequestHandlerService } from './esapp-request-handler.service'

describe('PricesService', () => {
  let service: EsappRequestHandlerService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(EsappRequestHandlerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
