/**
 * Interfaz que representa un registro de inventario del sistema.
 *
 * Contiene la información básica necesaria para mostrar el stock
 * de un producto en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada registro debe tener un `id` único, el nombre del `product`,
 * la `quantity` disponible, el `minStock` requerido, el `warehouse`
 * donde se almacena y un `status` definido.
 *
 * @example
 * ```ts
 * const registro: Inventory = {
 *   id: 1,
 *   product: 'Leche entera',
 *   quantity: 50,
 *   minStock: 20,
 *   warehouse: 'Refrigerado',
 *   status: 'Disponible'
 * };
 * ```
 */
export interface Inventory {
    /** Identificador único del registro de inventario */
    id: number;

    /** Nombre del producto almacenado */
    product: string;

    /** Cantidad disponible en stock */
    quantity: number;

    /** Stock mínimo requerido antes de reponer */
    minStock: number;

    /** Bodega o ubicación donde se almacena el producto */
    warehouse: string;

    /** Estado del stock */
    status: InventoryStatus;
}

/**
 * Tipo de estado del inventario.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Disponible'
 * - 'Stock bajo'
 * - 'Agotado'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: InventoryStatus = 'Disponible';
 * ```
 */
export type InventoryStatus = 'Disponible' | 'Stock bajo' | 'Agotado';
