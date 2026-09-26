import { Inventory } from "../interfaces/inventory.interface";

export const INVENTORY_MOCK: Inventory[] = [
    {
        id: 1,
        product: 'Leche entera',
        quantity: 50,
        minStock: 20,
        warehouse: 'Refrigerado',
        status: 'Disponible',
    },
    {
        id: 2,
        product: 'Queso campesino',
        quantity: 8,
        minStock: 10,
        warehouse: 'Refrigerado',
        status: 'Stock bajo',
    }
];
