import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import{
    createBrowserRouter,
    Navigate,
    RouterProvider
} from 'react-router-dom';

import Home from "./pages/home";
import Contact from "./pages/contact"
import { Toaster } from "react-hot-toast";
import ProjectDetails from "./components/ProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                 path:"/project/:id",
                  element:<ProjectDetails />
            }

        ]

    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Toaster
          position="top-right"
          reverseOrder={false}
        
        />
       <RouterProvider router={router}/>
    </React.StrictMode>,
);
