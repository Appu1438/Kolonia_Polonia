import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Navigation, Calendar, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Reveal, { RevealStagger, RevealStaggerItem } from '../../components/Reveal/Reveal';
import { IMG } from '../../assets/images/unsplash';
import './Contact.css';

const BRANCHES = [
  { tag: 'Main Branch', name: 'Alappuzha', address: 'Near Dummy Road, Alappuzha, Kerala \u2013 688001', phone: '98472 21919', image: IMG.branchInterior1 },
  { tag: 'Branch 2', name: 'Alappuzha North', address: 'Near Dummy Junction, Alappuzha, Kerala \u2013 688002', phone: '98472 21919', image: IMG.branchInterior2 },
  { tag: 'Branch 3', name: 'Cherthala', address: 'Near Dummy Bypass, Cherthala, Kerala \u2013 688524', phone: '98472 21919', image: IMG.branchInterior3 },
];

const INITIAL_FORM = { name: '', phone: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) next.message = 'Please enter a message.';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    // No backend wired up yet - simulate a successful submission.
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Kolonia Polonia Hair Studio in Alappuzha, Kerala. Call, WhatsApp or visit one of our three branches to book your appointment."
        keywords="contact salon Alappuzha, book appointment salon, Kolonia Polonia phone number"
        path="/contact"
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__media">
          <img src={IMG.heroContact} alt="Kolonia Polonia Hair Studio reception area" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="eyebrow eyebrow--light">Contact Us</span>
          <h1>We Would Love To Hear From You.</h1>
          <p>
            Have a question, need an appointment, or want to know more about our services?
            We&rsquo;re here for you!
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="section-sm contact-main">
        <div className="container contact-main__grid">
          <Reveal direction="left" className="contact-form-card">
            <span className="contact-card-label">
              <Mail size={18} strokeWidth={1.8} /> Send Us A Message
            </span>
            <p className="contact-form-card__sub">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} />
                  {errors.name && <span className="contact-form__error">{errors.name}</span>}
                </div>
                <div className="contact-form__field">
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} aria-invalid={!!errors.phone} />
                  {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input id="email" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
                {errors.email && <span className="contact-form__error">{errors.email}</span>}
              </div>

              <div className="contact-form__field">
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Subject" value={form.subject} onChange={handleChange} />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Your Message" value={form.message} onChange={handleChange} aria-invalid={!!errors.message} />
                {errors.message && <span className="contact-form__error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message <Send size={15} />
              </button>

              {submitted && (
                <p className="contact-form__success">
                  <CheckCircle2 size={16} strokeWidth={2} /> Your message has been sent. We&rsquo;ll be in touch soon!
                </p>
              )}
            </form>
          </Reveal>

          <div className="contact-side">
            <Reveal direction="right" className="contact-info-card">
              <span className="contact-card-label">
                <Phone size={18} strokeWidth={1.8} /> Get In Touch
              </span>

              <ul className="contact-info-list">
                <li>
                  <span className="contact-info-list__icon"><MapPin size={17} strokeWidth={1.8} /></span>
                  <div>
                    <strong>Address</strong>
                    <p>Near Dummy Road, Alappuzha, Kerala &ndash; 688001</p>
                  </div>
                </li>
                <li>
                  <span className="contact-info-list__icon"><Phone size={17} strokeWidth={1.8} /></span>
                  <div>
                    <strong>Phone</strong>
                    <p>98472 21919</p>
                  </div>
                </li>
                <li>
                  <span className="contact-info-list__icon"><Mail size={17} strokeWidth={1.8} /></span>
                  <div>
                    <strong>Email</strong>
                    <p>info@koloniapolonia.com</p>
                  </div>
                </li>
                <li>
                  <span className="contact-info-list__icon"><Clock size={17} strokeWidth={1.8} /></span>
                  <div>
                    <strong>Working Hours</strong>
                    <p>10:00 AM &ndash; 8:00 PM (All Days Open)</p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal direction="right" delay={0.1} className="contact-whatsapp-card">
              <div>
                <span className="contact-whatsapp-card__rule" />
                <h3>Your Style. Our Passion. Let&rsquo;s Connect.</h3>
              </div>
              <a href="https://wa.me/919847221919" target="_blank" rel="noopener noreferrer" className="contact-whatsapp-card__icon" aria-label="Chat on WhatsApp">
                <MessageCircle size={26} strokeWidth={1.8} />
              </a>
              <p>Quick Booking on WhatsApp</p>
              <a href="https://wa.me/919847221919" target="_blank" rel="noopener noreferrer" className="btn btn-white">
                Chat Now <MessageCircle size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <div className="contact-map__card">
          <span className="contact-map__icon"><MapPin size={18} strokeWidth={2} /></span>
          <h3>Find Us Here</h3>
          <p>We are conveniently located in the heart of Alappuzha.</p>
          <a
            href="https://maps.google.com/?q=Alappuzha,Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light contact-map__directions"
          >
            Directions <Navigation size={14} />
          </a>
        </div>
        <div className="contact-map__frame" role="img" aria-label="Map placeholder showing Alappuzha, Kerala location">
          <iframe
            title="Kolonia Polonia Hair Studio location map"
            src="https://www.google.com/maps?q=Alappuzha,Kerala&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* BRANCHES */}
      <section className="section-sm contact-branches">
        <div className="container">
          <Reveal className="contact-branches__head">
            <span className="eyebrow">Our Branches</span>
            <h2>Visit Us At Any Of Our Locations</h2>
          </Reveal>

          <RevealStagger className="contact-branches__list" staggerDelay={0.1}>
            {BRANCHES.map((branch) => (
              <RevealStaggerItem key={branch.name} className="branch-card">
                <div className="branch-card__img">
                  <img src={branch.image} alt={`${branch.name} salon branch interior`} loading="lazy" />
                  <span className="branch-card__tag">{branch.tag}</span>
                </div>
                <div className="branch-card__body">
                  <h3>
                    <MapPin size={16} strokeWidth={2} /> {branch.name}
                  </h3>
                  <p>{branch.address}</p>
                  <p className="contact-branches__phone">
                    <Phone size={14} strokeWidth={2} /> {branch.phone}
                  </p>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container contact-cta__inner">
          <Reveal direction="left" className="contact-cta__text">
            <h3>Ready to Experience the Kolonia Polonia Difference?</h3>
            <p>Book your appointment today and let our experts bring out the best in you.</p>
          </Reveal>
          <Reveal direction="right">
            <NavLink to="/contact" className="btn btn-white">
              <Calendar size={15} /> Book Appointment
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
