import { useEffect, useState, useRef, useCallback } from 'react';
import { Play, Heart, Music, Trophy, Sparkles, Star, Crown, Gift, Cake, X, ChevronDown, PawPrint, Rabbit } from 'lucide-react';

// Documentary images mapping
const images = {
  hero: '/assets/images/documentary/IMG_2630_2026_07_02_12_52_51.PNG',
  childhood: '/assets/images/documentary/child.png',
  australia: '/assets/images/documentary/chapter2.png',
  career: '/assets/images/documentary/chapter3.jpeg',
  current: '/assets/images/documentary/hero1.png',
  love: '/assets/images/documentary/heart.png',
  hair: '/assets/images/documentary/IMG_2636_2026_07_02_12_52_51.png',
  beard: '/assets/images/documentary/IMG_2637_2026_07_02_12_52_51.png',
  games1: '/assets/images/documentary/lego.png',
  games2: '/assets/images/documentary/download.webp',
  games3: '/assets/images/documentary/uno-Flip.png',
  beer: '/assets/images/documentary/IMG_2641_2026_07_02_12_52_51.png',
  playlist: '/assets/images/documentary/playlist.png',
  loveStory: '/assets/images/documentary/love-story.png',
  poem: '/assets/images/documentary/birthday-poem.png',
  awards: '/assets/images/documentary/fame.jpeg',
  credits: '/assets/images/documentary/IMG_2646_2026_07_02_12_52_51.png',
  reveal1: '/assets/images/documentary/IMG_2647_2026_07_02_12_52_51.png',
  reveal2: '/assets/images/documentary/IMG_2648_2026_07_02_12_52_51.png',
  reveal3: '/assets/images/documentary/adventure1.jpeg',
  reveal4: '/assets/images/documentary/adventure2.jpeg',
  hero1: '/assets/images/documentary/hero1.png',
  hero2: '/assets/images/documentary/hero2.png',
  hero3: '/assets/images/documentary/hero3.jpeg',
  animalLover: '/assets/images/documentary/animal-lover.png',
  adsd: '/assets/images/documentary/AdSD.webp',
};

