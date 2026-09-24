import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPage } from './sales.page';
import { provideHttpClient } from '@angular/common/http';
import { SalesService } from '../../services/sales/sales.service';
import { SalesTableComponent } from '../../components/sales-table/sales-table.component';
import { of, throwError } from 'rxjs';
import { SALES_MOCK } from '../../mocks/sales.mocks';
import { By } from '@angular/platform-browser';

describe('SalesPage', () => {
  let component: SalesPage;
  let fixture: ComponentFixture<SalesPage>;
  let salesService: SalesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesPage, SalesTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPage);
    component = fixture.componentInstance;
    salesService = TestBed.inject(SalesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllSales al iniciar', () => {
    const spyGetAllSales = jest.spyOn(salesService, 'getAllSales').mockReturnValue(of(SALES_MOCK));
    fixture.detectChanges();
    expect(spyGetAllSales).toHaveBeenCalled();
  });

  it('debería asignar las ventas recibidas del servicio', () => {
    jest.spyOn(salesService, 'getAllSales').mockReturnValue(of(SALES_MOCK));
    fixture.detectChanges();
    expect(component.sales).toEqual(SALES_MOCK);
  });

  it('debería pasar las ventas al componente sales-table', () => {
    jest.spyOn(salesService, 'getAllSales').mockReturnValue(of(SALES_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(SalesTableComponent))
      .componentInstance;
    expect(tableComponent.sales).toEqual(SALES_MOCK);
  });

  it('debería manejar el error cuando falla getAllSales', () => {
    component.sales = [];
    const errorResponse = new Error('Error al cargar ventas');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(salesService, 'getAllSales').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(salesService.getAllSales).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.sales.length).toBe(0);
  });
});