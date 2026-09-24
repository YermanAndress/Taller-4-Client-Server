import { Component, inject } from '@angular/core';
import { SalesTableComponent } from '../../components/sales-table/sales-table.component';
import { Sale } from '../../interfaces/sales.interface';
import { SalesService } from '../../services/sales/sales.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de ventas.
 *
 * Se utiliza para gestionar y mostrar un listado de ventas
 * utilizando el componente `SalesTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `SalesService`
 * para obtener las ventas y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-sales',
  templateUrl: `./sales.page.html`,
  imports: [SalesTableComponent, AlertComponent]
})
export class SalesPage {
  /**
   * Listado de ventas obtenidas desde el servicio.
   * @type {Sale[]}
   */
  sales: Sale[] = [];
  /**
     * Estado actual del componente.
     *
     * @default 'init'
     */
    state: State = 'init';


  /**
   * Servicio para obtener ventas.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private salesService = inject(SalesService);

  /**
   * Inicializa el componente y carga las ventas.
   * @remarks
   * Se suscribe al método `getAllSales()` del servicio y
   * asigna los datos recibidos a la propiedad `sales`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.salesService.getAllSales(10).subscribe({
      next: (sales) => {
        this.sales = sales;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}