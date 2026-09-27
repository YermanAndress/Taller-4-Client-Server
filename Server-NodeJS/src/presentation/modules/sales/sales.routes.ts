import { Router } from "express";
import { SalesController } from "./sales.controller";

export class SalesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new SalesController();

    /**
     * @openapi
     * /api/sales/{countSales}:
     *   get:
     *     summary: Obtener listado de ventas
     *     description: Retorna una lista de ventas generadas dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Sales
     *     parameters:
     *       - in: path
     *         name: countSales
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de ventas a generar
     *     responses:
     *       200:
     *         description: Lista de ventas generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Sale'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countSales", controller.getAllSales);

    return router;
  }
}