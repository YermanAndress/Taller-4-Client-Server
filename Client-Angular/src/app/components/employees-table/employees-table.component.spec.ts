import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EMPLOYEES_MOCK } from '../../mocks/employees.mocks';
import { EmployeesTableComponent } from './employees-table.component';

describe('EmployeesTableComponent', () => {
  let component: EmployeesTableComponent;
  let fixture: ComponentFixture<EmployeesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada empleado', () => {
    component.employees = EMPLOYEES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.employees.length);
  });

  it('debería mostrar los datos del empleado en cada columna', () => {
    component.employees = EMPLOYEES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const item = component.employees[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(item.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(item.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(item.position);
      expect(columns[3].nativeElement.textContent.trim()).toBe(item.department);
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(item.salary));
    });
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Activo']).toBe('success');
    expect(component.statusMap['Vacaciones']).toBe('warning');
    expect(component.statusMap['Inactivo']).toBe('danger');
  });
  
});
