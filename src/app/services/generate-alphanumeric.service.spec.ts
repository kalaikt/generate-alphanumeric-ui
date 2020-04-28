import { GenerateAlphanumericService } from './generate-alphanumeric.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed} from '@angular/core/testing';
import { Response } from '../services/response.interface';

const response: Response = {
  count: 16,
  data: [
    '23',
    '2d',
    '2e',
    '2f',
    'a3',
    'ad',
    'ae',
    'af',
    'b3',
    'bd',
    'be',
    'bf',
    'c3',
    'cd',
    'ce',
    'cf',
  ],
};

describe('GenerateAlphanumericService', () => {
  let service: GenerateAlphanumericService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenerateAlphanumericService],
    });

    service = TestBed.inject(GenerateAlphanumericService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getResponse should return value from observable', () => {
    service.getResponse('23', 1).subscribe((data: any) => {
      expect(data.count).toEqual(response.count);
    });
    const req = httpTestingController.expectOne(
      'http://localhost:8080/generate/alphanumeric/23/1'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  });
});
