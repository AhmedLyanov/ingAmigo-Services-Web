import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Spinner } from "@ingamigo/design";
import { ROUTE_PATHS } from "./router-paths";
import DefaultLayout from "@/layouts/default";
import { RouteErrorBoundary } from "../providers/route-error-boundary";

const HomePage = lazy(() => import("@/pages/home/home"));
const AboutPage = lazy(() => import("@/pages/about/about-us"));
const NotFoundPage = lazy(() => import("@/pages/not-found/not-found"));
const HowItWorks = lazy(() => import("@/pages/how-it-works/how-it-works"));
const BecomeASpecialist = lazy(
  () => import("@/pages/become-a-specialist/become-a-specialist"),
);

export function AppRouter() {
  return (
    <BrowserRouter>
      <RouteErrorBoundary>
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <Spinner size="large" />
            </div>
          }
        >
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
              <Route path={ROUTE_PATHS.ABOUT} element={<AboutPage />} />
              <Route path={ROUTE_PATHS.NOT_FOUND} element={<NotFoundPage />} />
              <Route path={ROUTE_PATHS.HOW_IT_WORKS} element={<HowItWorks />} />
              <Route
                path={ROUTE_PATHS.BECOME_A_SPECIALIST}
                element={<BecomeASpecialist />}
              />
            </Route>
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
    </BrowserRouter>
  );
}