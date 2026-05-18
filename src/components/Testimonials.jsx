import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { SectionWrapper } from '../hoc';
import { review1, review2, review3, review4, review5, review6 } from '../assets';

// Beautiful Custom SVG flags to bypass Windows emoji rendering limitations
const USFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm shadow-sm inline-block border border-white/10" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <rect width="640" height="480" fill="#b22234"/>
    <path d="M0 37h640M0 111h640M0 185h640M0 259h640M0 333h640M0 407h640" stroke="#fff" strokeWidth="37"/>
    <rect width="256" height="258" fill="#3c3b6e"/>
    {/* Simplified high-performance stars */}
    <circle cx="42" cy="42" r="6" fill="#fff"/>
    <circle cx="106" cy="42" r="6" fill="#fff"/>
    <circle cx="170" cy="42" r="6" fill="#fff"/>
    <circle cx="234" cy="42" r="6" fill="#fff"/>
    <circle cx="74" cy="98" r="6" fill="#fff"/>
    <circle cx="138" cy="98" r="6" fill="#fff"/>
    <circle cx="202" cy="98" r="6" fill="#fff"/>
    <circle cx="42" cy="154" r="6" fill="#fff"/>
    <circle cx="106" cy="154" r="6" fill="#fff"/>
    <circle cx="170" cy="154" r="6" fill="#fff"/>
    <circle cx="234" cy="154" r="6" fill="#fff"/>
    <circle cx="74" cy="210" r="6" fill="#fff"/>
    <circle cx="138" cy="210" r="6" fill="#fff"/>
    <circle cx="202" cy="210" r="6" fill="#fff"/>
  </svg>
);

const NGFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm shadow-sm inline-block border border-white/10" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <rect width="213.3" height="480" fill="#008751"/>
    <rect x="213.3" width="213.4" height="480" fill="#ffffff"/>
    <rect x="426.7" width="213.3" height="480" fill="#008751"/>
  </svg>
);

const AUFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm shadow-sm inline-block border border-white/10" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <rect width="640" height="480" fill="#00008b"/>
    {/* Simplified Union Jack */}
    <path d="M0 0l640 480M640 0L0 480" stroke="#fff" strokeWidth="48"/>
    <path d="M0 0l640 480M640 0L0 480" stroke="#ff0000" strokeWidth="24"/>
    <path d="M320 0v480M0 240h640" stroke="#fff" strokeWidth="80"/>
    <path d="M320 0v480M0 240h640" stroke="#ff0000" strokeWidth="48"/>
    {/* Southern Cross stars */}
    <path d="M160 360l8 24h24l-20 14 8 24-20-15-20 15 8-24-20-14h24z" fill="#fff"/>
    <path d="M480 120l5 15h15l-12 9 5 15-13-10-12 10 5-15-13-9h15z" fill="#fff"/>
    <path d="M480 360l5 15h15l-12 9 5 15-13-10-12 10 5-15-13-9h15z" fill="#fff"/>
    <path d="M540 240l5 15h15l-12 9 5 15-13-10-12 10 5-15-13-9h15z" fill="#fff"/>
    <path d="M420 200l5 15h15l-12 9 5 15-13-10-12 10 5-15-13-9h15z" fill="#fff"/>
  </svg>
);

const flags = {
  "United States": <USFlag />,
  "Nigeria": <NGFlag />,
  "Australia": <AUFlag />
};

