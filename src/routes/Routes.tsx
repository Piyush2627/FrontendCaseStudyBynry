import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/login";
import UserLayout from "../layouts/UserLayout";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <MainLayout />,
  },
  {
    path: "/UsersDashboard",
    element: <UserLayout />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: (
      <div className="flex h-screen w-screen flex-col items-center justify-center text-4xl">
        <div className="mb-8 text-9xl font-semibold">404</div>
        <div>
          This Section will be used in future When the application scale.
        </div>
      </div>
    ),
  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}
export default Routes;
