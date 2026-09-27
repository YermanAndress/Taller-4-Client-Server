import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { EmployeesService } from "./employees.service";

/**
 * Controlador de empleados.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con empleados,
 * delegando la lógica de negocio al `EmployeesService`.
 */
export class EmployeesController {

  /**
   * Servicio de empleados.
   */
  private readonly employeesService = new EmployeesService();

  /**
   * Maneja la petición HTTP para obtener un listado de empleados.
   *
   * @remarks
   * El número de empleados a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /employees/10
   * ```
   */
  getAllEmployees = (req: Request, res: Response): void => {
    const { countEmployees } = req.params;

    setTimeout(() => {
      this.employeesService
      .getAllEmployees(Number(countEmployees))
      .then((employees) => res.status(201).json(employees))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
