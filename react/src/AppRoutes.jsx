import { createBrowserRouter } from "react-router-dom";
import HomePage from './pages/home/home'
import CategoriasPage from "./pages/categorias/categorias";
import ProductosPage from "./pages/productos/productos";
import ClientesPage from "./pages/clientes/clientes";
import PedidosPage from "./pages/pedidos/pedidos";
import LoginPage from "./pages/login/login";
import UsuariosPage from "./pages/usuarios/usuarios";
import MainLayout from "./layouts/main-layout";
import ReduxDemoPage from './pages/redux-demo/redux-demo'
import ContactoStepManualPage from "./pages/contacto/step-manual";
import ContactoStepReduxPage from "./pages/contacto/step-redux";
import VerCategoriasPage from "./pages/categorias/ver/verCategorias";
import VerClientesPage from "./pages/clientes/ver/verClientes";
import VerUsuariosPage from "./pages/usuarios/ver/verUsuarios";
import PrivateRoute from "./components/private-routes";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <PrivateRoute><HomePage/></PrivateRoute>,
        },
        {
          path: "/categorias",
          element: <PrivateRoute><CategoriasPage/></PrivateRoute>,
        },
        {
          path: "/categorias/:id",
          element: <PrivateRoute><VerCategoriasPage/></PrivateRoute>,
        },
        {
          path: "/productos",
          element: <PrivateRoute><ProductosPage/></PrivateRoute>,
        },
        {
          path: "/pedidos",
          element: <PrivateRoute><PedidosPage/></PrivateRoute>,
        },
        {
          path: "/usuarios",
          element: <PrivateRoute><UsuariosPage/></PrivateRoute>,
        },
        {
          path: "/usuarios/:id",
          element: <PrivateRoute><VerUsuariosPage/></PrivateRoute>,
        },
        {
          path: "/clientes",
          element: <PrivateRoute><ClientesPage/></PrivateRoute>,
        },
        {
          path: "/clientes/:id",
          element: <PrivateRoute><VerClientesPage/></PrivateRoute>,
        },
        {
          path: "/redux-demo",
          element: <PrivateRoute><ReduxDemoPage/></PrivateRoute>,
        },
        {
          path: "/contacto-manual",
          element: <PrivateRoute><ContactoStepManualPage/></PrivateRoute>,
        },
        {
          path: "/contacto-redux",
          element: <PrivateRoute><ContactoStepReduxPage/></PrivateRoute>,
        }
      ]
    },
    {
      path: "/login",
      element: <LoginPage/>,
    }
  ]);

export default router;