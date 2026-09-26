import { Component, inject } from '@angular/core';
import { InventoryTableComponent } from '../../components/inventory-table/inventory-table.component';
import { Inventory } from '../../interfaces/inventory.interface';
import { InventoryService } from '../../services/inventory/inventory.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de inventario.
 *
 * Se utiliza para gestionar y mostrar un listado de registros de inventario
 * utilizando el componente `InventoryTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `InventoryService`
 * para obtener el inventario y pasarlo al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  imports: [InventoryTableComponent, AlertComponent],
})
export class InventoryPage {
  /**
   * Listado de registros de inventario obtenidos desde el servicio.
   * @type {Inventory[]}
   */
  inventory: Inventory[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener el inventario.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private inventoryService = inject(InventoryService);

  /**
   * Inicializa el componente y carga el inventario.
   * @remarks
   * Se suscribe al método `getAllInventory()` del servicio y
   * asigna los datos recibidos a la propiedad `inventory`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.inventoryService.getAllInventory(10).subscribe({
      next: (inventory) => {
        this.inventory = inventory;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
