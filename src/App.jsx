import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

import useLenis from './lib/useLenis';
import Notfound from './pages/NotFound/Notfound';

// function NotFound() {
//   return (
//     <div style={{ padding: '160px 24px', textAlign: 'center', fontFamily: 'var(--font-display)' }}>
//       <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
//       <p style={{ fontFamily: 'var(--font-body)' }}>The page you are looking for could not be found.</p>
//     </div>
//   );
// }

export default function App() {

  useLenis()
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}
