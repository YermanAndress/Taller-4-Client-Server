import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesPage } from './employees.page';
import { provideHttpClient } from '@angular/common/http';
import { EmployeesService } from '../../services/employees/employees.service';
import { EmployeesTableComponent } from '../../components/employees-table/employees-table.component';
import { of, throwError } from 'rxjs';
import { EMPLOYEES_MOCK } from '../../mocks/employees.mocks';
import { By } from '@angular/platform-browser';

describe('EmployeesPage', () => {
  let component: EmployeesPage;
  let fixture: ComponentFixture<EmployeesPage>;
  let employeesService: EmployeesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesPage, EmployeesTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesPage);
    component = fixture.componentInstance;
    employeesService = TestBed.inject(EmployeesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllEmployees al iniciar', () => {
    const spyGetAllEmployees = jest.spyOn(employeesService, 'getAllEmployees').mockReturnValue(of(EMPLOYEES_MOCK));
    fixture.detectChanges();
    expect(spyGetAllEmployees).toHaveBeenCalled();
  });

  it('debería asignar los empleados recibidos del servicio', () => {
    jest.spyOn(employeesService, 'getAllEmployees').mockReturnValue(of(EMPLOYEES_MOCK));
    fixture.detectChanges();
    expect(component.employees).toEqual(EMPLOYEES_MOCK);
  });

  it('debería pasar los empleados al componente employees-table', () => {
    jest.spyOn(employeesService, 'getAllEmployees').mockReturnValue(of(EMPLOYEES_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(EmployeesTableComponent))
      .componentInstance;
    expect(tableComponent.employees).toEqual(EMPLOYEES_MOCK);
  });

  it('debería manejar el error cuando falla getAllEmployees', () => {
    component.employees = [];
    const errorResponse = new Error('Error al cargar empleados');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(employeesService, 'getAllEmployees').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(employeesService.getAllEmployees).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.employees.length).toBe(0);
  });
});
