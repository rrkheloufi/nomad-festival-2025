import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ButtonPage from "./pages/ButtonPage";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import Covoiturage from "./pages/Covoiturage";
import Edition2022 from "./pages/editions/Edition2022";
import Edition2023 from "./pages/editions/Edition2023";
import Edition2024 from "./pages/editions/Edition2024";
import Edition2025 from "./pages/editions/Edition2025";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<ComingSoon title="Boutique" />} />
      <Route path="/program" element={<ComingSoon title="Programme 2026" />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/editions/2023" element={<Edition2023 />} />
      <Route path="/editions/2024" element={<Edition2024 />} />
      <Route path="/editions/2025" element={<Edition2025 />} />
      <Route path="/edition-2022" element={<Edition2022 />} />
      <Route path="/buttons" element={<ButtonPage />} />
      <Route path="/covoiturage" element={<Covoiturage />} />
    </Routes>
  );
}
