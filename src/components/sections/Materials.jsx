import { useEffect, useRef } from 'react';
// Temporarily disable GSAP imports
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Function to get logo URL for a brand
const getBrandLogoUrl = (brand) => {
  // Using more reliable public logo URLs from brand clearbit.com which provides company logos
  const logoMap = {
    // Ply
    'Greenply': 'https://logo.clearbit.com/greenply.com',
    'Century Ply': 'https://logo.clearbit.com/centuryply.com',
    'Austin': 'https://logo.clearbit.com/austinplywood.com',
    'Saburi': 'https://ui-avatars.com/api/?name=Saburi&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',

    // Laminates
    'Century': 'https://logo.clearbit.com/centuryply.com',
    'Marino': 'https://ui-avatars.com/api/?name=Marino&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',
    'Greenlam': 'https://logo.clearbit.com/greenlam.com',
    'RoyalTouch': 'https://logo.clearbit.com/royaltouche.com',
    'RoyalCrown': 'https://ui-avatars.com/api/?name=Royal+Crown&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',
    'Advance': 'https://ui-avatars.com/api/?name=Advance&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',
    'Skydecor': 'https://ui-avatars.com/api/?name=Sky+Decor&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',
    'Kridha': 'https://ui-avatars.com/api/?name=Kridha&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',

    // Marbles/Tiles
    'Johnson': 'https://logo.clearbit.com/hrjohnsonindia.com',
    'Rak': 'https://logo.clearbit.com/rakceramics.com',
    'OrientBell': 'https://logo.clearbit.com/orientbell.com',
    'Somany': 'https://logo.clearbit.com/somanyceramics.com',

    // Hardware
    'Godrej': 'https://logo.clearbit.com/godrej.com',
    'Hettich': 'https://logo.clearbit.com/hettich.com',
    'Hafele': 'https://logo.clearbit.com/hafele.com',
    'Avco': 'https://ui-avatars.com/api/?name=Avco&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',

    // Bathroom Fittings
    'Jaquar': 'https://logo.clearbit.com/jaquar.com',
    'Parryware': 'https://ui-avatars.com/api/?name=Parryware&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',
    'Essco': 'https://ui-avatars.com/api/?name=Essco&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',

    // Paints
    'Asian Paints': 'https://logo.clearbit.com/asianpaints.com',
    'Birla Ofas': 'https://ui-avatars.com/api/?name=Birla+Ofas&background=d4af37&color=fff&size=150&font-size=0.33&bold=true',
    'Indigo': 'https://logo.clearbit.com/indigopaints.com',
    'Berger Paints': 'https://logo.clearbit.com/bergerpaints.com'
  };

  return logoMap[brand] || '';
};

