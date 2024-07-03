import { LoginPage } from "@/pages/auth/signin";
import Bill from "@/pages/bill";
import BillDetail from "@/pages/bill/bill-detail";
import ListClaim from "@/pages/claim";
import NotFound from "@/pages/not-found";
import Order from "@/pages/order";
import PackageDetail from "@/pages/packages/PackageDetail";
import PackageReturn from "@/pages/packages/packages-return";
import CustomizeLabel from "@/pages/setting/components/CustomizeLabel";
import ListCoupon from "@/pages/setting/components/ListCoupon";
import ListProduct from "@/pages/setting/components/ListProduct";
import ListTemplate from "@/pages/setting/components/ListTemplate";
import PriceTable from "@/pages/setting/components/Prices";
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
const OrderPage = lazy(() => import("@/pages/packages"));
const PackageDetailPage = lazy(
  () => import("@/pages/packages/PackageDetailPage")
);

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
          path: "packages",
          element: <OrderPage />,
        },
        {
          path: "student/details",
          element: <PackageDetailPage />,
        },
        {
          path: "package/details",
          element: <PackageDetail />,
        },
        {
          path: "package/return",
          element: <PackageReturn />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "bill/detail",
          element: <BillDetail />,
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
        {
          path: "setting/template",
          element: <ListTemplate />,
        },
        {
          path: "setting/label",
          element: <CustomizeLabel />,
        },
        {
          path: "setting/prices",
          element: <PriceTable />,
        },
        {
          path: "setting/coupon",
          element: <ListCoupon />,
        },
        {
          path: "claim",
          element: <ListClaim />,
        },
        {
          path: "order",
          element: <Order />,
        },
      ],
    },
  ];

  const publicRoutes = [
    {
      path: "/login",
      element: <LoginPage />,
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
