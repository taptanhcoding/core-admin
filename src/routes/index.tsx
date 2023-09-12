import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "src/layout/AdminLayout";
import { routes } from "./routes";
import NotFoundpage from "pages/NotFoundpage";

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
    </Suspense>
  );
}
