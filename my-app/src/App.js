import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./Components/Layout/RootLayout";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const AdminPage = lazy(() => import("./Pages/AdminPage"));
const AboutPage = lazy(() => import("./Pages/About/About"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const ProductPage = lazy(() => import("./Pages/Products/Products"));
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
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Suspense fallback={<LoadingSpinner />}>
                <AboutPage />
              </Suspense>
            </Suspense>
          ),
        },
        {
          path: "products",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Suspense fallback={<LoadingSpinner />}>
                <ProductPage />
              </Suspense>
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
