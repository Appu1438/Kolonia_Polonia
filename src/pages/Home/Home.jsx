import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Users,
  Heart,
  MapPin,
  Award,
  ShieldCheck,
  Sparkles,
  Gem,
  ThumbsUp,
  Phone,
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Reveal, { RevealStagger, RevealStaggerItem } from '../../components/Reveal/Reveal';
import { IMG } from '../../assets/images/unsplash';
import './Home.css';

const STATS = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Heart, value: '5000+', label: 'Happy Clients' },
  { icon: MapPin, value: '3', label: 'Branches' },
  { icon: Users, value: '20+', label: 'Expert Stylists' },
];

const SERVICES = [
  { title: 'Haircut & Styling', tag: 'Trendy cuts & styling for every personality', image: IMG.haircutMenClose },
  { title: 'Hair Color & Treatment', tag: 'Vibrant color, highlights & hair care solutions', image: IMG.hairColorWoman },
  { title: 'Bridal Makeover', tag: 'Stunning bridal looks for your big day', image: IMG.bridalMakeup },
  { title: 'Skin & Face Care', tag: 'Rejuvenate, refresh & glow naturally', image: IMG.facial },
  { title: 'Spa & Relaxation', tag: 'Relax your body, refresh your mind', image: IMG.massage },
  { title: 'Nails & Pedicure', tag: 'Perfect nails, flawless finishes', image: IMG.nailArt },
  { title: 'Threading & Waxing', tag: 'Precision grooming with care', image: IMG.threading },
  { title: 'Makeup & Party Look', tag: 'Glam looks for parties & special occasions', image: IMG.groomMakeup },
  { title: 'Beard Grooming', tag: 'Sharp beard styles that define you', image: IMG.beardGrooming },
  { title: 'Men\u2019s Grooming', tag: 'Complete grooming for the modern man', image: IMG.haircutMen },
];

const BRANCHES = [
  { tag: 'Main Branch', name: 'Alappuzha', address: 'Near Dummy Road, Alappuzha, Kerala \u2013 688001', image: IMG.branchInterior1 },
  { tag: 'Branch 2', name: 'Alappuzha North', address: 'Near Dummy Junction, Alappuzha, Kerala \u2013 688002', image: IMG.branchInterior2 },
  { tag: 'Branch 3', name: 'Cherthala', address: 'Near Dummy Bypass, Cherthala, Kerala \u2013 688524', image: IMG.branchInterior3 },
];

