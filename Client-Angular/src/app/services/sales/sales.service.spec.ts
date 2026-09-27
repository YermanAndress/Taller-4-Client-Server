import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Sale } from '../../interfaces/sales.interface';
import { SALES_MOCK } from '../../mocks/sales.mocks';
import { SalesService } from './sales.service';

describe('SalesService', () => {
  let service: SalesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(SalesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllSales', () => {

    it('debería realizar una petición GET y retornar una lista de ventas', () => {
      const countSales = 5;
      const mockSales: Sale[] = SALES_MOCK;

      service.getAllSales(countSales).subscribe((ventas) => {
        expect(ventas).toEqual(mockSales);
        expect(ventas.length).toBe(mockSales.length);
      });

      const req = httpMock.expectOne(`api/sales/${countSales}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockSales);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countSales = 3;

      service.getAllSales(countSales).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/sales/${countSales}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});