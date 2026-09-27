import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { SalesService } from "./sales.service";

/**
 * Controlador de ventas.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con ventas,
 * delegando la lógica de negocio al `SalesService`.
 */
export class SalesController {

  /**
   * Servicio de ventas.
   */
  private readonly salesService = new SalesService();

  /**
   * Maneja la petición HTTP para obtener un listado de ventas.
   *
   * @remarks
   * El número de ventas a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /sales/10
   * ```
   */
  getAllSales = (req: Request, res: Response): void => {
    const { countSales } = req.params;

    setTimeout(() => {
      this.salesService
      .getAllSales(Number(countSales))
      .then((sales) => res.status(201).json(sales))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}