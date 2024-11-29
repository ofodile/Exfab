import React, { useEffect } from "react";

const NativeAd = () => {
  useEffect(() => {
    // Dynamically create and append the script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "//stoolsymphony.com/8906a509b1e7d2515acdabf67b675cf3/invoke.js";

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup: Remove the script and clear the container on unmount
    return () => {
      const container = document.getElementById(
        "container-8906a509b1e7d2515acdabf67b675cf3"
      );
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="container-8906a509b1e7d2515acdabf67b675cf3"></div>;
};

export default NativeAd;
