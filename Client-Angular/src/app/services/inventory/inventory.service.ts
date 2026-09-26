import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../../interfaces/inventory.interface';

/**
 * Servicio encargado de la gestión del inventario.
 *
 * Proporciona métodos para obtener información del inventario
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private inventoryService: InventoryService) {}
 *
 * this.inventoryService.getAllInventory(10).subscribe(inventory => {
 *   console.log(inventory);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class InventoryService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de registros de inventario desde el backend.
   *
   * @param countInventory Número de registros a obtener.
   * @returns Observable que emite un array de registros de inventario.
   *
   * @example
   * ```ts
   * this.inventoryService.getAllInventory(5).subscribe(inventory => {
   *   console.log(inventory);
   * });
   * ```
   */
  getAllInventory(countInventory: number): Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(`api/inventory/${countInventory}`);
  }
}
