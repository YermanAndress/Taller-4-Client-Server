import { Sale } from "../interfaces/sales.interface";

export const SALES_MOCK: Sale[] = [
    {
        id: 1,
        customer: 'Carlos Ramírez',
        product: 'Leche entera',
        total: 4500,
        date: '2026-09-20T10:30:00.000Z',
        status: 'Completada',
    },
    {
        id: 2,
        customer: 'Laura Gómez',
        product: 'Manzana roja',
        total: 3200,
        date: '2026-09-21T15:45:00.000Z',
        status: 'Pendiente',
    }
];