const testimonialsData = [
  {
    client: "panamaforms",
    country: "United States",
    rating: 5,
    review: "It has been a pleasure working with you, and your contributions to our project have been truly valuable. We look forward to continuing to work with you.",
    date: "May 2026",
    proofImage: review1,
    badge: null
  },
  {
    client: "isabella_jho",
    country: "Nigeria",
    rating: 5,
    review: "Muhamad fully understood what it is I wanted tho we are not done but the little that's been handled shows Muhamad knows his line of work. Would recommend him on any job relating to SaaS product anytime any day.",
    date: "April 2026",
    proofImage: review2,
    badge: null
  },
  {
    client: "williams9888",
    country: "United States",
    rating: 5,
    review: "An exceptional SaaS web developer who consistently delivers high-quality, scalable solutions. Their attention to detail and problem-solving skills made the entire development process smooth and efficient, while maintaining excellent communication and exceeding expectations at every stage. Thanks a lot Ismaeel.",
    date: "May 2026",
    proofImage: review3,
    badge: "Repeat Client"
  },
  {
    client: "zaheerm1",
    country: "Australia",
    rating: 5,
    review: "Communication was easy and the project was delivered to a high quality.",
    date: "March 2026",
    proofImage: review4,
    badge: null
  },
  {
    client: "tdavis1911",
    country: "United States",
    rating: 5,
    review: "Excellent experience from start to finish. The developer showed a high level of professionalism, strong attention to detail, and a clear understanding of the project requirements. He was cooperative throughout the process, responsive to feedback, and willing to make the necessary adjustments to get the final product aligned with the vision.",
    date: "May 2026",
    proofImage: review5,
    badge: "Repeat Client"
  },
  {
    client: "tdavis1911",
    country: "United States",
    rating: 5,
    review: "Great work on the PDF report analytics download feature. The one-click download functionality is smooth, the report layout is clean and readable, and the analytics are organized in a clear, structured format. The freelancer was professional, responsive, and easy to work with throughout. This feature adds real value to the project.",
    date: "May 2026",
    proofImage: review6,
    badge: "Repeat Client"
  }
];

// Lazy Modal Image with Skeleton Blur Placeholders
const LazyModalImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#151030]/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-20">
          <div className="w-12 h-12 border-4 border-[#00e9ff] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-400 text-xs font-semibold tracking-wide animate-pulse">Loading secure proof...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`max-w-full max-h-[70vh] object-contain transition-all duration-700 ease-out rounded-xl ${
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-md"
        }`}
      />
    </div>
  );
};

