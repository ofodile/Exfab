import React, { useEffect, useRef } from 'react';

const Ad1 = () => {
  const adContainerRef = useRef(null);

  useEffect(() => {
    // Ensure atAsyncOptions is set up correctly
    if (typeof window.atAsyncOptions !== 'object') {
      window.atAsyncOptions = [];
    }
    window.atAsyncOptions.push({
      'key': '6a8c606394d4c4b6441b1d0a1de193e8',
      'format': 'js',
      'async': true,
      'container': 'atContainer-6a8c606394d4c4b6441b1d0a1de193e8',
      'params': {}
    });

    // Create and insert the script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'http' + (location.protocol === 'https:' ? 's' : '') + '://stoolsymphony.com/6a8c606394d4c4b6441b1d0a1de193e8/invoke.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script from the document head
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="atContainer-6a8c606394d4c4b6441b1d0a1de193e8" ref={adContainerRef}>
      {/* The ad will be displayed inside this div */}
    </div>
  );
};

export default Ad1;