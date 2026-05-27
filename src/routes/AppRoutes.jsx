import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import BrandLoader from "../components/BrandLoader.jsx";
import MainLayout from "../layouts/MainLayout";

const HomePage = lazy(() => import("../pages/Home.jsx"));
const CollectionsPage = lazy(() => import("../pages/Collections.jsx"));
const CraftsmanshipPage = lazy(() => import("../pages/Craftsmanship.jsx"));
const HeritagePage = lazy(() => import("../pages/Heritage.jsx"));
const JournalPage = lazy(() => import("../pages/Journal.jsx"));
const ConsultationPage = lazy(() => import("../pages/Consultation.jsx"));
const PieceDetailPage = lazy(() => import("../pages/PieceDetail.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFound.jsx"));

function RouteLoader() {
  return <BrandLoader message="Opening the next chapter of Murthy Atelier's by 9th." />;
}

function AppRoutes() {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:pieceSlug" element={<PieceDetailPage />} />
          <Route path="/craftsmanship" element={<CraftsmanshipPage />} />
          <Route path="/heritage" element={<HeritagePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
