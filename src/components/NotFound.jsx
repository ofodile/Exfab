import React from 'react';
import '../css/NotFound.css';

const NotFound = () => {
  return(
    <div className="NotFound">
       <h1 className="NotFound-heading">404 - Page Not Found</h1>
       <p className="NotFound-text">Sorry, the page you are looking for does not exist.</p>
       <a className="NotFound-btn" href="/">Go to Home</a>
    </div>
  
  )
}

export default NotFound;