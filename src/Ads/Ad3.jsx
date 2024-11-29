import React, { useEffect } from "react";

const Ad3 = () => {
  useEffect(() => {
    // Check if atAsyncOptions exists and initialize if not
    if (typeof window.atAsyncOptions !== "object") {
      window.atAsyncOptions = [];
    }

    // Push ad options to atAsyncOptions
    window.atAsyncOptions.push({
      key: "d133bb74300857cd99679135032291c7",
      format: "js",
      async: true,
      container: "atContainer-d133bb74300857cd99679135032291c7",
      params: {}
    });

    // Dynamically create and append the script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "http" +
      (location.protocol === "https:" ? "s" : "") +
      "://stoolsymphony.com/d133bb74300857cd99679135032291c7/invoke.js";
    document.head.appendChild(script);

    // Cleanup: Remove the script if the component unmounts
    return () => {
      const container = document.getElementById(
        "atContainer-d133bb74300857cd99679135032291c7"
      );
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="atContainer-d133bb74300857cd99679135032291c7"></div>;
};

export default Ad3;
