import { useEffect } from "react";
import { Routes, Route, useLocation  } from "react-router-dom";

import Header         from "./components/layout/Header";
import Footer         from "./components/layout/Footer";
import LandingPage    from "./pages/landing/LandingPage";
import AboutPage      from "./pages/about/AboutPage";
import TreatmentsPage from "./pages/treatments/TreatmentsPage";
import ReviewsPage    from "./pages/reviews/ReviewsPage";
import FloatingCTA    from "./components/cta/FloatingCTA";

export default function App() {

  const { pathname } = useLocation();

  // 페이지 이동 시 스크롤 0
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/"            element={<LandingPage />} />
          <Route path="/about"       element={<AboutPage />} />
          <Route path="/reviews"     element={<ReviewsPage />} />
          <Route path="/treatments"     element={<TreatmentsPage />} />
        </Routes>
      </main>
      <FloatingCTA />
      <Footer />
    </>
  )
}
