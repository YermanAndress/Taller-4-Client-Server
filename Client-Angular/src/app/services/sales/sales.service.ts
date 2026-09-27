import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../../interfaces/sales.interface';

/**
 * Servicio encargado de la gestión de ventas.
 *
 * Proporciona métodos para obtener información de ventas
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private salesService: SalesService) {}
 *
 * this.salesService.getAllSales(10).subscribe(sales => {
 *   console.log(sales);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class SalesService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de ventas desde el backend.
   *
   * @param countSales Número de ventas a obtener.
   * @returns Observable que emite un array de ventas.
   *
   * @example
   * ```ts
   * this.salesService.getAllSales(5).subscribe(sales => {
   *   console.log(sales);
   * });
   * ```
   */
  getAllSales(countSales: number): Observable<Sale[]> {
    return this.httpClient.get<Sale[]>(`api/sales/${countSales}`);
  }
}