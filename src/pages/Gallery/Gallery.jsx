import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, X, SlidersHorizontal, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Reveal, { RevealStagger, RevealStaggerItem } from '../../components/Reveal/Reveal';
import { IMG } from '../../assets/images/unsplash';
import './Gallery.css';

const FILTERS = ['All', 'Hair', 'Makeup', 'Bridal', 'Beard', 'Spa', 'Nails'];

const VIDEOS = [
  { title: 'Modern Fade Haircut', tag: '#Haircut', duration: '0:45', image: IMG.haircutMenClose },
  { title: 'Balayage Hair Color', tag: '#HairColor', duration: '0:60', image: IMG.hairColorWoman },
  { title: 'Hair Spa Therapy', tag: '#Spa', duration: '0:50', image: IMG.hairSpa },
  { title: 'Bridal Makeup Look', tag: '#Bridal', duration: '1:10', image: IMG.bridalMakeup },
];

const PHOTOS = [
  { src: IMG.haircutMenClose, alt: 'Sharp modern men\u2019s haircut', category: 'Hair' },
  { src: IMG.hairColorWoman, alt: 'Long curled balayage hair color', category: 'Hair' },
  { src: IMG.beardGrooming, alt: 'Precision beard grooming', category: 'Beard' },
  { src: IMG.bridalMakeup, alt: 'Traditional bridal makeup and jewellery', category: 'Bridal' },
  { src: IMG.hairStylingCurls, alt: 'Elegant updo hairstyle', category: 'Hair' },
  { src: IMG.facial, alt: 'Relaxing facial treatment', category: 'Spa' },
  { src: IMG.nailPolish, alt: 'Gel nail polish application', category: 'Nails' },
  { src: IMG.beardGroomingClose, alt: 'Close up beard styling', category: 'Beard' },
  { src: IMG.groomMakeup, alt: 'Party makeup application', category: 'Makeup' },
  { src: IMG.massageSpa, alt: 'Under eye hydration care', category: 'Makeup' },
  { src: IMG.hairColorWoman, alt: 'Voluminous curled hairstyle', category: 'Hair' },
  { src: IMG.nailArt, alt: 'Detailed nail art design', category: 'Nails' },
  { src: IMG.massage, alt: 'Head massage relaxation therapy', category: 'Spa' },
  { src: IMG.hairSpa, alt: 'Wavy hair spa result', category: 'Hair' },
  { src: IMG.nailPolish, alt: 'Fresh manicure finish', category: 'Nails' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const scrollerRef = useRef(null);

  const filteredPhotos = useMemo(
    () => (activeFilter === 'All' ? PHOTOS : PHOTOS.filter((p) => p.category === activeFilter)),
    [activeFilter],
  );

  const scrollVideos = (dir) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((i) => (i + 1) % filteredPhotos.length);
  const showPrev = () => setLightboxIndex((i) => (i - 1 + filteredPhotos.length) % filteredPhotos.length);

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse real transformations from Kolonia Polonia Hair Studio: haircuts, hair color, bridal makeup, beard grooming, spa and nail art in Alappuzha, Kerala."
        keywords="salon gallery Alappuzha, hairstyle photos, bridal makeup gallery, before after salon"
        path="/gallery"
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__media">
          <img
            src={IMG.heroGallery}
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
              <span className="eyebrow eyebrow--light">Our Gallery</span>


              <h1>Transformations That Speak For Themselves.</h1>


              <p>
                Real people. Real styles. Real confidence. Explore our work and see the Kolonia
                Polonia difference.
              </p>

              {/* <span className="page-hero__sign">
                Biju Polonia
              </span> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="page-hero">
        <div className="page-hero__media">
          <img src={IMG.heroGallery} alt="Kolonia Polonia salon gallery interior" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="eyebrow eyebrow--light">Our Gallery</span>
          <h1>Transformations That Speak For Themselves.</h1>
          <p>
            Real people. Real styles. Real confidence. Explore our work and see the Kolonia
            Polonia difference.
          </p>
        </div>
      </section> */}

      {/* FILTER BAR */}
      <div className="gallery-filterbar">
        <div className="container gallery-filterbar__inner">
          <div className="gallery-filterbar__tabs" role="tablist" aria-label="Filter gallery by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={activeFilter === f}
                className={`gallery-filterbar__tab ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <button type="button" className="gallery-filterbar__filter">
            <SlidersHorizontal size={15} strokeWidth={2} /> Filter
          </button>
        </div>
      </div>

      {/* VIDEO GALLERY */}
      <section className="section-sm gallery-videos">
        <div className="container">
          <Reveal className="gallery-section-head">
            <span className="gallery-section-head__label">
              <Play size={16} strokeWidth={2} /> Video Gallery
            </span>
            <button type="button" className="gallery-section-head__link">View All Videos &rarr;</button>
          </Reveal>

          <div className="gallery-videos__row-wrap">
            <button type="button" className="gallery-videos__arrow gallery-videos__arrow--left" onClick={() => scrollVideos(-1)} aria-label="Scroll videos left">
              <ChevronLeft size={20} />
            </button>

            <div className="gallery-videos__row" ref={scrollerRef}>
              {VIDEOS.map((v) => (
                <div className="video-card" key={v.title}>
                  <div className="video-card__thumb">
                    <img src={v.image} alt={v.title} loading="lazy" />
                    <span className="video-card__play"><Play size={20} fill="currentColor" /></span>
                    <span className="video-card__duration">{v.duration}</span>
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.tag}</p>
                </div>
              ))}
            </div>

            <button type="button" className="gallery-videos__arrow gallery-videos__arrow--right" onClick={() => scrollVideos(1)} aria-label="Scroll videos right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section-sm gallery-photos">
        <div className="container">
          <Reveal className="gallery-section-head">
            <span className="gallery-section-head__label">Photo Gallery</span>
            <button type="button" className="gallery-section-head__link">View All Photos &rarr;</button>
          </Reveal>

          <RevealStagger className="gallery-photos__grid" staggerDelay={0.04} amount={0.05}>
            {filteredPhotos.map((photo, i) => (
              <RevealStaggerItem key={`${photo.src}-${i}`} className="gallery-photo">
                <button type="button" onClick={() => openLightbox(i)} aria-label={`View larger image: ${photo.alt}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <span className="gallery-photo__overlay" />
                </button>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          {filteredPhotos.length === 0 && (
            <p className="gallery-photos__empty">No photos found in this category yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div className="container gallery-cta__inner">
          <Reveal direction="left" className="gallery-cta__text">
            <h3>Love Your Look? Let&rsquo;s Create It Together.</h3>
            <p>Book your appointment today and let our experts bring out the best in you.</p>
          </Reveal>
          <Reveal direction="right">
            <NavLink to="/contact" className="btn btn-primary">
              <Calendar size={15} /> Book Appointment
            </NavLink>
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
          >
            <button type="button" className="lightbox__close" onClick={closeLightbox} aria-label="Close preview">
              <X size={26} />
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--left"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <motion.img
              key={filteredPhotos[lightboxIndex].src}
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].alt}
              className="lightbox__img"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <button
              type="button"
              className="lightbox__nav lightbox__nav--right"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
