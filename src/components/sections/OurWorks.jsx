import { useState, useRef } from 'react';

const OurWorks = () => {
  const [activeTab, setActiveTab] = useState('all');
  const titleRef = useRef(null);

  // Array of projects with copyright-free images and videos
  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Renovation',
      category: 'kitchen',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete kitchen renovation with modern appliances and custom cabinetry.'
    },
    {
      id: 2,
      title: 'Luxury Bathroom Design',
      category: 'bathroom',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Elegant bathroom with marble finishes and premium fixtures.'
    },
    {
      id: 3,
      title: 'Contemporary Living Room',
      category: 'residential',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Modern living room with custom furniture and ambient lighting.'
    },
    {
      id: 4,
      title: 'Executive Office Space',
      category: 'office',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Corporate office design with ergonomic workstations and meeting areas.'
    },
    {
      id: 5,
      title: 'Kitchen Remodeling Process',
      category: 'kitchen',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Time-lapse of a complete kitchen renovation project.'
    },
    {
      id: 6,
      title: 'Minimalist Apartment Design',
      category: 'residential',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Clean, minimalist design for a modern urban apartment.'
    },
    {
      id: 7,
      title: 'Luxury Bathroom Renovation',
      category: 'bathroom',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete transformation of an outdated bathroom into a spa-like retreat.'
    },
    {
      id: 8,
      title: 'Modern Conference Room',
      category: 'office',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'State-of-the-art conference room with integrated technology.'
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  // Categories for filter tabs
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'residential', label: 'Residential' },
    { id: 'office', label: 'Office' }
  ];

  return (
    <section id="our-works" className="section-blur-top section-blur-bottom" style={{
      padding: '4rem 0',
      backgroundColor: '#1a1a1a',
      backgroundImage: 'url("https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80")',
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
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
            fontFamily: '"Playfair Display", serif',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'white'
          }}>Our Works</h2>
          <p style={{
            color: '#e5e7eb',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            Explore our portfolio of completed interior design projects across various spaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2rem'
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: activeTab === category.id ? 'var(--color-secondary)' : 'rgba(255, 255, 255, 0.1)',
                color: activeTab === category.id ? 'white' : '#e5e7eb',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                fontWeight: activeTab === category.id ? '600' : '400',
                transition: 'all 0.3s ease'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 1rem',
          '@media (min-width: 640px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem'
          },
          '@media (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }
        }} className="projects-grid">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="hover-lift"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.3)',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                aspectRatio: '1/1',
                display: 'flex',
                flexDirection: 'column',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(212, 175, 55, 0.3)'
                }
              }}
            >
              <img
                src={project.url}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '65%',
                  objectFit: 'cover',
                  flex: '0 0 auto',
                  '@media (max-width: 640px)': {
                    height: '50%'
                  },
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
              <div style={{
                padding: '1rem',
                flex: '1 0 auto',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '@media (max-width: 640px)': {
                  padding: '0.75rem',
                  flex: '1 0 50%'
                }
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: 'white',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                    '@media (max-width: 640px)': {
                      fontSize: '0.9rem',
                      marginBottom: '0.25rem'
                    }
                  }}>{project.title}</h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#e5e7eb',
                    marginBottom: '0.75rem',
                    lineHeight: '1.4',
                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
                    '@media (max-width: 640px)': {
                      fontSize: '0.8rem',
                      marginBottom: '0.5rem',
                      lineHeight: '1.3'
                    }
                  }}>{project.description}</p>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.3rem 0.7rem',
                    backgroundColor: 'rgba(212, 175, 55, 0.4)',
                    color: 'var(--color-secondary)',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    '@media (max-width: 640px)': {
                      padding: '0.2rem 0.5rem',
                      fontSize: '0.75rem'
                    }
                  }}>
                    {project.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
