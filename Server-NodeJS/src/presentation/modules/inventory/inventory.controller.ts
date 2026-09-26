import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { InventoryService } from "./inventory.service";

/**
 * Controlador de inventario.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con el inventario,
 * delegando la lógica de negocio al `InventoryService`.
 */
export class InventoryController {

  /**
   * Servicio de inventario.
   */
  private readonly inventoryService = new InventoryService();

  /**
   * Maneja la petición HTTP para obtener un listado del inventario.
   *
   * @remarks
   * El número de registros a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /inventory/10
   * ```
   */
  getAllInventory = (req: Request, res: Response): void => {
    const { countInventory } = req.params;

    setTimeout(() => {
      this.inventoryService
      .getAllInventory(Number(countInventory))
      .then((inventory) => res.status(201).json(inventory))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
