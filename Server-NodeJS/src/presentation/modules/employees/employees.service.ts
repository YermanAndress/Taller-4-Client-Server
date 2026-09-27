import { EmployeeStatus, Employee } from "../../../domain/interfaces/employees.interface";
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación y gestión de empleados.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar empleados
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class EmployeesService {

  /**
   * Lista de cargos disponibles para los empleados.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un cargo
   * a cada empleado generado.
   */
  private positions: string[] = [
    'Cajera',
    'Bodeguero',
    'Vendedora',
    'Administrador',
    'Repartidor',
    'Contador',
  ];

  /**
   * Lista de departamentos disponibles para los empleados.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un departamento
   * a cada empleado generado.
   */
  private departments: string[] = [
    'Caja',
    'Bodega',
    'Ventas',
    'Administración',
    'Logística',
  ];

  /**
   * Lista de estados disponibles para los empleados.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un estado
   * a cada empleado generado.
   */
  private statuses: EmployeeStatus[] = [
    'Activo',
    'Vacaciones',
    'Inactivo',
  ];

  /**
   * Obtiene un listado de empleados generados dinámicamente.
   *
   * @param countEmployees Cantidad de empleados a generar
   * @returns Promesa que resuelve un arreglo de empleados
   *
   * @example
   * ```ts
   * const employees = await employeesService.getAllEmployees(5);
   * ```
   */
  public async getAllEmployees(countEmployees: number): Promise<Employee[]> {
    const employees: Promise<Employee>[] = [];

    for (let i = 1; i <= countEmployees; i++) {
      employees.push(this.generateEmployee(i));
    }

    return Promise.all(employees);
  }

  /**
   * Genera un empleado ficticio.
   *
   * @param id Identificador único del empleado
   * @returns Promesa que resuelve un empleado generado
   */
  private generateEmployee(id: number): Promise<Employee> {
    return Promise.resolve({
      id,
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      position: faker.helpers.arrayElement(this.positions),
      department: faker.helpers.arrayElement(this.departments),
      salary: faker.number.int({ min: 1425000, max: 3200000 }),
      status: faker.helpers.arrayElement(this.statuses),
    });
  }
}
