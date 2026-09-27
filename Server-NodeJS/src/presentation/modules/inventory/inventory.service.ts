import { InventoryStatus, Inventory } from "../../../domain/interfaces/inventory.interface";
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación y gestión del inventario.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar registros
 * de inventario ficticios, principalmente con fines de prueba o demostración.
 */
export class InventoryService {

  /**
   * Lista de bodegas disponibles para el inventario.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente una ubicación
   * a cada registro generado.
   */
  private warehouses: string[] = [
    'Bodega A',
    'Bodega B',
    'Refrigerado',
  ];

  /**
   * Lista de estados disponibles para el inventario.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un estado
   * a cada registro generado.
   */
  private statuses: InventoryStatus[] = [
    'Disponible',
    'Stock bajo',
    'Agotado',
  ];

  /**
   * Obtiene un listado de registros de inventario generados dinámicamente.
   *
   * @param countInventory Cantidad de registros a generar
   * @returns Promesa que resuelve un arreglo de registros de inventario
   *
   * @example
   * ```ts
   * const inventory = await inventoryService.getAllInventory(5);
   * ```
   */
  public async getAllInventory(countInventory: number): Promise<Inventory[]> {
    const inventory: Promise<Inventory>[] = [];

    for (let i = 1; i <= countInventory; i++) {
      inventory.push(this.generateInventory(i));
    }

    return Promise.all(inventory);
  }

  /**
   * Genera un registro de inventario ficticio.
   *
   * @param id Identificador único del registro
   * @returns Promesa que resuelve un registro de inventario generado
   */
  private generateInventory(id: number): Promise<Inventory> {
    return Promise.resolve({
      id,
      product: faker.commerce.productName(),
      quantity: faker.number.int({ min: 0, max: 50 }),
      minStock: faker.number.int({ min: 5, max: 20 }),
      warehouse: faker.helpers.arrayElement(this.warehouses),
      status: faker.helpers.arrayElement(this.statuses),
    });
  }
}
