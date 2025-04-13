import React from 'react';

// Import logos
import godrejLogo from '../assets/logos/godrej.png';
import greenplyLogo from '../assets/logos/greenply.png';
import centuryLogo from '../assets/logos/century.png';
import marineLogo from '../assets/logos/marine.png';
import greenlam from '../assets/logos/greenlam.png';
import royaltouch from '../assets/logos/royaltouch.png';
import royalcrown from '../assets/logos/royalcrown.png';
import advance from '../assets/logos/advance.png';
import skydecor from '../assets/logos/skydecor.png';
import kridha from '../assets/logos/kridha.png';
import johnson from '../assets/logos/johnson.png';
import rak from '../assets/logos/rak.png';
import orientbell from '../assets/logos/orientbell.png';
import somany from '../assets/logos/somany.png';
import hettich from '../assets/logos/hettich.png';
import hafele from '../assets/logos/hafele.png';
import avco from '../assets/logos/avco.png';
import jaquar from '../assets/logos/jaquar.png';
import parryware from '../assets/logos/parryware.png';
import essco from '../assets/logos/essco.png';
import asianpaints from '../assets/logos/asianpaints.png';
import birla from '../assets/logos/birla.png';
import indigo from '../assets/logos/indigo.png';
import berger from '../assets/logos/berger.png';
import austin from '../assets/logos/austin.png';
import saburi from '../assets/logos/saburi.png';

// Logo mapping
const logoMap = {
  // Ply
  'Greenply': greenplyLogo,
  'Century Ply': centuryLogo,
  'Austin': austin,
  'Saburi': saburi,
  
  // Laminates
  'Century': centuryLogo,
  'Marino': marineLogo,
  'Greenlam': greenlam,
  'RoyalTouch': royaltouch,
  'RoyalCrown': royalcrown,
  'Advance': advance,
  'Skydecor': skydecor,
  'Kridha': kridha,
  
  // Marbles/Tiles
  'Johnson': johnson,
  'Rak': rak,
  'OrientBell': orientbell,
  'Somany': somany,
  
  // Hardware
  'Godrej': godrejLogo,
  'Hettich': hettich,
  'Hafele': hafele,
  'Avco': avco,
  
  // Bathroom Fittings
  'Jaquar': jaquar,
  'Parryware': parryware,
  'Essco': essco,
  
  // Paints
  'Asian Paints': asianpaints,
  'Birla Ofas': birla,
  'Indigo': indigo,
  'Berger Paints': berger,
};

const BrandLogo = ({ brand }) => {
  // If we have a logo for this brand, use it
  if (logoMap[brand]) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
        <img 
          src={logoMap[brand]} 
          alt={`${brand} logo`} 
          style={{
            maxWidth: '80%',
            maxHeight: '60px',
            objectFit: 'contain',
            marginBottom: '0.5rem'
          }}
        />
        <p style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#1a1a1a'
        }}>{brand}</p>
      </div>
    );
  }
  
  // Fallback to initial-based logo
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '3rem',
        height: '3rem',
        margin: '0 auto 0.5rem',
        backgroundColor: 'var(--color-secondary)',
        borderRadius: '9999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: 'white'
        }}>{brand.charAt(0)}</span>
      </div>
      <p style={{
        fontSize: '0.875rem',
        fontWeight: '500'
      }}>{brand}</p>
    </div>
  );
};

export default BrandLogo;
