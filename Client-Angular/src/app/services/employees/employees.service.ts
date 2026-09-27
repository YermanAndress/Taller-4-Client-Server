import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../interfaces/employees.interface';

/**
 * Servicio encargado de la gestión de empleados.
 *
 * Proporciona métodos para obtener información de empleados
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private employeesService: EmployeesService) {}
 *
 * this.employeesService.getAllEmployees(10).subscribe(employees => {
 *   console.log(employees);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de empleados desde el backend.
   *
   * @param countEmployees Número de empleados a obtener.
   * @returns Observable que emite un array de empleados.
   *
   * @example
   * ```ts
   * this.employeesService.getAllEmployees(5).subscribe(employees => {
   *   console.log(employees);
   * });
   * ```
   */
  getAllEmployees(countEmployees: number): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`api/employees/${countEmployees}`);
  }
}
