import { Router } from "express";
import { InventoryController } from "./inventory.controller";

export class InventoryRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new InventoryController();

    /**
     * @openapi
     * /api/inventory/{countInventory}:
     *   get:
     *     summary: Obtener listado del inventario
     *     description: Retorna una lista de registros de inventario generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Inventory
     *     parameters:
     *       - in: path
     *         name: countInventory
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de registros de inventario a generar
     *     responses:
     *       200:
     *         description: Lista de registros de inventario generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Inventory'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countInventory", controller.getAllInventory);

    return router;
  }
}
