import React, { useEffect } from "react";

const Ad1 = () => {
  useEffect(() => {
    // Ensure atAsyncOptions is defined
    if (typeof window.atAsyncOptions !== "object") {
      window.atAsyncOptions = [];
    }

    // Add the new ad configuration
    window.atAsyncOptions.push({
      key: "6475b18b41d754a9490657a09837505a",
      format: "js",
      async: true,
      container: "atContainer-6475b18b41d754a9490657a09837505a",
      params: {}
    });

    // Dynamically create and append the script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "http" +
      (location.protocol === "https:" ? "s" : "") +
      "://stoolsymphony.com/6475b18b41d754a9490657a09837505a/invoke.js";
    document.head.appendChild(script);

    // Cleanup to remove the script and ad content on unmount
    return () => {
      const container = document.getElementById(
        "atContainer-6475b18b41d754a9490657a09837505a"
      );
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="atContainer-6475b18b41d754a9490657a09837505a"></div>;
};

export default Ad1;
