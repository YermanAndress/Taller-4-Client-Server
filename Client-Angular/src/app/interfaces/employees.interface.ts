/**
 * Interfaz que representa un empleado del sistema.
 *
 * Contiene la información básica necesaria para mostrar un empleado
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada empleado debe tener un `id` único, el `name` completo,
 * el `position` o cargo, el `department` al que pertenece,
 * el `salary` en pesos colombianos y un `status` definido.
 *
 * @example
 * ```ts
 * const empleado: Employee = {
 *   id: 1,
 *   name: 'María García',
 *   position: 'Cajera',
 *   department: 'Caja',
 *   salary: 1425000,
 *   status: 'Activo'
 * };
 * ```
 */
export interface Employee {
    /** Identificador único del empleado */
    id: number;

    /** Nombre completo del empleado */
    name: string;

    /** Cargo que desempeña el empleado */
    position: string;

    /** Departamento al que pertenece el empleado */
    department: string;

    /** Salario del empleado en pesos */
    salary: number;

    /** Estado laboral del empleado */
    status: EmployeeStatus;
}

/**
 * Tipo de estado del empleado.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Activo'
 * - 'Vacaciones'
 * - 'Inactivo'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: EmployeeStatus = 'Activo';
 * ```
 */
export type EmployeeStatus = 'Activo' | 'Vacaciones' | 'Inactivo';
