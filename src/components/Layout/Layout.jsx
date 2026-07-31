import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
