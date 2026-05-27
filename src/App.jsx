import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import BrandLoader from "./components/BrandLoader.jsx";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showLoader ? <BrandLoader key="app-loader" /> : <AppRoutes key="app-routes" />}
    </AnimatePresence>
  );
}

export default App;
