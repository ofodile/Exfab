import React, { useEffect } from "react";

const Ad4 = () => {
  useEffect(() => {
    // Ensure atAsyncOptions is globally defined
    if (typeof window.atAsyncOptions !== "object") {
      window.atAsyncOptions = [];
    }

    // Add the ad configuration
    window.atAsyncOptions.push({
      key: "44631af3ec891a5641d8edf6bb43e855",
      format: "js",
      async: true,
      container: "atContainer-44631af3ec891a5641d8edf6bb43e855",
      params: {}
    });

    // Dynamically create and append the script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "http" +
      (location.protocol === "https:" ? "s" : "") +
      "://stoolsymphony.com/44631af3ec891a5641d8edf6bb43e855/invoke.js";
    document.head.appendChild(script);

    // Cleanup on component unmount
    return () => {
      const container = document.getElementById(
        "atContainer-44631af3ec891a5641d8edf6bb43e855"
      );
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="atContainer-44631af3ec891a5641d8edf6bb43e855"></div>;
};

export default Ad4;
