import { useEffect, useRef } from 'react';
// Temporarily disable GSAP imports
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Service Category Component
const ServiceCategory = ({ id, title, items, image, index }) => {
  const categoryRef = useRef(null);

  useEffect(() => {
    // Temporarily disable GSAP animations
    // gsap.registerPlugin(ScrollTrigger);
    //
    // gsap.from(categoryRef.current, {
    //   scrollTrigger: {
    //     trigger: categoryRef.current,
    //     start: 'top 80%',
    //   },
    //   y: 50,
    //   opacity: 0,
    //   duration: 0.8,
    //   delay: index * 0.1,
    //   ease: 'power3.out'
    // });
  }, [index]);

  return (
    <div id={id} ref={categoryRef} className="hover-scale" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '0.5rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      overflow: 'hidden',
      marginBottom: '3rem',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1.5rem'
      }} className="service-grid">
        {/* Image Section */}
        <div style={{
          height: '20rem',
          position: 'relative',
          overflow: 'hidden'
        }} className="service-image">
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1.5rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: 'white'
            }}>{title}</h3>
          </div>
        </div>

        {/* Content Section */}
        <div style={{ padding: '1.5rem 2rem 2rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {items.map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.875rem',
                fontWeight: '500',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <svg style={{
                  width: '1rem',
                  height: '1rem',
                  marginRight: '0.5rem'
                }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
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

  const serviceCategories = [
    {
      id: 'kitchen',
      title: 'Kitchen Interiors',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      items: [
        'Semi-Modular',
        'Modular',
        'Fully Automatic',
        'Fall Ceiling options',
        'With or Without Hydraulic Setup'
      ]
    },
    {
      id: 'bathroom',
      title: 'Bathroom Interiors',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      items: [
        'Premium Fittings',
        'Luxury Bathrooms',
        'Modern Tiles',
        'Shower Enclosures',
        'Vanity Units'
      ]
    },
    {
      id: 'residential',
      title: 'Residential Spaces',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      items: [
        'Bedroom',
        'Living Room',
        'Dining Room',
        'Wardrobe',
        'TV Cabinet',
        'Shoe Cabinet',
        'Balcony',
        'False Ceiling',
        'Flooring',
        'Wall Design',
        'Phywork',
        'Marble Work',
        'Tiles Work'
      ]
    },
    {
      id: 'office',
      title: 'Office Interiors',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      items: [
        'Workstations',
        'Reception',
        'Lounge',
        'Boardroom',
        'Executive Cabins',
        'Conference Rooms',
        'Cafeteria'
      ]
    }
  ];

  return (
    <section id="services" className="section-blur-top section-blur-bottom" style={{
      padding: '4rem 0',
      backgroundColor: '#1a1a1a',
      backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")',
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
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
            fontFamily: '"Playfair Display", serif',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'white'
          }}>Our Services</h2>
          <p style={{
            color: '#e5e7eb',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            We offer a comprehensive range of interior design and renovation services for both residential and commercial spaces.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {serviceCategories.map((category, index) => (
            <ServiceCategory
              key={category.id}
              id={category.id}
              title={category.title}
              items={category.items}
              image={category.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
