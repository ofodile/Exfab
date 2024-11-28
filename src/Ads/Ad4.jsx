import React, { useEffect } from 'react';

const Ad4 = () => {
  useEffect(() => {
    if (typeof window.atAsyncOptions !== 'object') {
      window.atAsyncOptions = [];
    }
    window.atAsyncOptions.push({
      'key': '12569846fdf8319b5e5109150bc65306',
      'format': 'js',
      'async': true,
      'container': 'atContainer-12569846fdf8319b5e5109150bc65306',
      'params': {}
    });

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'http' + (location.protocol === 'https:' ? 's' : '') + '://stoolsymphony.com/12569846fdf8319b5e5109150bc65306/invoke.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script from the document head
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="atContainer-12569846fdf8319b5e5109150bc65306">
      {/* The ad will be displayed inside this div */}
    </div>
  );
};

export default Ad4;