const Testimonials = () => {
  const [activeProof, setActiveProof] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProof(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when activeProof modal is open to prevent scroll leakage
  useEffect(() => {
    if (activeProof) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProof]);

  const handleMobileScroll = (direction) => {
    let nextIndex;
    if (direction === 'prev') {
      nextIndex = mobileIndex === 0 ? testimonialsData.length - 1 : mobileIndex - 1;
    } else {
      nextIndex = mobileIndex === testimonialsData.length - 1 ? 0 : mobileIndex + 1;
    }
    setMobileIndex(nextIndex);
    
    // Smooth scroll the track
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Monitor manual scroll snaps to keep active dot synchronized
  const handleScrollSnap = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);
      if (index >= 0 && index < testimonialsData.length) {
        setMobileIndex(index);
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background spotlights matching the Experience component */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#915EFF] rounded-full filter blur-3xl opacity-[0.08] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00e9ff] rounded-full filter blur-3xl opacity-[0.08] pointer-events-none"></div>

      {/* Header Container */}
      <div className="text-center mb-16 relative z-10">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-bold">
          Trusted by Clients Worldwide
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
          Social Proof<span className="text-[#00e9ff]">.</span>
        </h2>
        <p className="mt-4 text-[#dfd9ff] text-[15px] sm:text-lg max-w-3xl mx-auto leading-relaxed opacity-85">
          Real feedback from clients I’ve worked with across SaaS, AI, dashboards, APIs, and modern web applications.
        </p>
      </div>

      {/* Testimonials Layout */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Desktop View: Premium Glassmorphic Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#151030]/50 backdrop-blur-xl rounded-3xl p-8 border border-white/5 hover:border-[#00e9ff]/40 hover:shadow-[0_15px_30px_rgba(0,233,255,0.08)] transition-all duration-300 relative group flex flex-col justify-between min-h-[380px] overflow-hidden"
            >
              {/* Animated Floating Quotes Decoration */}
              <div className="absolute -right-2 -top-4 text-white/5 text-[140px] font-serif select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-[#00e9ff]/5">
                “
              </div>

              <div>
                {/* Ratings, Badges & Verification Row */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]" />
                    ))}
                  </div>

                  {/* Repeat Badge */}
                  {item.badge ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      {item.badge}
                    </span>
                  ) : (
                    <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 select-none">
                      Verified Review ✓
                    </div>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-[#dfd9ff] text-[15px] leading-relaxed italic relative z-10 mb-8 line-clamp-6 text-justify">
                  “{item.review}”
                </p>
              </div>

              {/* Card Footer: Client Info & Action Button */}
              <div className="border-t border-white/5 pt-6 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-1.5">
                      @{item.client}
                    </h4>
                    <span className="text-gray-400 text-xs flex items-center gap-1.5 mt-0.5 font-medium">
                      <span>{flags[item.country] || "🌐"}</span> {item.country}
                    </span>
                  </div>

                  <span className="font-extrabold text-white text-[13px] tracking-tight hover:text-[#1dbf73] transition-colors select-none">
                    fiverr<span className="text-[#1dbf73]">.</span>
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveProof(item)}
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-[#00e9ff]/10 text-white hover:text-[#00e9ff] rounded-xl border border-white/10 hover:border-[#00e9ff]/30 text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  View Fiverr Proof
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Swipeable Touch Track + Nav */}
        <div className="md:hidden w-full relative px-2">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScrollSnap}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-4 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialsData.map((item, index) => (
              <div
                key={index}
                className="w-full shrink-0 snap-center snap-always"
              >
                <div className="bg-[#151030]/50 backdrop-blur-xl rounded-3xl p-6 border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
                  {/* Floating Quotes */}
                  <div className="absolute -right-2 -top-4 text-white/5 text-[110px] font-serif select-none pointer-events-none">
                    “
                  </div>

                  <div>
                    {/* Header: Stars & Badge */}
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_3px_rgba(251,191,36,0.4)]" />
                        ))}
                      </div>

                      {item.badge ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          {item.badge}
                        </span>
                      ) : (
                        <div className="text-[10px] font-medium text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                          Verified ✓
                        </div>
                      )}
                    </div>

                    {/* Review text */}
                    <p className="text-[#dfd9ff] text-[14px] leading-relaxed italic mb-6 line-clamp-6 text-justify">
                      “{item.review}”
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-white/5 pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-white font-bold text-sm">@{item.client}</h4>
                        <span className="text-gray-400 text-[11px] flex items-center gap-1 mt-0.5">
                          <span>{flags[item.country] || "🌐"}</span> {item.country}
                        </span>
                      </div>
                      <span className="font-extrabold text-white text-[12px] tracking-tight">
                        fiverr<span className="text-[#1dbf73]">.</span>
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveProof(item)}
                      className="w-full py-2.5 px-4 bg-white/5 hover:bg-[#00e9ff]/10 text-white hover:text-[#00e9ff] rounded-xl border border-white/10 hover:border-[#00e9ff]/30 text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      View Fiverr Proof
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls on Mobile */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Arrows */}
            <button
              onClick={() => handleMobileScroll('prev')}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setMobileIndex(i);
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({
                        left: i * scrollContainerRef.current.clientWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    mobileIndex === i ? 'w-6 bg-[#00e9ff]' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handleMobileScroll('next')}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Verification Lightbox Modal */}
      <AnimatePresence>
        {activeProof && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setActiveProof(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-[#151030] rounded-3xl border border-white/10 p-5 max-w-3xl w-full shadow-2xl overflow-hidden flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#00e9ff] font-bold text-base sm:text-lg">Fiverr Review Verification</span>
                  <span className="text-[10px] px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-1 font-bold tracking-wide select-none">
                    ✓ Verified Contract
                  </span>
                </div>
                <button
                  onClick={() => setActiveProof(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 hover:border-white/20 transition-all font-semibold"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body: Custom lazy loaded image with skeletons */}
              <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#050816] flex items-center justify-center">
                <LazyModalImage src={activeProof.proofImage} alt={`Review proof for @${activeProof.client}`} />
              </div>

              {/* Modal Footer */}
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-xs sm:text-sm font-medium">
                  Verified Fiverr Review for client <strong className="text-white">@{activeProof.client}</strong> from {activeProof.country}.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Testimonials, 'testimonials');
