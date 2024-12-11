import React, { useEffect } from 'react';

const EvadavAds = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src =
      'https://curoax.com/na/waWQiOjEwNTM2NTMsInNpZCI6MTM5OTY3Miwid2lkIjo2NzAxNjQsInNyYyI6Mn0=eyJ.js';
    script.async = true;

    // Append it to the document head or body
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // This component doesn't render anything
};

export default EvadavAds;
