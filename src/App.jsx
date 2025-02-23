import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

// layouts
import MainLayouts from "./layouts/MainLayouts";

// pages
import ErrorPage from "./pages/Error/ErrorPage";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <MainLayouts />,
        errorElement: <ErrorPage />
      }
    ]
  );

  return <RouterProvider router={routes} />;
}

export default App;