import React, { useEffect, useRef } from 'react';

const Ad3 = () => {
  const adContainerRef = useRef(null);

  useEffect(() => {
    // Set up the atAsyncOptions
    if (typeof window.atAsyncOptions !== 'object') window.atAsyncOptions = [];
    window.atAsyncOptions.push({
      'key': 'a88fae2002dfff7e2ea23a92a9b65b2f',
      'format': 'js',
      'async': true,
      'container': 'atContainer-a88fae2002dfff7e2ea23a92a9b65b2f',
      'params': {}
    });

    // Create the script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'http' + (location.protocol === 'https:' ? 's' : '') + '://stoolsymphony.com/a88fae2002dfff7e2ea23a92a9b65b2f/invoke.js';

    // Append the script to the head
    document.head.appendChild(script);

    return () => {
      // Cleanup script
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="atContainer-a88fae2002dfff7e2ea23a92a9b65b2f" ref={adContainerRef}>
      {/* The ad will be displayed inside this div */}
    </div>
  );
};

export default Ad3;