// Brand Category Component
const BrandCategory = ({ title, brands, index }) => {
  const categoryRef = useRef(null);

  // All categories will be displayed at 100% width
  const getWidthStyle = () => {
    return {
      width: '100%',
      marginBottom: '2rem'
    };
  };

  useEffect(() => {
    // Temporarily disable GSAP animations
    // gsap.registerPlugin(ScrollTrigger);
    //
    // gsap.from(categoryRef.current, {
    //   scrollTrigger: {
    //     trigger: categoryRef.current,
    //     start: 'top 80%',
    //   },
    //   y: 30,
    //   opacity: 0,
    //   duration: 0.8,
    //   delay: index * 0.1,
    //   ease: 'power3.out'
    // });
    //
    // // Animate brand logos
    // gsap.from(categoryRef.current.querySelectorAll('.brand-logo'), {
    //   scrollTrigger: {
    //     trigger: categoryRef.current,
    //     start: 'top 80%',
    //   },
    //   scale: 0.8,
    //   opacity: 0,
    //   stagger: 0.1,
    //   duration: 0.5,
    //   delay: 0.3 + (index * 0.1),
    //   ease: 'back.out(1.7)'
    // });
  }, [index]);

  return (
    <div ref={categoryRef} style={{
      marginBottom: '1rem',
      ...getWidthStyle(),
      '@media (max-width: 640px)': {
        marginBottom: '0.5rem'
      }
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontFamily: '"Playfair Display", serif',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: 'white',
        '@media (max-width: 640px)': {
          fontSize: '1.1rem',
          marginBottom: '0.75rem'
        }
      }}>{title}</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        '@media (max-width: 1024px)': {
          gridTemplateColumns: 'repeat(3, 1fr)'
        },
        '@media (max-width: 640px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem'
        }
      }} className="brand-grid">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="hover-glow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '6rem',
              '@media (max-width: 640px)': {
                height: '5rem',
                padding: '0.75rem'
              },
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              ':hover': {
                transform: 'scale(1.05)',
              }
            }}
            className="brand-logo"
          >
            <div style={{ textAlign: 'center' }}>
              {getBrandLogoUrl(brand) ? (
                <>
                  <div style={{
                    width: '100%',
                    height: '3rem',
                    margin: '0 auto 0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: '0.25rem',
                    padding: '0.25rem'
                  }}>
                    <img
                      src={getBrandLogoUrl(brand)}
                      alt={`${brand} logo`}
                      style={{
                        maxWidth: '80%',
                        maxHeight: '2.5rem',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        // If image fails to load, replace with initial
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div style="width: 2.5rem; height: 2.5rem; background-color: var(--color-secondary); border-radius: 9999px; display: flex; align-items: center; justify-content: center;"><span style="font-size: 1.1rem; font-weight: bold; color: white;">${brand.charAt(0)}</span></div>`;
                      }}
                    />
                  </div>
                  <p style={{
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>{brand}</p>
                </>
              ) : (
                <>
                  <div style={{
                    width: '100%',
                    height: '3rem',
                    margin: '0 auto 0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: 'var(--color-secondary)',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: 'white'
                      }}>{brand.charAt(0)}</span>
                    </div>
                  </div>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'white'
                  }}>{brand}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Materials = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Temporarily disable GSAP animations
    // gsap.registerPlugin(ScrollTrigger);
    //
    // gsap.from(titleRef.current, {
    //   scrollTrigger: {
    //     trigger: titleRef.current,
    //     start: 'top 80%',
    //   },
    //   y: 30,
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: 'power3.out'
    // });
  }, []);

  const brandCategories = [
    {
      title: '🪵 Ply',
      brands: ['Greenply', 'Century Ply', 'Austin', 'Saburi']
    },
    {
      title: '🎨 Laminates',
      brands: ['Century', 'Marino', 'Greenlam', 'RoyalTouch', 'RoyalCrown', 'Advance', 'Skydecor', 'Kridha']
    },
    {
      title: '🧱 Marbles/Tiles',
      brands: ['Johnson', 'Rak', 'OrientBell', 'Somany']
    },
    {
      title: '⚙️ Hardware',
      brands: ['Godrej', 'Hettich', 'Hafele', 'Avco']
    },
    {
      title: '🚿 Bathroom Fittings',
      brands: ['Jaquar', 'Parryware', 'Essco']
    },
    {
      title: '🖌️ Paints',
      brands: ['Asian Paints', 'Birla Ofas', 'Indigo', 'Berger Paints']
    }
  ];

  return (
    <section id="materials" className="section-blur-top section-blur-bottom" style={{
      padding: '4rem 0',
      backgroundColor: '#1a1a1a',
      backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80")',
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
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div ref={titleRef} style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 2.5vw, 2rem)',
            fontFamily: '"Playfair Display", serif',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: 'white'
          }}>Materials & Brands We Use</h2>
          <p style={{
            color: '#e5e7eb',
            maxWidth: '48rem',
            margin: '0 auto',
            fontSize: '0.95rem'
          }}>
            We partner with the best brands in the industry to ensure quality and durability in all our projects.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          '@media (max-width: 640px)': {
            gap: '0.5rem'
          }
        }} className="materials-grid">
          {brandCategories.map((category, index) => (
            <BrandCategory
              key={index}
              title={category.title}
              brands={category.brands}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
