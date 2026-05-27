import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { pageTransition } from "../utils/motion";

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ivory text-ink">
      <div className="pointer-events-none fixed inset-0 heritage-noise opacity-70" />
      <div className="pointer-events-none fixed inset-0 temple-pattern opacity-40" />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname + location.search}
          {...pageTransition}
          className="relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MainLayout;
