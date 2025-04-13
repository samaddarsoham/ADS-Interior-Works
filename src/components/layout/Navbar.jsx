import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed GSAP animation for navbar to fix disappearing issue

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled ? 'white' : 'transparent',
      boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      padding: isScrolled ? '0.5rem 0' : '1rem 0'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontFamily: '"Playfair Display", serif',
            fontWeight: 'bold',
            color: isScrolled ? 'var(--color-primary)' : 'white'
          }}>
            ADS <span style={{ color: 'var(--color-secondary)' }}>Interior Works</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <div style={{
          display: 'none',
          '@media (min-width: 768px)': {
            display: 'flex'
          },
          gap: '2rem'
        }} className="desktop-menu">
          {['Home', 'Services', 'Materials', 'Our Works', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontWeight: '500',
                transition: 'color 0.3s ease',
                color: isScrolled ? 'var(--color-primary)' : 'white',
                ':hover': {
                  color: 'var(--color-secondary)'
                }
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              backgroundColor: 'var(--color-secondary)',
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Get Free Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          style={{
            display: 'block',
            fontSize: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            '@media (min-width: 768px)': {
              display: 'none'
            }
          }}
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span style={{ color: isScrolled ? 'var(--color-primary)' : 'white' }}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          display: 'block',
          backgroundColor: 'white',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          padding: '1rem 0',
          zIndex: 9998,
          '@media (min-width: 768px)': {
            display: 'none'
          }
        }} className="mobile-menu">
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {['Home', 'Services', 'Materials', 'Our Works', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: 'var(--color-primary)',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: 'var(--color-secondary)'
                  }
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                margin: '0 1rem',
                borderRadius: '0.25rem',
                fontWeight: '500',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
