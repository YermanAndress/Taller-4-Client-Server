import { Router } from "express";
import { EmployeesController } from "./employees.controller";

export class EmployeesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new EmployeesController();

    /**
     * @openapi
     * /api/employees/{countEmployees}:
     *   get:
     *     summary: Obtener listado de empleados
     *     description: Retorna una lista de empleados generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Employees
     *     parameters:
     *       - in: path
     *         name: countEmployees
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de empleados a generar
     *     responses:
     *       200:
     *         description: Lista de empleados generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Employee'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countEmployees", controller.getAllEmployees);

    return router;
  }
}
