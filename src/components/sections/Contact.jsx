import { useState, useEffect, useRef } from 'react';
// Temporarily disable GSAP imports
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Temporarily disable GSAP animations
    // gsap.registerPlugin(ScrollTrigger);
    //
    // // Title animation
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
    //
    // // Form animation
    // gsap.from(formRef.current, {
    //   scrollTrigger: {
    //     trigger: formRef.current,
    //     start: 'top 80%',
    //   },
    //   x: -50,
    //   opacity: 0,
    //   duration: 0.8,
    //   delay: 0.2,
    //   ease: 'power3.out'
    // });
    //
    // // Info animation
    // gsap.from(infoRef.current, {
    //   scrollTrigger: {
    //     trigger: infoRef.current,
    //     start: 'top 80%',
    //   },
    //   x: 50,
    //   opacity: 0,
    //   duration: 0.8,
    //   delay: 0.4,
    //   ease: 'power3.out'
    // });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" style={{
      padding: '4rem 0',
      backgroundColor: '#1a1a1a',
      backgroundImage: 'url("https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")',
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
          }}>Contact Us</h2>
          <p style={{
            color: '#e5e7eb',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            Get in touch with us for a free consultation and quote for your interior design project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="flex flex-col">
            <div className="bg-primary text-white rounded-lg shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Address</h4>
                    <p className="text-gray-300">Kolkata, West Bengal, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Phone</h4>
                    <p><a href="tel:8777606198" className="text-gray-300 hover:text-white">+91 8777606198</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Email</h4>
                    <p><a href="mailto:samaddarsoham@gmail.com" className="text-gray-300 hover:text-white">samaddarsoham@gmail.com</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Working Hours</h4>
                    <p className="text-gray-300">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462422487!3d22.67575658863465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1649935788160!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
