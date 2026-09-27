/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     Sale:
 *       type: object
 *       description: Representa una venta del sistema
 *       required:
 *         - id
 *         - customer
 *         - product
 *         - total
 *         - date
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         customer:
 *           type: string
 *           example: Carlos Ramírez
 *         product:
 *           type: string
 *           example: Leche entera
 *         total:
 *           type: number
 *           example: 4500
 *         date:
 *           type: string
 *           format: date-time
 *           example: 2026-09-20T10:30:00.000Z
 *         status:
 *           type: string
 *           enum:
 *             - Completada
 *             - Pendiente
 *             - Cancelada
 *           example: Completada
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     Inventory:
 *       type: object
 *       description: Representa un registro de inventario del sistema
 *       required:
 *         - id
 *         - product
 *         - quantity
 *         - minStock
 *         - warehouse
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         product:
 *           type: string
 *           example: Leche entera
 *         quantity:
 *           type: number
 *           example: 50
 *         minStock:
 *           type: number
 *           example: 20
 *         warehouse:
 *           type: string
 *           example: Refrigerado
 *         status:
 *           type: string
 *           enum:
 *             - Disponible
 *             - Stock bajo
 *             - Agotado
 *           example: Disponible
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       description: Representa un empleado del sistema
 *       required:
 *         - id
 *         - name
 *         - position
 *         - department
 *         - salary
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: María García
 *         position:
 *           type: string
 *           example: Cajera
 *         department:
 *           type: string
 *           example: Caja
 *         salary:
 *           type: number
 *           example: 1425000
 *         status:
 *           type: string
 *           enum:
 *             - Activo
 *             - Vacaciones
 *             - Inactivo
 *           example: Activo
 */
export {};