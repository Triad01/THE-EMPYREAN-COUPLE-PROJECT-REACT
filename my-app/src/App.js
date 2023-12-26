import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./Components/Layout/RootLayout";
import LoadingSpinner from "./Components/UI/LoadingSpinner";
// import AdminPage from "./Pages/AdminPage";
// import AboutPage from "./Pages/About";
// import ErrorPage from "./Pages/ErrorPage";
// import ProductPage from "./Pages/ProductPage";
// import HomePage from "./Pages/Home/Home";

const AdminPage = lazy(() => import("./Pages/AdminPage"));
const AboutPage = lazy(() => import("./Pages/About/About"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const ProductPage = lazy(() => import("./Pages/ProductPage"));
const HomePage = lazy(() => import("./Pages/Home/Home"));
const LoginPage = lazy(() => import("./Pages/Login/LoginPage"));
const SignupPage = lazy(() => import("./Pages/Signup/Signup"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: "products",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ProductPage />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: "/signup",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <SignupPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "admin",
      element: (
        <Suspense fallback={<p>Loadig...</p>}>
          <AdminPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
