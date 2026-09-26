import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Inventory } from '../../interfaces/inventory.interface';
import { INVENTORY_MOCK } from '../../mocks/inventory.mocks';
import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  let service: InventoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(InventoryService);
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

  describe('getAllInventory', () => {

    it('debería realizar una petición GET y retornar una lista del inventario', () => {
      const countInventory = 5;
      const mockInventory: Inventory[] = INVENTORY_MOCK;

      service.getAllInventory(countInventory).subscribe((inventory) => {
        expect(inventory).toEqual(mockInventory);
        expect(inventory.length).toBe(mockInventory.length);
      });

      const req = httpMock.expectOne(`api/inventory/${countInventory}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockInventory);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countInventory = 3;

      service.getAllInventory(countInventory).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/inventory/${countInventory}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});
