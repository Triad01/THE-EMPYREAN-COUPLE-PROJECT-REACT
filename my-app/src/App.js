import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./Pages/AdminPage";
import About from "./Pages/About";
import RootLayout from "./Components/Layout/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import ProductPage from "./Pages/ProductPage";
import HomePage from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", index: true, element: <HomePage /> },
        { path: "about", element: <About /> },
        { path: "products", element: <ProductPage /> },
      ],
    },
    { path: "admin", element: <AdminPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
