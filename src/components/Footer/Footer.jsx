import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MessageCircle, MapPin, Send, Phone, Mail, Clock } from 'lucide-react';
import logo from '../../assets/images/logo-white.png';
import './Footer.css';

// lucide-react no longer ships brand/logo icons, so Facebook and
// Instagram marks are defined inline here, matching the icon set's style.
function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <img src={logo} alt="Kolonia Polonia Hair Studio logo" className="footer__logo" />
          <p>
            Kolonia Polonia Hair Studio is your one-stop destination for beauty, grooming and
            relaxation in Alappuzha.
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/share/1C76qpmbNR/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon size={16} />
            </a>
            <a href="https://www.instagram.com/kolonia_polonia_alleppy?igsh=MW04bXEweGVhaGhxZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
            <a href="https://wa.me/919847221919" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle size={16} strokeWidth={2} />
            </a>
            <a href="https://maps.app.goo.gl/6RjtFFGxjoUxqbWs6" aria-label="Location">
              <MapPin size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            <li><NavLink to="/services">Haircut &amp; Styling</NavLink></li>
            <li><NavLink to="/services">Hair Color &amp; Treatment</NavLink></li>
            <li><NavLink to="/services">Skin &amp; Face Care</NavLink></li>
            <li><NavLink to="/services">Spa &amp; Relaxation</NavLink></li>
            <li><NavLink to="/services">Nails &amp; Pedicure</NavLink></li>
            <li><NavLink to="/services">Threading &amp; Waxing</NavLink></li>
            <li><NavLink to="/services">Makeup &amp; Bridal</NavLink></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact Info</h4>
          <ul className="footer__contact">
            <li>
              <MapPin size={16} strokeWidth={2} />
              <span>Near Dummy Road, Alappuzha, Kerala &ndash; 688001</span>
            </li>
            <li>
              <Phone size={16} strokeWidth={2} />
              <span>98472 21919</span>
            </li>
            <li>
              <Mail size={16} strokeWidth={2} />
              <span>info@koloniapolonia.com</span>
            </li>
            <li>
              <Clock size={16} strokeWidth={2} />
              <span>10:00 AM - 8:00 PM (All Days Open)</span>
            </li>
          </ul>
        </div>

        {/* <div className="footer__col">
          <h4>Newsletter</h4>
          <p>Subscribe to get our latest updates and offers.</p>
          <form className="footer__newsletter" onSubmit={handleSubscribe}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" aria-label="Subscribe">
              <Send size={16} strokeWidth={2} />
            </button>
          </form>
          {subscribed && <p className="footer__subscribed">Thank you for subscribing!</p>}
        </div> */}
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} Kolonia Polonia Hair Studio. All Rights Reserved.</p>
          <p>Crafted with <span className="footer-heart">&hearts;</span> for Beauty &amp; Confidence by <a href="https://adithyanskumar.netlify.app" target="_blank" rel="noopener noreferrer">Adithyan</a></p>
        </div>
      </div>
    </footer>
  );
}
