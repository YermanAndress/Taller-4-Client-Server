import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { INVENTORY_MOCK } from '../../mocks/inventory.mocks';
import { InventoryTableComponent } from './inventory-table.component';

describe('InventoryTableComponent', () => {
  let component: InventoryTableComponent;
  let fixture: ComponentFixture<InventoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryTableComponent);
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

  it('debería renderizar una fila por cada registro de inventario', () => {
    component.inventory = INVENTORY_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.inventory.length);
  });

  it('debería mostrar los datos del inventario en cada columna', () => {
    component.inventory = INVENTORY_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const item = component.inventory[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(item.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(item.product);
      expect(columns[2].nativeElement.textContent.trim()).toBe(String(item.quantity));
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(item.minStock));
      expect(columns[4].nativeElement.textContent.trim()).toBe(item.warehouse);
    });
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Disponible']).toBe('success');
    expect(component.statusMap['Stock bajo']).toBe('warning');
    expect(component.statusMap['Agotado']).toBe('danger');
  });
  
});
