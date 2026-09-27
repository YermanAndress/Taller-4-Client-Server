import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { EmployeeStatus, Employee } from '../../interfaces/employees.interface';

/**
 * Componente de tabla de empleados.
 *
 * Se utiliza para mostrar un listado de empleados en una tabla,
 * mostrando información como id, nombre, cargo, departamento,
 * salario y un badge visual que indica el estado de cada empleado.
 *
 * @remarks
 * Este componente recibe los empleados desde un componente padre
 * a través del Input `employees` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges según el estado.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-employees-table [employees]="employeesList"></app-employees-table>
 * ```
 */
@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  imports: [BadgeAtom],
})
export class EmployeesTableComponent {
  /**
   * Listado de empleados que se mostrarán en la tabla.
   * @type {Employee[]}
   * @remarks
   * Este Input permite pasar un array de empleados desde un componente padre,
   * generalmente `ListEmployeesComponent`. Cada empleado debe cumplir la interfaz `Employee`.
   */
  @Input() employees: Employee[] = [];
  /**
   * Mapeo de estados de empleado a tipos de Badge.
   * @type {Record<EmployeeStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - 'Activo' → 'success' (verde)
   * - 'Vacaciones' → 'warning' (amarillo)
   * - 'Inactivo' → 'danger' (rojo)
   *
   * Esto permite que en la tabla cada empleado tenga un badge visual que indique su estado
   * de forma clara para el usuario.
   */
  statusMap: Record<EmployeeStatus, BadgeType> = {
    'Activo' : 'success',
    'Vacaciones': 'warning',
    'Inactivo': 'danger',
  }
}
