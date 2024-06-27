import Bill from "@/pages/bill";
import NotFound from "@/pages/not-found";
import ListProduct from "@/pages/setting/components/ListProduct";
import Tracking from "@/pages/tracking";
import { Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";

const DashboardLayout = lazy(
  () => import("@/components/layout/dashboard-layout")
);
const SignInPage = lazy(() => import("@/pages/auth/signin"));
const SignUp = lazy(() => import("@/pages/auth/signup"));
const Account = lazy(() => import("@/pages/account"));
const DashboardPage = lazy(() => import("@/pages/dashboard"));
const OrderPage = lazy(() => import("@/pages/orders"));
const OrderDetailPage = lazy(() => import("@/pages/orders/OrderDetailPage"));

// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: "/",
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true,
        },
        {
          path: "order",
          element: <OrderPage />,
        },
        {
          path: "student/details",
          element: <OrderDetailPage />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "bill",
          element: <Bill />,
        },
        {
          path: "tracking",
          element: <Tracking ListPackages={[]} codes={[]} />,
        },
        {
          path: "setting/product",
          element: <ListProduct />,
        },
      ],
    },
  ];

  const publicRoutes = [
    {
      path: "/login",
      element: <SignInPage />,
      index: true,
    },
    {
      path: "/signup",
      element: <SignUp />,
      index: true,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
