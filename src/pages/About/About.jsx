import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Scissors, Users, Trophy, Star, Heart, ShieldCheck, Sparkles, MapPin, CalendarCheck, Award } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Reveal, { RevealStagger, RevealStaggerItem } from '../../components/Reveal/Reveal';
import { IMG } from '../../assets/images/unsplash';
import './About.css';

const STATS = [
  { icon: Scissors, value: '15+', label: 'Years of Experience' },
  { icon: Users, value: '5000+', label: 'Happy Clients' },
  { icon: Trophy, value: '20+', label: 'Expert Stylists' },
  { icon: Star, value: '', label: 'Premium Products & Top Brands' },
];

const VALUES = [
  { icon: Heart, label: 'Personalized Care' },
  { icon: ShieldCheck, label: 'Hygienic & Safe Environment' },
  { icon: Sparkles, label: 'Trend-Driven Makeovers' },
  { icon: Star, label: 'Customer Satisfaction First' },
];

const BRANCHES = [
  { tag: 'Main Branch', name: 'Alappuzha', address: 'Near Dummy Road, Alappuzha, Kerala \u2013 688001', image: IMG.branchInterior1 },
  { tag: 'Branch 2', name: 'Alappuzha North', address: 'Near Dummy Junction, Alappuzha, Kerala \u2013 688002', image: IMG.branchInterior2 },
  { tag: 'Branch 3', name: 'Cherthala', address: 'Near Dummy Bypass, Cherthala, Kerala \u2013 688524', image: IMG.branchInterior3 },
];

const CTA_ICONS = [
  { icon: CalendarCheck, label: 'Easy Booking' },
  { icon: Users, label: 'Expert Stylists' },
  { icon: Award, label: 'Premium Experience' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Meet Biju Polonia, founder and chief stylist of Kolonia Polonia Hair Studio. 15+ years of expertise delivering personalized hair, beauty and grooming experiences in Alappuzha."
        keywords="Biju Polonia, salon founder Alappuzha, hair studio about, best stylist Kerala"
        path="/about"
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__media">
          <img
            src={IMG.heroAbout}
            alt="Interior of Kolonia Polonia Hair Studio"
          />
          <div className="page-hero__overlay" />
        </div>

        <div className="container page-hero__wrapper">
          <div className="page-hero__content">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow eyebrow--light">
                About Us
              </span>

              <h1>
                Passion. Precision. Perfection.
              </h1>

              <p>
                Kolonia Polonia Hair Studio is more than just a salon.
                It's an experience crafted with passion, driven by
                expertise and delivered with love.
              </p>

              {/* <span className="page-hero__sign">
                Biju Polonia
              </span> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section about-founder">
        <div className="container about-founder__grid">
          <Reveal direction="left" className="about-founder__media">
            <img src={IMG.founderPortrait} alt="Biju Polonia, founder and chief stylist" />
            <div className="about-founder__badge">
              <span>Expert Care By</span>
              <strong>Biju Polonia</strong>
              <em>Biju Polonia</em>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <span className="eyebrow">Founder &amp; Chief Stylist</span>
            <h2>The Vision Behind Kolonia Polonia</h2>
            <p>
              Founded and led by Biju Polonia, a highly sought-after hairstylist with years of
              expertise in the beauty and grooming industry. His dedication, creativity and
              commitment to perfection have made Kolonia Polonia a trusted name in Alappuzha.
            </p>
            <p>
              From classic cuts to trendy transformations, from everyday grooming to bridal
              elegance &mdash; every service is personalized to bring out the best in you.
            </p>

            <RevealStagger className="about-founder__stats" staggerDelay={0.08}>
              {STATS.map((stat) => (
                <RevealStaggerItem key={stat.label} className="about-founder__stat">
                  <span className="about-founder__stat-icon">
                    <stat.icon size={20} strokeWidth={1.5} />
                  </span>
                  {stat.value && <strong>{stat.value}</strong>}
                  <span>{stat.label}</span>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="section-sm about-story">
        <div className="container about-story__grid">
          <Reveal direction="left">
            <span className="eyebrow">Our Story</span>
            <h2>Where Beauty Meets Trust &amp; Transformation</h2>
            <p>
              What started as a small dream has grown into a brand synonymous with quality,
              hygiene and style. We believe every client deserves personalized care in a safe and
              luxurious environment.
            </p>
            <p>
              Our mission is to enhance your natural beauty, boost your confidence and make every
              visit a memorable experience.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.15} className="about-story__media">
            <img src={IMG.founderWorking} alt="Stylist working on a client's hair" />
            <ul className="about-story__values">
              {VALUES.map((v) => (
                <li key={v.label}>
                  <v.icon size={17} strokeWidth={1.7} />
                  {v.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="section-sm about-branches">
        <div className="container">
          <Reveal className="about-branches__head">
            <span className="eyebrow">Our Branches</span>
            <h2>Closer To You</h2>
            <p>
              We are proud to serve you from multiple locations in and around Alappuzha with the
              same luxury experience.
            </p>
          </Reveal>

          <RevealStagger className="about-branches__list" staggerDelay={0.1}>
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
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <Reveal direction="left" className="about-cta__text">
            <h3>Your Best Self Starts Here.</h3>
            <p>Book your appointment today and let our experts take care of the rest.</p>
          </Reveal>

          <Reveal direction="up" className="about-cta__icons">
            {CTA_ICONS.map((item) => (
              <span key={item.label}>
                <item.icon size={18} strokeWidth={1.6} />
                {item.label}
              </span>
            ))}
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
