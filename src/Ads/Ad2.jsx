import React, { useEffect } from "react";

const Ad2 = () => {
  useEffect(() => {
    // Ensure atAsyncOptions exists globally
    if (typeof window.atAsyncOptions !== "object") {
      window.atAsyncOptions = [];
    }

    // Add the new ad configuration
    window.atAsyncOptions.push({
      key: "b1ebdf03ddb022ff5785371e2f93fe1e",
      format: "js",
      async: true,
      container: "atContainer-b1ebdf03ddb022ff5785371e2f93fe1e",
      params: {}
    });

    // Dynamically load the script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "http" +
      (location.protocol === "https:" ? "s" : "") +
      "://stoolsymphony.com/b1ebdf03ddb022ff5785371e2f93fe1e/invoke.js";
    document.head.appendChild(script);

    // Cleanup on component unmount
    return () => {
      const container = document.getElementById(
        "atContainer-b1ebdf03ddb022ff5785371e2f93fe1e"
      );
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="atContainer-b1ebdf03ddb022ff5785371e2f93fe1e"></div>;
};

export default Ad2;
