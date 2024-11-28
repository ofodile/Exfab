import React, { useEffect, useRef } from 'react';

const Ad2 = () => {
  const adContainerRef = useRef(null);

  useEffect(() => {
    // Ensure atAsyncOptions is set up correctly
    if (typeof window.atAsyncOptions !== 'object') {
      window.atAsyncOptions = [];
    }
    window.atAsyncOptions.push({
      'key': '0499034a97b1818c7f41f1a43916fa8a',
      'format': 'js',
      'async': true,
      'container': 'atContainer-0499034a97b1818c7f41f1a43916fa8a',
      'params': {}
    });

    // Create and insert the script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'http' + (location.protocol === 'https:' ? 's' : '') + '://stoolsymphony.com/0499034a97b1818c7f41f1a43916fa8a/invoke.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script from the document head
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="atContainer-0499034a97b1818c7f41f1a43916fa8a" ref={adContainerRef}>
      {/* The ad will be displayed inside this div */}
    </div>
  );
};

export default Ad2;