import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import App from './App.jsx';
import About from './routes/About.jsx';
import Survey from './routes/Survey.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      //errorElement: <ErrorPage />,
    },
    { path: "/about", element: <About />},
    { path: "/survey", element: <Survey />},


]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
