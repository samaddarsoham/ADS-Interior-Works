import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Counter from '../ui/Counter';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Disable all GSAP animations for now to fix the disappearing content issue
    // We'll re-enable them once we've fixed the core issues
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent'
      }}
    >
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        backgroundColor: 'transparent'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div ref={textRef} style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            fontFamily: '"Playfair Display", serif'
          }}>
            Transforming Spaces, <span style={{ color: 'var(--color-secondary)' }}>Elevating Lifestyles</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#e5e7eb',
            marginBottom: '1.5rem'
          }}>
            Complete interior solutions for residential and commercial spaces.
            We bring your vision to life with exceptional craftsmanship and attention to detail.
          </p>

          <div style={{
            padding: '1rem',
            display: 'inline-block',
            marginBottom: '1.5rem'
          }}>
            <p style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.25rem'
            }}>
              Trusted by <span style={{ color: 'var(--color-secondary)' }}><Counter start={1000} end={1500} duration={3000} suffix="+" /></span> Customers
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#e5e7eb'
            }}>
              Delivering excellence in interior design since 2022
            </p>
          </div>
        </div>

        <div ref={ctaRef} className="hero-cta-buttons" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <a href="#services" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.25rem',
            fontWeight: '500',
            backgroundColor: 'var(--color-secondary)',
            color: 'white',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Explore Services
          </a>
          <a href="#contact" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.25rem',
            fontWeight: '500',
            border: '1px solid white',
            color: 'white',
            backgroundColor: 'transparent',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Get Free Consultation
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        animation: 'bounce 1s infinite',
        zIndex: 10
      }}>
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
