/**
 * Interfaz que representa una venta del sistema.
 *
 * Contiene la información básica necesaria para mostrar una venta
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada venta debe tener un `id` único, un cliente (`customer`) asociado,
 * un producto (`product`) vendido, un monto total (`total`), una fecha
 * (`date`) y un estado (`status`) definido.
 *
 * @example
 * ```ts
 * const venta: Sale = {
 *   id: 1,
 *   customer: 'Carlos Ramírez',
 *   product: 'Leche entera',
 *   total: 4500,
 *   date: '2026-09-20T10:30:00.000Z',
 *   status: 'Completada'
 * };
 * ```
 */
export interface Sale {
  /** Identificador único de la venta */
  id: number;

  /** Cliente que realizó la compra */
  customer: string;

  /** Producto vendido */
  product: string;

  /** Monto total de la venta */
  total: number;

  /** Fecha en la que se realizó la venta (ISO 8601) */
  date: string;

  /** Estado actual de la venta */
  status: SaleStatus;
}

/**
 * Tipo de estado de una venta.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Completada'
 * - 'Pendiente'
 * - 'Cancelada'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: SaleStatus = 'Pendiente';
 * ```
 */
export type SaleStatus = 'Completada' | 'Pendiente' | 'Cancelada';