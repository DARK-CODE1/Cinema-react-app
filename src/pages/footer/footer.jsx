import React from 'react';
import FooterNavItem from '../../components/footerNavItem';
import './footer.css';
const Footer = () => {
  const usefulLinks = [
    'Home',
    'Movie',
    'My List',
    'Term Of Service',
    'Privacy Policy',
  ];
  const locations = [
    'ipsum',
    'adipisicing',
    'dolor',
    'consectetur',
    'elit',
  ]
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>CINEMA</span>
              </a>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo enim adipisci possimus nemo id fuga, molestiae
                quasi voluptatum accusantium.
              </p>
              <div className="social-media mt-3">
                <a href="/" className='twitter'>
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="/" className='facebook'>
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="/" className='instagram'>
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="/" className='youtube'>
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Link</h4>
              <ul>
                {
                  usefulLinks.map(link => (
                    <FooterNavItem key={link} name={link} />
                  ))
                }
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Cinemas</h4>
              <ul>
                {
                  locations.map(location => (
                    <FooterNavItem key={location} name={location} />
                  ))
                }
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                street name <br />
                city name, state 123456
                <br />
                australia <br />
                <br />
                <strong>phone:</strong>098 123 45678
                <br />
                <strong>email:</strong> info@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer