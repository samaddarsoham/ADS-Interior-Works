import { useEffect, useRef } from 'react';
// Temporarily disable GSAP imports
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CallToAction = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    // Temporarily disable GSAP animations
    // gsap.registerPlugin(ScrollTrigger);
    //
    // gsap.from(ctaRef.current, {
    //   scrollTrigger: {
    //     trigger: ctaRef.current,
    //     start: 'top 80%',
    //   },
    //   y: 50,
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: 'power3.out'
    // });
    //
    // // Button animations
    // gsap.from(ctaRef.current.querySelectorAll('.cta-btn'), {
    //   scrollTrigger: {
    //     trigger: ctaRef.current,
    //     start: 'top 80%',
    //   },
    //   scale: 0.9,
    //   opacity: 0,
    //   stagger: 0.2,
    //   duration: 0.5,
    //   delay: 0.3,
    //   ease: 'back.out(1.7)'
    // });
  }, []);

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: '#1a1a1a',
      backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1
      }}></div>

      <div style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div
          ref={ctaRef}
          style={{
            maxWidth: '56rem',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
            fontFamily: '"Playfair Display", serif',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            Let's design your dream space with <span style={{ color: 'var(--color-secondary)' }}>ADS Interior Works</span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#e5e7eb',
            marginBottom: '2.5rem'
          }}>
            Transform your space into something extraordinary. Contact us today for a free consultation.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
            '@media (min-width: 640px)': {
              flexDirection: 'row'
            }
          }} className="cta-buttons">
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
              className="cta-btn"
            >
              Get a Quote
            </a>
            <a
              href="tel:8777606198"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.25rem',
                fontWeight: '500',
                backgroundColor: 'white',
                color: 'var(--color-primary)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': {
                  backgroundColor: '#f3f4f6'
                }
              }}
              className="cta-btn"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
