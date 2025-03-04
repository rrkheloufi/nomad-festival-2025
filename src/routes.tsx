import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Program from './pages/Program';
import Tickets from './pages/Tickets';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Edition2023 from './pages/editions/Edition2023';
import Edition2024 from './pages/editions/Edition2024';
import ButtonPage from './pages/ButtonPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/program" element={<Program />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/editions/2023" element={<Edition2023 />} />
      <Route path="/editions/2024" element={<Edition2024 />} />
      <Route path="/buttons" element={<ButtonPage />} />
    </Routes>
  );
}