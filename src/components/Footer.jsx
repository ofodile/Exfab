import React from 'react';
import { Link } from 'react-router-dom'
// import { useScrollRestoration } from 'use-scroll-restoration';
import '../css/Footer.css';
 
const Footer = () => {
  
  // const { ref,setScroll } = useScrollRestoration('exampleKey', {
//     debounceTime: 100,
//     persist: 'sessionStorage',  
//   });
//   
  const setReset = () => {
    setScroll({ y: 0 });
  }  
  
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li onClick={setReset}><Link to="/">Home</Link></li>
          <li onClick={setReset}><Link to="/about">About</Link></li>
          <li onClick={setReset}><Link to="/contact">Contact</Link></li>
        </ul>
        <p className="credit">&copy; 2024 Naijaleakhub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;