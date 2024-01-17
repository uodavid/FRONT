import { createBrowserRouter } from "react-router-dom";
import HomePage from ".pages/home/home"
import CategoriasPage from ".pages/categorias/categorias"
import ProductosPage from ".pages/productos/productos"
import ClientesPage from ".pages/clientes/clientes"
import PedidosPage from ".pages/pedidos/pedidos"
import LoginPage from ".pages/login/login"
import UsuariosPage from ".pages/usuarios/usuarios"
import MainLayout from "./layouts/main-layout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/categorias",
          element: <CategoriasPage/>,
        },
        {
          path: "/productos",
          element: <ProductosPage/>,
        },
        {
          path: "/pedidos",
          element: <PedidosPage/>,
        },
        {
          path: "/usuarios",
          element: <UsuariosPage/>,
        },
        {
          path: "/clientes",
          element: <ClientesPage/>,
        },
      ]
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
  ]);

  export default router;