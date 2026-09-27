import { Component, inject } from '@angular/core';
import { EmployeesTableComponent } from '../../components/employees-table/employees-table.component';
import { Employee } from '../../interfaces/employees.interface';
import { EmployeesService } from '../../services/employees/employees.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de empleados.
 *
 * Se utiliza para gestionar y mostrar un listado de empleados
 * utilizando el componente `EmployeesTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `EmployeesService`
 * para obtener los empleados y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  imports: [EmployeesTableComponent, AlertComponent],
})
export class EmployeesPage {
  /**
   * Listado de empleados obtenidos desde el servicio.
   * @type {Employee[]}
   */
  employees: Employee[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener los empleados.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private employeesService = inject(EmployeesService);

  /**
   * Inicializa el componente y carga los empleados.
   * @remarks
   * Se suscribe al método `getAllEmployees()` del servicio y
   * asigna los datos recibidos a la propiedad `employees`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.employeesService.getAllEmployees(10).subscribe({
      next: (employees) => {
        this.employees = employees;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
