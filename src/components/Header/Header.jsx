import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Clock, MessageCircle, MapPin, Menu, X, Calendar } from 'lucide-react';
import logo from '../../assets/images/logo.png';
import logowhite from '../../assets/images/logo-white.png';
import './Header.css';

// lucide-react no longer ships brand/logo icons, so Facebook and
// Instagram marks are defined inline here, matching the icon set's style.
function FacebookIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <div className={`topbar ${scrolled ? 'topbar--hidden' : ''}`}>
        <div className="container topbar__inner">
          <span className="topbar__item topbar__item--location">
            <MapPin size={13} strokeWidth={2} />
            Alappuzha, Kerala
          </span>
          <div className="topbar__right">
            <span className="topbar__item">
              <Phone size={13} strokeWidth={2} />
              98472 21919
            </span>
            <span className="topbar__item">
              <Clock size={13} strokeWidth={2} />
              10:00 AM - 8:00 PM
            </span>
            <span className="topbar__socials">
              <a href="https://www.facebook.com/share/1C76qpmbNR/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon size={14} />
              </a>
              <a href="https://www.instagram.com/kolonia_polonia_alleppy?igsh=MW04bXEweGVhaGhxZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon size={14} />
              </a>
              <a href="https://wa.me/919847221919" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={14} strokeWidth={2} />
              </a>
            </span>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header--glass' : ''} ${menuOpen ? 'header--menu-open' : ''}`}>
        <div className="container header__inner">
          <NavLink to="/" className="header__logo" aria-label="Kolonia Polonia Hair Studio home">
            <img src={logo} alt="Kolonia Polonia Hair Studio logo" />
          </NavLink>

          <nav className="header__nav" aria-label="Primary navigation">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <NavLink to="/contact" className="btn btn-primary header__cta">
              <Calendar size={15} strokeWidth={2} />
              Book Appointment
            </NavLink>

            <button
              type="button"
              className="header__burger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-menu__panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-menu__top">
                <img src={logowhite} alt="Kolonia Polonia Hair Studio logo" className="mobile-menu__logo" />
                <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              <ul className="mobile-menu__links">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <NavLink to="/contact" className="btn btn-white" onClick={() => setMenuOpen(false)}>
                <Calendar size={15} strokeWidth={2} />
                Book Appointment
              </NavLink>

              <div className="mobile-menu__contact">
                <p>
                  <Phone size={14} strokeWidth={2} /> 98472 21919
                </p>
                <p>
                  <Clock size={14} strokeWidth={2} /> 10:00 AM - 8:00 PM
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
