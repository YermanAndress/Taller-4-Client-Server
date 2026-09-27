import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { SaleStatus, Sale } from '../../interfaces/sales.interface';

/**
 * Componente de tabla de ventas.
 *
 * Se utiliza para mostrar un listado de ventas en una tabla,
 * mostrando información como cliente, producto, total, fecha
 * y un badge visual que indica el estado de cada venta.
 *
 * @remarks
 * Este componente recibe las ventas desde un componente padre
 * a través del Input `sales` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges según el estado.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-sales-table [sales]="salesList"></app-sales-table>
 * ```
 */
@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class SalesTableComponent {
  /**
   * Listado de ventas que se mostrarán en la tabla.
   * @type {Sale[]}
   * @remarks
   * Este Input permite pasar un array de ventas desde un componente padre,
   * generalmente `SalesPage`. Cada venta debe cumplir la interfaz `Sale`.
   */
  @Input() sales: Sale[] = [];
  /**
   * Mapeo de estados de ventas a tipos de Badge.
   * @type {Record<SaleStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - 'Completada' → 'success' (verde)
   * - 'Pendiente' → 'warning' (amarillo)
   * - 'Cancelada' → 'danger' (rojo)
   *
   * Esto permite que en la tabla cada venta tenga un badge visual que indique su estado
   * de forma clara para el usuario.
   */
  statusMap: Record<SaleStatus, BadgeType> = {
    'Completada': 'success',
    'Pendiente': 'warning',
    'Cancelada': 'danger',
  }
}