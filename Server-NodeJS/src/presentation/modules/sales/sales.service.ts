import { faker } from '@faker-js/faker';
import { Sale, SaleStatus } from '../../../domain/interfaces/sale.interface';

/**
 * Servicio encargado de la generación y gestión de ventas.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar ventas
 * ficticias, principalmente con fines de prueba o demostración.
 */
export class SalesService {

  /**
   * Estados disponibles para las ventas.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente un estado
   * a cada venta generada.
   */
  private statuses: SaleStatus[] = [
    'Completada',
    'Pendiente',
    'Cancelada',
  ];

  /**
   * Obtiene un listado de ventas generadas dinámicamente.
   *
   * @param countSales Cantidad de ventas a generar
   * @returns Promesa que resuelve un arreglo de ventas
   *
   * @example
   * ```ts
   * const sales = await salesService.getAllSales(10);
   * ```
   */
  public async getAllSales(countSales: number): Promise<Sale[]> {
    const sales: Promise<Sale>[] = [];

    for (let i = 1; i <= countSales; i++) {
      sales.push(this.generateSale(i));
    }

    return Promise.all(sales);
  }

  /**
   * Genera una venta ficticia.
   *
   * @param id Identificador único de la venta
   * @returns Promesa que resuelve una venta generada
   */
  private generateSale(id: number): Promise<Sale> {
    return Promise.resolve({
      id,
      customer: faker.person.fullName(),
      product: faker.commerce.productName(),
      total: Number(
        faker.commerce.price({ min: 1000, max: 100000, dec: 2 })
      ),
      date: faker.date.recent().toISOString(),
      status: faker.helpers.arrayElement(this.statuses),
    });
  }
}