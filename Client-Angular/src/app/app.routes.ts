import { Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';
import { InventoryPage } from './pages/inventory/inventory.page';
import { SalesPage } from './pages/sales/sales.page';
import { EmployeesPage } from './pages/employees/employees.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 * @see {@link SalesPage}
 * @see {@link InventoryPage}
 * @see {@link EmployeesPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de ventas.
   *
   * @remarks
   * Renderiza el componente `SalesPage`, encargado
   * de mostrar y gestionar el listado de ventas.
   */
  { path: 'sales', component: SalesPage },

  /**
   * Ruta de inventario.
   *
   * @remarks
   * Renderiza el componente `InventoryPage`, encargado
   * de mostrar y gestionar el listado del inventario.
   */
  { path: 'inventory', component: InventoryPage },

  /**
   * Ruta de empleados.
   *
   * @remarks
   * Renderiza el componente `EmployeesPage`, encargado
   * de mostrar y gestionar el listado de empleados.
   */
  { path: 'employees', component: EmployeesPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];