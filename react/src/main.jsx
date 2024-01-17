import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoute from './AppRoutes.jsx'
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={AppRoute} />,
)