// Sticky Navigation
const Navigation = ({
  activeSection,
  started,
  soundOn,
  onToggleSound,
}: {
  activeSection: string;
  started: boolean;
  soundOn: boolean;
  onToggleSound: () => void;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'timeline', label: 'Story' },
    { id: 'beard', label: 'Beard' },
    { id: 'games', label: 'Games' },
    { id: 'playlist', label: 'Playlist' },
    { id: 'love', label: 'Love' },
    { id: 'animals', label: 'Animals' },
    { id: 'poem', label: 'Poem' },
    { id: 'awards', label: 'Awards' },
    { id: 'credits', label: 'Credits' },
  ];

  return (
    <nav
      className={`fixed top-[34px] left-0 right-0 z-50 h-16 md:h-20 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gold/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <a href="#" className="font-playfair text-lg md:text-xl font-bold text-gold-gradient">
            <span className={started ? 'hidden' : ''}>WHO IS JIJEJU?</span>
          </a>
<button
  onClick={onToggleSound}
  aria-label={soundOn ? "Mute soundtrack" : "Play soundtrack"}
  title={soundOn ? "Mute soundtrack" : "Play soundtrack"}
  className={`fixed top-12 right-6 z-[60]
    hidden md:flex items-center justify-center
    w-10 h-10 rounded-full
    transition-all duration-300
    ${
      soundOn
        ? "bg-gold text-black shadow-[0_0_16px_rgba(212,175,55,0.4)]"
        : "bg-black/40 backdrop-blur-md text-gold border border-gold/30 hover:border-gold hover:bg-black/60"
    }`}
>
  <Music className="w-4 h-4" strokeWidth={2.2} />
</button>
{/* Mobile Music Button */}
<button
  onClick={onToggleSound}
  aria-label={soundOn ? "Mute soundtrack" : "Play soundtrack"}
  title={soundOn ? "Mute soundtrack" : "Play soundtrack"}
  className={`md:hidden fixed bottom-6 right-5 z-[60] ${
  mobileMenuOpen ? "hidden" : "flex"
}
    flex items-center justify-center
    w-12 h-12 rounded-full
    transition-all duration-300
    ${
      soundOn
        ? "bg-gold text-black shadow-[0_0_18px_rgba(212,175,55,0.45)]"
        : "bg-black/60 backdrop-blur-md text-gold border border-gold/30 hover:border-gold"
    }`}
>
  <Music className="w-5 h-5" strokeWidth={2.2} />
</button>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* Episodes Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-2"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close episodes menu' : 'Open episodes menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gold" />
            ) : (
              <span className="font-inter text-xs tracking-wider uppercase text-gold border border-gold/30 px-3 py-1.5 rounded bg-black/40">
                Episodes
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute inset-x-0 top-full overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 bg-black/90 backdrop-blur-xl px-6 pb-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeSection === section.id ? 'text-gold bg-gold/10' : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Premium Particle System
const PremiumParticles = ({ opacityScale = 1 }: { opacityScale?: number }) => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    duration: `${15 + Math.random() * 15}s`,
    size: `${1 + Math.random() * 3}px`,
    opacity: (0.1 + Math.random() * 0.5) * opacityScale,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-glow ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

// Animated Counter
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Progress Bar
const ProgressBar = ({ value }: { value: number }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setWidth(value), 200);
    return () => clearTimeout(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="h-1 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000 ease-out" style={{ width: `${width}%` }} />
    </div>
  );
};

// Section with parallax image
const ParallaxSection = ({
  id,
  image,
  imageAlt,
  children,
  reverse = false,
  bgColor = 'bg-black',
  imagePosition = 'center top',
  imageFit = 'cover',
  imageScale = 1,
  overlayTopOpacity = 0.6,
  showImageLabels = true,
}: {
  id: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
  bgColor?: string;
  imagePosition?: string;
  imageFit?: 'cover' | 'contain';
  imageScale?: number;
  overlayTopOpacity?: number;
  showImageLabels?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-screen ${bgColor} flex items-center py-24 md:py-0 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
         {/* Image card */}
<div
  className={`w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative transition-all duration-1000 ${
  isVisible
    ? 'opacity-100 translate-x-0'
    : reverse
      ? 'opacity-0 translate-x-20'
      : 'opacity-0 -translate-x-20'
}`}
>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative w-full h-full flex items-center justify-center">

      <div className="w-full h-full rounded-2xl overflow-hidden group shadow-2xl border border-gold/20">

        <img
  src={image}
  alt={imageAlt}
  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
    imageFit === 'contain'
      ? 'object-contain'
      : 'object-cover'
  }`}
  style={{
    objectPosition: imagePosition,
    transform: `scale(${imageScale})`,
    transformOrigin: imageFit === 'contain' ? 'center' : 'top center',
  }}
  loading="lazy"
/>

        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,${overlayTopOpacity}) 0%, rgba(0,0,0,0) 60%)`,
          }}
        />

        <div className="absolute inset-0 pointer-events-none film-grain opacity-5" />

      </div>

    </div>
  </div>
</div>

          {/* Content */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

// Hero slideshow — best available portrait & memory photographs
const heroSlides = [
  images.hero2,
  images.hero3,
  images.hero1,
];

// Hero Section
const HeroSection = ({ onStart }: { onStart: () => void }) => {
  const [animate, setAnimate] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Documentary progress bar */}
      <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
        <div className="h-[2px] bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-1000"
            style={{ width: '6%' }}
          />
        </div>
        <div className="bg-black/50 backdrop-blur-md border-b border-gold/10 px-4 py-2 text-center">
          <p className="font-inter text-[10px] md:text-xs tracking-[0.25em] uppercase">
            <span className="text-gold">Prologue</span>
            <span className="text-gray-600 mx-2">–</span>
            <span className="text-gray-400">Celebrating Aman</span>
          </p>
        </div>
      </div>

      {/* Cinematic photo slideshow */}
      <div className="absolute inset-0">
        {heroSlides.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== activeSlide}
          >
            <img
              key={`${src}-${index === activeSlide}`}
              src={src}
              alt=""
              className={`w-full h-full object-cover ${index === activeSlide ? 'hero-ken-burns' : ''}`}
              style={{ objectPosition: 'center top' }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/70" />
      </div>

      {/* Cinematic vignette */}
      <div className="absolute inset-0 pointer-events-none z-[1] hero-vignette" />

      {/* Film grain overlay */}
      <div className="absolute inset-0 pointer-events-none z-[2] film-grain opacity-[0.08]" />

      {/* Cinematic title glow — layered for depth */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] pointer-events-none z-[3] transition-opacity duration-1000 delay-300 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="w-[min(90vw,720px)] h-[280px] md:h-[320px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 40%, transparent 75%)',
          }}
        />
        <div
          className="absolute inset-0 w-[min(90vw,520px)] h-[200px] md:h-[240px] mx-auto left-1/2 -translate-x-1/2 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(244,208,63,0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      <PremiumParticles opacityScale={0.7} />

      {/* Content */}
      <div className="absolute inset-x-0 top-[98px] md:top-[114px] bottom-0 z-10 mx-auto flex flex-col items-center justify-center text-center px-6 max-w-4xl pb-20">
        {/* Tagline */}
        <p
          className={`font-inter text-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-6 md:mb-8 transition-all duration-1000 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A Documentary Special
        </p>

        {/* Main Title */}
        <h1 className="relative mb-6 md:mb-8 w-full">
          <span
            className={`block font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 tracking-tight transition-all duration-1000 delay-200 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-gold-gradient">CELEBRATING</span>
          </span>
          <span
            className={`block font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-all duration-1000 delay-400 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-white text-glow">AMANTEJ</span>
          </span>
        </h1>

        {/* Divider */}
        <div
          className={`w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 md:mb-8 transition-all duration-1000 delay-600 ${
            animate ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Subtitle */}
        <p
          className={`font-cormorant text-lg md:text-2xl lg:text-[1.75rem] text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 italic leading-relaxed md:leading-loose transition-all duration-1000 delay-700 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          This isn't just a birthday. It's a celebration of the man who became family.
        </p>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className={`group relative inline-flex items-center gap-4 btn-gold-hero px-12 py-4 rounded-full shadow-2xl overflow-hidden transition-all duration-700 delay-500 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Play className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" fill="currentColor" />
          <span className="relative z-10 font-inter font-semibold tracking-wider">Begin the Journey</span>
        </button>

        {/* Premiere line: elegant, centered, fades with hero */}
        <div className={`mt-5 transition-all duration-1000 delay-700 relative z-50 ${animate ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="flex items-center justify-center gap-3">
            <span className="text-gold text-[14px]" style={{ opacity: 0.85, letterSpacing: '0.25em' }} aria-hidden="true">🎂</span>
            <span className="text-gold text-[14px] font-inter uppercase" style={{ opacity: 0.85, letterSpacing: '0.25em' }}>PREMIERING • 19th July 2026</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mt-5 flex flex-col items-center text-gray-400">
  <span className="font-inter text-[10px] md:text-xs tracking-[0.3em] uppercase">
    Scroll for Episode One
  </span>

  <ChevronDown className="w-5 h-5 mt-2 animate-bounce text-gold" />
</div>
      </div>
    </section>
  );
};

// Timeline Section - Full viewport chapters
const TimelineSection = () => {
  return (
    <section id="timeline" className="relative">
      {/* Childhood */}
      <ParallaxSection id="childhood" image={images.childhood} imageAlt="The Beginning" imagePosition="center center" imageFit="contain" showImageLabels={false}>
        <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">EPISODE ONE</p>
        <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">The Beginning</h2>
        <blockquote className="font-cormorant text-xl md:text-2xl text-gray-300 italic mb-6">
          "Every remarkable story starts somewhere. This one began long before anyone realised who he would become."
        </blockquote>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-400">
          <div>
            <div className="text-xs uppercase text-gray-500">CASE FILE</div>
            <div className="text-white">Early Years</div>
          </div>
          <div>
            <div className="text-xs uppercase text-gray-500">LOCATION</div>
            <div className="text-white">Gurgaon</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs uppercase text-gray-500">TIMELINE</div>
            <div className="text-white">Episode One</div>
          </div>
        </div>
      </ParallaxSection>

      {/* Australia */}
      <ParallaxSection id="australia" image={images.australia} imageAlt="The Journey" reverse bgColor="bg-black-light">
        <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">EPISODE TWO</p>
        <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">The Journey</h2>
        <blockquote className="font-cormorant text-xl md:text-2xl text-gray-300 italic mb-6">
          "He left familiar streets and crossed oceans not for escape, but for a new language of possibility. From dost he became a mate."
        </blockquote>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-400">
          <div>
            <div className="text-xs uppercase text-gray-500">CASE FILE</div>
            <div className="text-white">Migration</div>
          </div>
          <div>
            <div className="text-xs uppercase text-gray-500">LOCATION</div>
            <div className="text-white">Australia</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs uppercase text-gray-500">TIMELINE</div>
            <div className="text-white">Episode Two</div>
          </div>
        </div>
      </ParallaxSection>

      {/* Career */}
      <ParallaxSection id="career" image={images.career} imageAlt="The Rise" imageFit="cover" imagePosition="center top" overlayTopOpacity={0.25} showImageLabels={false}>
        <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">EPISODE THREE</p>
        <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">The Rise</h2>
        <blockquote className="font-cormorant text-xl md:text-2xl text-gray-300 italic mb-6">
          "Small experiments turned into steady pursuits, a meticulous climb that reshaped his days and the people around him."
        </blockquote>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-400">
          <div>
            <div className="text-xs uppercase text-gray-500">CASE FILE</div>
            <div className="text-white">Professional Growth</div>
          </div>
          <div>
            <div className="text-xs uppercase text-gray-500">LOCATION</div>
            <div className="text-white">Global · Remote</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs uppercase text-gray-500">TIMELINE</div>
            <div className="text-white">Episode Three</div>
          </div>
        </div>
      </ParallaxSection>

      {/* Current Life */}
      <ParallaxSection id="current" image={images.current} imageAlt="The Present" reverse bgColor="bg-black-light">
        <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">EPISODE FOUR</p>
        <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">The Present</h2>
        <blockquote className="font-cormorant text-xl md:text-2xl text-gray-300 italic mb-6">
          "Here, in the quiet between wins and stories, the life he's built becomes plain to see generous, unrushed, complete in its imperfections."
        </blockquote>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-400">
          <div>
            <div className="text-xs uppercase text-gray-500">CASE FILE</div>
            <div className="text-white">Current Life</div>
          </div>
          <div>
            <div className="text-xs uppercase text-gray-500">LOCATION</div>
            <div className="text-white">Present Day</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs uppercase text-gray-500">TIMELINE</div>
            <div className="text-white">Episode Four</div>
          </div>
        </div>
      </ParallaxSection>

      {/* Love */}
      <ParallaxSection id="love-timeline" image={images.love} imageAlt="The Heart">
        <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">EPISODE FIVE</p>
        <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">The Heart</h2>
        <blockquote className="font-cormorant text-xl md:text-2xl text-gray-300 italic mb-6">
          "Some connections arrive quietly and, over time, become the frame through which everything else is seen."
        </blockquote>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-400">
          <div>
            <div className="text-xs uppercase text-gray-500">CASE FILE</div>
            <div className="text-white">Relationship</div>
          </div>
          <div>
            <div className="text-xs uppercase text-gray-500">LOCATION</div>
            <div className="text-white">Secret</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs uppercase text-gray-500">TIMELINE</div>
            <div className="text-white">Episode Five</div>
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};



// Beard Files Section
const BeardFilesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="beard" ref={sectionRef} className="min-h-screen bg-black-light flex items-center py-24 md:py-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* FBI Document */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="fbi-document p-6 md:p-10 rounded-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 fbi-stamp text-xs md:text-sm">CLASSIFIED</div>

              <div className="border-b-2 border-red-900/30 pb-4 mb-6">
                <p className="font-mono text-xs text-gray-600 text-center">FEDERAL BUREAU OF INVESTIGATION</p>
                <p className="font-mono text-xs text-gray-600 text-center">CASE NO. B33RD-2024-JIJEJU</p>
              </div>

              <div className="space-y-4 font-mono text-xs md:text-sm">
                <div className="flex justify-between border-b border-dashed border-gray-400/50 pb-2">
                  <span className="font-bold">SUBJECT:</span>
                  <span>JIJEJU, The Bearded One</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-400/50 pb-2">
                  <span className="font-bold">STATUS:</span>
                  <span className="text-green-800 font-bold">ACTIVE</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-400/50 pb-2">
                  <span className="font-bold">THREAT LEVEL:</span>
                  <span className="text-red-800 font-bold">MAXIMUM CHARM</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-400/50 pb-2">
                  <span className="font-bold">BEARD DENSITY:</span>
                  <span>IMPRESSIVE</span>
                </div>

                <div className="mt-6 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded-r">
                  <p className="font-bold text-yellow-800 text-xs">INVESTIGATOR'S NOTE:</p>
                  <p className="text-gray-700 mt-1 text-xs">
                    Subject exhibits exceptional beard maintenance. The beard serves as both decorative and thinking apparatus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">Episode Six</p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">The Beard Files</h2>
            <p className="font-cormorant text-xl text-gray-400 italic mb-6">A scientific investigation</p>
            <p className="font-cormorant text-lg md:text-xl text-gray-300 leading-relaxed">
              Through careful observation and extensive research, our investigators have documented
              one of the most impressive facial hair specimens in documented history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Game Night Section
const GameNightSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const games = [
    { name: 'LEGO', image: images.games1, description: 'Master builder' },
    { name: 'Taco Cat Goat Cheese Pizza', image: images.reveal1, description: 'Reflex champion' },
    { name: 'UNO Flip', image: images.games3, description: 'Card wizard' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="games" ref={sectionRef} className="min-h-screen bg-black flex items-center py-24 md:py-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">Episode Seven</p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Game Night</h2>
          <p className="font-cormorant text-xl text-gray-400 italic">Where unforgetable memories are made</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className={`group glass-gold rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center top' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">{game.name}</h3>
                  <p className="font-cormorant text-gray-300 text-lg">{game.description}</p>
                </div>
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                  <span className="text-gold text-lg">★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center glass p-8 rounded-xl">
            <div className="text-5xl font-playfair font-bold text-gold-gradient mb-2">
              <AnimatedCounter end={99} suffix="%" />
            </div>
            <p className="font-inter text-sm text-gray-400 uppercase tracking-wider">Win Rate</p>
          </div>
          <div className="text-center glass p-8 rounded-xl">
            <div className="text-5xl font-playfair font-bold text-gold-gradient mb-2">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <p className="font-inter text-sm text-gray-400 uppercase tracking-wider">Fun Had</p>
          </div>
          <div className="text-center glass p-8 rounded-xl">
            <div className="text-5xl font-playfair font-bold text-gold-gradient mb-2">
              <AnimatedCounter end={999} suffix="+" />
            </div>
            <p className="font-inter text-sm text-gray-400 uppercase tracking-wider">Games Played</p>
          </div>
        </div>
      </div>
    </section>
  );
};



// Punjabi Playlist Section
const PunjabiPlaylistSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const playlist = [
    { title: 'Born to Shine', artist: 'Diljit Dosanjh', duration: '3:42' },
    { title: 'Brown Munde', artist: 'AP Dhillon', duration: '3:17' },
    { title: 'Excuses', artist: 'AP Dhillon', duration: '3:01' },
    { title: 'Lover', artist: 'Diljit Dosanjh', duration: '3:28' },
    { title: 'Insane', artist: 'AP Dhillon', duration: '2:58' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="playlist" ref={sectionRef} className="min-h-screen bg-black flex items-center py-24 md:py-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-20">
  <p className="font-inter text-gold text-xs tracking-[0.4em] uppercase mb-4">
    Episode Eight
  </p>

  <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5">
    Punjabi Playlist
  </h2>

  <p className="font-cormorant text-2xl italic text-gray-400">
    The soundtrack of every celebration
  </p>
</div>
        <div className="flex flex-col-reverse md:flex-row items-start gap-12 md:gap-20">
          {/* Playlist */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="glass-dark p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <Music className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white">The Official Jijeju Playlist</h3>
                  <p className="font-inter text-sm text-gray-400">Punjabi Hits Collection</p>
                </div>
              </div>

              <div className="space-y-2">
                {playlist.map((song, index) => (
                  <div
                    key={index}
                    className={`group flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms`, background: 'rgba(255,255,255,0.03)' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-inter text-gray-500 w-6 text-center group-hover:text-gold transition-colors">{index + 1}</span>
                      <div>
                        <p className="font-inter text-white group-hover:text-gold transition-colors">{song.title}</p>
                        <p className="font-inter text-sm text-gray-500">{song.artist}</p>
                      </div>
                    </div>
                    <span className="font-inter text-gray-500">{song.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="group aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden relative">
              <img src={images.playlist} alt="Playlist" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: 'center' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Love Story Section
const LoveStorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="love" ref={sectionRef} className="min-h-screen bg-black-light flex items-center py-24 md:py-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <img src={images.loveStory} alt="Love Story" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <Heart className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 text-gold animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">Episode Nine</p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Love Story</h2>
            <p className="font-cormorant text-xl text-gray-400 italic mb-8">A tale of two hearts</p>

            <p className="font-cormorant text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
              In a world of billions, sometimes two souls find each other. Not by coincidence, but by destiny.
              Their story isn't written in grand gestures, but in quiet moments shared laughter, inside jokes,
              comfortable silences, and the certainty that this is exactly where you're meant to be.
            </p>

            <div className="font-playfair text-gold text-2xl md:text-3xl italic">
              "Some love stories are written in the stars. His was written in every moment they share."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Animal Lover Section
const AnimalLoverSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const petImages = [
    { src: images.animalLover, alt: 'Faithful Companion' },
  ];

  return (
    <section id="animals" ref={sectionRef} className="min-h-screen flex items-center py-24 md:py-0 relative overflow-hidden">
      {/* Warm earthy background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#0f0d0a] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image Grid */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 aspect-[4/5] md:aspect-[3/4] lg:aspect-[5/6] rounded-2xl overflow-hidden relative warm-frame">
                <img
                  src={petImages[0].src}
                  alt={petImages[0].alt}
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105 bg-[#1a1410]"
                  style={{ objectPosition: 'center' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 warm-glass px-4 py-2 rounded-lg">
                  <span className="font-inter text-xs tracking-wider text-amber-200 uppercase">{petImages[0].alt}</span>
                </div>
              </div>

              {/* Smaller images */}
              {petImages.slice(1).map((img, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-xl overflow-hidden relative warm-frame transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    style={{ objectPosition: 'center top' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <PawPrint className="w-6 h-6 text-amber-500" />
              <p className="font-inter text-amber-500 text-xs tracking-[0.3em] uppercase">Episode Ten</p>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Animal Lover
            </h2>

            <p className="font-cormorant text-xl text-amber-200/70 italic mb-8">
              A heart that speaks for those who cannot
            </p>

            <p className="font-cormorant text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              There's a special kind of soul that understands the language of silence 
              the gentle nudge of a wet nose, the soft purr against a tired chest,
              the trusting eyes that hold no judgment, only devotion.
            </p>

            <p className="font-cormorant text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              His bond with animals reveals a tenderness that words cannot capture.
              In their presence, he finds a peace that the noise of the world cannot offer.
              They are not just pets they are family, teachers of unconditional love.
            </p>

            {/* Quote */}
            <div className="relative warm-glass p-6 md:p-8 rounded-2xl">
              <div className="absolute top-4 left-4 text-6xl text-amber-600/30 font-playfair">"</div>
              <p className="font-cormorant text-xl md:text-2xl text-amber-100 italic leading-relaxed relative z-10 pl-6">
                Kindness is best measured by how we treat those who cannot speak.
              </p>
              <div className="mt-4 flex items-center gap-2 pl-6">
                <div className="w-8 h-px bg-amber-600/50" />
                <span className="font-inter text-xs text-amber-500/80 tracking-wider uppercase">A Legacy of Compassion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Birthday Poem Section
const BirthdayPoemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const poemLines = [
    "Another year has come and gone,",
    "Like songs that play from dusk till dawn.",
    "A friend so true, a heart so pure,",
    "Of memories made, there's always more.",
    "",
    "The hair stays perfect, beard stays grand,",
    "The stories grow with each new hand.",
    "From game nights fierce to quiet thought,",
    "The best of friends can't ever be bought.",
    "",
    "So here's to you on this special day,",
    "May joy come near and sadness stray.",
    "Another chapter, bright and new,",
    "Happy Birthday, dear Jijeju."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="poem" ref={sectionRef} className="min-h-screen bg-black flex items-center py-24 md:py-0 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Poem */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="notebook p-8 md:p-12 rounded-2xl notebook-lines relative shadow-2xl">
              <div className="pl-4 md:pl-8">
                {poemLines.map((line, index) => (
                  <p
                    key={index}
                    className={`font-cormorant text-lg md:text-xl text-white font-medium leading-loose italic transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${100 + index * 100}ms` }}
                  >
                    {line || <br />}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">Episode Eleven</p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Birthday Poem</h2>
            <p className="font-cormorant text-xl text-gray-200 italic mb-6">Words from the heart</p>

            <div className="aspect-video rounded-2xl overflow-hidden relative">
              <img src={images.poem} alt="Poem" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hall of Fame Section
const HallOfFameSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const awards = [
    { title: 'Legendary Host', year: 'Every gathering becomes a celebration.', icon: Crown },
    { title: 'High Energy Award', year: 'Powered by enthusiasm and good vibes.', icon: Trophy },
    { title: 'Game Night Champion', year: 'Every Night', icon: Star },
    { title: 'Certified Aussie Mate', year: 'From "Dost" to "Mate" — officially.', icon: Sparkles },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="awards" ref={sectionRef} className="min-h-screen bg-black-light flex items-center py-24 md:py-0 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">Episode Twelve</p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hall of Fame</h2>
          <p className="font-cormorant text-xl text-gray-400 italic">A collection of achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className={`award-card glass-gold p-8 rounded-2xl text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-white mb-2">{award.title}</h3>
                <p className="font-inter text-sm text-gold">{award.year}</p>
              </div>
            );
          })}
        </div>

        {/* Featured Image */}
        <div
          className={`aspect-video rounded-2xl overflow-hidden relative transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img src={images.awards} alt="Awards" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

// Movie Credits Section
const MovieCreditsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const credits = [
    { role: 'Documentary Subject', name: 'JIJEJU' },
    { role: 'Director of Excellence', name: 'Life Itself' },
    { role: 'Producer of Stories', name: 'Everyone' },
    
    { role: 'Beard Styling', name: 'Natural Selection' },
    { role: 'Game Tactics', name: 'Strategic Genius' },
    { role: 'Music Supervision', name: 'Punjabi Beats' },
    { role: 'Created & Written By', name: 'AdSD' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="credits" ref={sectionRef} className="min-h-screen bg-black flex items-center py-24 md:py-0 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">Episode Thirteen</p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Credits</h2>
        </div>

        <div className="space-y-4">
          {credits.map((credit, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-6 border-b border-gray-800 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="font-inter text-gray-500 uppercase text-xs md:text-sm tracking-wider">{credit.role}</span>
              <span className="font-playfair text-lg md:text-xl text-white">{credit.name}</span>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 aspect-video rounded-2xl overflow-hidden relative transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img src={images.credits} alt="Credits" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

// Final Reveal Section
const FinalRevealSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reveal" ref={sectionRef} className="min-h-screen bg-black flex flex-col items-center justify-center py-24 relative overflow-hidden">
      <PremiumParticles />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Cake className="w-20 h-20 text-gold mx-auto mb-8 animate-pulse" />

          <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
            Happy Birthday
            <br />
            <span className="text-gold-gradient">Amantej</span>
          </h2>

          <p className="font-cormorant text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto italic leading-relaxed">
            Thank you for the memories, the laughter, the game nights, and for being the kind of friend
            that makes every story worth telling. 
            <br /> 
            Here's to another year of adventures.
          </p>

          {/* Photo Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
            {[images.reveal3, images.reveal2, images.reveal4].map((img, index) => (
              <div
                key={index}
                className={`aspect-square rounded-xl overflow-hidden transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <img src={img} alt={`Memory ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" style={{ objectPosition: 'center top' }} />
              </div>
            ))}
          </div>

          <div className="glass-gold p-12 rounded-2xl mb-12">
            <Gift className="w-12 h-12 text-gold mx-auto mb-6" />
            <p className="font-cormorant text-2xl text-gray-200 mb-4">
  This documentary
</p>

<p className="font-cormorant text-2xl text-gray-200 mb-6">
  was created with love by
</p>

<div className="flex items-center justify-center gap-4">
  <p className="font-playfair text-4xl md:text-5xl font-bold text-gold-gradient">
    AdSD
  </p>

  <img
    src={images.adsd}
    alt="AdSD"
    className="w-20 h-20 object-contain rounded"
    style={{ objectPosition: "center top" }}
  />
</div>

<p className="mt-2 font-cormorant text-lg text-gray-400 italic">
  (The Peak Detailer 😉)
</p>
          
          </div>

<div className="mb-12 text-center">
  <p className="font-inter text-xs uppercase tracking-[0.35em] text-gray-400 mb-6">
    Not Sponsored By:
  </p>

  <div className="flex flex-wrap items-center justify-center gap-8">
    <img
      src="/assets/images/documentary/bunnings.png"
      alt="Bunnings"
      className="h-14 object-contain opacity-80 hover:opacity-100 transition"
    />

    <img
      src="/assets/images/documentary/Coles.png"
      alt="Coles"
      className="h-14 object-contain opacity-80 hover:opacity-100 transition"
    />

    <img
      src="/assets/images/documentary/telstra.jfif"
      alt="Telstra"
      className="h-14 object-contain opacity-80 hover:opacity-100 transition"
    />

    <img
      src="/assets/images/documentary/woolworths.jfif"
      alt="Woolworths"
      className="h-14 object-contain opacity-80 hover:opacity-100 transition"
    />
  </div>
</div>
{/* Thank You Easter Egg */}
<div className="my-10 flex flex-col items-center">

  <div className="animate-kangaroo inline-block text-6xl">
    🦘
  </div>

  <div className="mt-2 bg-gold text-black font-bold text-sm px-6 py-2 rounded-lg -rotate-2 shadow-xl">
    THANKS MATE!
  </div>

  <p className="mt-5 font-cormorant italic text-gray-300 text-lg text-center max-w-xl">
    No kangaroos were inconvenienced during the making of this documentary.
  </p>

</div>

<div className="mt-6 flex justify-center">
  <div className="mt-16 flex flex-col items-center">

  <div className="w-24 h-px bg-gold/40 mb-8" />

  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="group inline-flex items-center gap-1 btn-gold px-10 py-4 rounded-lg overflow-hidden"
  >
    <Play
      className="w-5 h-5 group-hover:scale-110 transition-transform"
      fill="currentColor"
    />

    <span className="font-inter font-semibold tracking-wider">
      Watch Again
    </span>
  </button>

</div>
</div>
</div>
      </div> 
    </section>
  );
};

// Main App
function App() {
  const [started, setStarted] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const audioRef = useRef<HTMLAudioElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [started]);

  const handleStart = useCallback(() => {
    setStarted(true);
    setTimeout(() => {
      const timeline = document.getElementById('timeline');
      if (timeline) timeline.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  return (
    <div className="bg-black min-h-screen">

      <audio
        ref={audioRef}
        src="/assets/audio/background.mp3"
        loop
        preload="auto"
      />"

      <Navigation
  activeSection={activeSection}
  started={started}
  soundOn={soundOn}
  onToggleSound={() => {
    if (!audioRef.current) return;

   

const audio = audioRef.current;

if (!soundOn) {
  audio.volume = 0;
  audio.play();

  let volume = 0;

  const fadeIn = setInterval(() => {
    volume += 0.05;

    if (volume >= 1) {
      volume = 1;
      clearInterval(fadeIn);
    }

    audio.volume = volume;
  }, 100);
} else {
  let volume = audio.volume;

  const fadeOut = setInterval(() => {
    volume -= 0.05;

    if (volume <= 0) {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 1;
      clearInterval(fadeOut);
    } else {
      audio.volume = volume;
    }
  }, 100);
}

setSoundOn(!soundOn);
  }}
/>

      <HeroSection onStart={handleStart} />

      {started && (
        <>
          <TimelineSection />
          <BeardFilesSection />
          <GameNightSection />
          <PunjabiPlaylistSection />
          <LoveStorySection />
          <AnimalLoverSection />
          <BirthdayPoemSection />
          <HallOfFameSection />
          <MovieCreditsSection />
          <FinalRevealSection />
        </>
      )}
    </div>
  );
}

export default App;
