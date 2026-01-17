import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Loader from "./components/Loader.jsx";
import { AnimatePresence } from "framer-motion";
import "./index.css";

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading (fonts, images, three.js)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // adjust if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? <Loader /> : <App />}
    </AnimatePresence>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