const WHY_US = [
  { icon: ThumbsUp, label: 'Experienced & Certified Stylists' },
  { icon: Gem, label: 'High Quality Products' },
  { icon: ShieldCheck, label: 'Hygienic & Safe Environment' },
  { icon: Sparkles, label: 'Trendy & Advanced Techniques' },
  { icon: Heart, label: 'Customer Satisfaction First' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Kolonia Polonia Hair Studio is a premium salon in Alappuzha, Kerala offering haircuts, hair color, bridal makeup, spa, nails, threading and grooming for men & women."
        keywords="salon Alappuzha, hair studio Kerala, bridal makeup Alappuzha, spa Alappuzha, best salon Kerala"
        path="/"
      />

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__media">
          <img src={IMG.heroHome} alt="Kolonia Polonia luxury salon interior" />
          <div className="home-hero__overlay" />
        </div>

        <div className="container home-hero__content">
          <motion.span
            className="home-hero__kicker"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Style That Defines You
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Look Beautiful.
            <br />
            Feel Powerful.
            <br />
            <span className="home-hero__script">Everyday.</span>
          </motion.h1>

          <motion.p
            className="home-hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kolonia Polonia Hair Studio is where expertise meets elegance. Men &amp; Women &mdash;
            all beauty, grooming &amp; wellness services under one roof.
          </motion.p>

          <motion.div
            className="home-hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <NavLink to="/services" className="btn btn-white">
              Explore Services <ArrowRight size={15} />
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline-light">
              <Calendar size={15} /> Book Appointment
            </NavLink>
          </motion.div>
        </div>

        <motion.div
          className="home-hero__badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <span className="home-hero__badge-eyebrow">Expert Care By</span>
          <span className="home-hero__badge-name">Biju Polonia</span>
          <p>Highly sought-after hairstylist known for style, perfection &amp; trust.</p>
        </motion.div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section home-about">
        <div className="container home-about__grid">
          <Reveal direction="left">
            <span className="eyebrow">Welcome To</span>
            <h2>Kolonia Polonia Hair Studio</h2>
            <p className="home-about__lead">
              A premium salon experience in Alappuzha where beauty, luxury, and care come together.
            </p>
            <p>
              From everyday grooming to bridal makeovers, we bring out the best in you with
              creativity, passion, and the finest techniques.
            </p>

            <RevealStagger className="home-about__stats">
              {STATS.map((stat) => (
                <RevealStaggerItem key={stat.label} className="home-about__stat">
                  <stat.icon size={20} strokeWidth={1.6} />
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </RevealStaggerItem>
              ))}
            </RevealStagger>

            <NavLink to="/about" className="btn btn-outline-dark home-about__btn">
              Know More About Us <ArrowRight size={15} />
            </NavLink>
          </Reveal>

          <Reveal direction="right" delay={0.15} className="home-about__images">
            <img src={IMG.beardGrooming} alt="Client receiving a precision beard trim" className="home-about__img home-about__img--1" />
            <img src={IMG.hairColorWoman} alt="Stylist applying rich hair color" className="home-about__img home-about__img--2" />
            <img src={IMG.facial} alt="Client enjoying a relaxing facial" className="home-about__img home-about__img--3" />
            <div className="home-about__quote">
              <Sparkles size={18} strokeWidth={1.6} />
              Beauty Confidence Care
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-sm home-services">
        <div className="container">
          <Reveal className="home-services__head">
            <span className="eyebrow">Our Services</span>
            <h2>All Your Beauty Needs, Under One Roof</h2>
          </Reveal>

          <RevealStagger className="home-services__grid" staggerDelay={0.07}>
            {SERVICES.map((service) => (
              <RevealStaggerItem key={service.title} className="service-card">
                <NavLink to="/services" className="service-card__link">
                  <div className="service-card__img">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.tag}</p>
                </NavLink>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          <Reveal className="home-services__more">
            <NavLink to="/services" className="btn btn-outline-dark">
              View All Services <ArrowRight size={15} />
            </NavLink>
          </Reveal>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="home-branches">
        <div className="container home-branches__inner">
          <Reveal direction="left" className="home-branches__head">
            <span className="eyebrow">Our Branches</span>
            <h2>Visit Our Branches</h2>
            <NavLink to="/contact" className="btn btn-outline-light">
              View Locations <ArrowRight size={15} />
            </NavLink>
          </Reveal>

          <RevealStagger className="home-branches__list" staggerDelay={0.1}>
            {BRANCHES.map((branch) => (
              <RevealStaggerItem key={branch.name} className="branch-card branch-card--dark">
                <div className="branch-card__img">
                  <img src={branch.image} alt={`${branch.name} salon branch interior`} loading="lazy" />
                  <span className="branch-card__tag">{branch.tag}</span>
                </div>
                <div className="branch-card__body">
                  <h3>
                    <MapPin size={16} strokeWidth={2} /> {branch.name}
                  </h3>
                  <p>{branch.address}</p>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-sm home-why">
        <div className="container home-why__inner">
          <Reveal direction="left" className="home-why__head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Because You Deserve the Best</h2>
            <p>
              We don&rsquo;t just enhance beauty, we enhance confidence. Step in, relax and leave the
              best version of yourself.
            </p>
          </Reveal>

          <RevealStagger className="home-why__list" staggerDelay={0.08}>
            {WHY_US.map((item) => (
              <RevealStaggerItem key={item.label} className="home-why__item">
                <item.icon size={20} strokeWidth={1.6} />
                <span>{item.label}</span>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <Reveal direction="left" className="home-cta__text">
            <Phone size={22} strokeWidth={1.6} />
            <div>
              <h3>Ready for a New You?</h3>
              <p>Book your appointment today and experience the Kolonia Polonia difference.</p>
            </div>
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
