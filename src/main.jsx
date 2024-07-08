import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Inicio from "./Pages/Inicio/Inicio";
import Clientes from "./Pages/Clientes/Clientes";
import Creditos from "./Pages/Creditos/Creditos";
import Venta from "./Pages/Venta/Venta";
import Premios from "./Pages/Premios/Premios";
import Caja from "./Pages/Caja/Caja";
import Sinpe from "./Pages/Sinpe/Sinpe";
import Ajustes from "./Pages/Ajustes/Ajustes";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/Clientes",
        element: <Clientes />,
      },
      {
        path: "/Creditos",
        element: <Creditos />,
      },
      {
        path: "/Venta",
        element: <Venta />,
      },
      {
        path: "/Premios",
        element: <Premios />,
      },
      {
        path: "/Caja",
        element: <Caja />,
      },
      {
        path: "/Sinpe",
        element: <Sinpe />,
      },
      {
        path: "/Ajustes",
        element: <Ajustes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
