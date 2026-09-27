import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { InventoryStatus, Inventory } from '../../interfaces/inventory.interface';

/**
 * Componente de tabla de inventario.
 *
 * Se utiliza para mostrar un listado de registros de inventario en una tabla,
 * mostrando información como id, producto, cantidad, stock mínimo,
 * bodega y un badge visual que indica el estado de cada registro.
 *
 * @remarks
 * Este componente recibe el inventario desde un componente padre
 * a través del Input `inventory` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges según el estado.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-inventory-table [inventory]="inventoryList"></app-inventory-table>
 * ```
 */
@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  imports: [BadgeAtom],
})
export class InventoryTableComponent {
  /**
   * Listado de registros de inventario que se mostrarán en la tabla.
   * @type {Inventory[]}
   * @remarks
   * Este Input permite pasar un array de registros desde un componente padre,
   * generalmente `ListInventoryComponent`. Cada registro debe cumplir la interfaz `Inventory`.
   */
  @Input() inventory: Inventory[] = [];
  /**
   * Mapeo de estados de inventario a tipos de Badge.
   * @type {Record<InventoryStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - 'Disponible' → 'success' (verde)
   * - 'Stock bajo' → 'warning' (amarillo)
   * - 'Agotado' → 'danger' (rojo)
   *
   * Esto permite que en la tabla cada registro tenga un badge visual que indique su estado
   * de forma clara para el usuario.
   */
  statusMap: Record<InventoryStatus, BadgeType> = {
    'Disponible' : 'success',
    'Stock bajo': 'warning',
    'Agotado': 'danger',
  }
}
