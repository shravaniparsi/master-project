import React, { useRef, useEffect } from "react";

const { tableau } = window;

function Location() {
  const ref = useRef(null);
  const url =
    "https://public.tableau.com/views/EvSalesDemand/Dashboard3?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link";
  const options = {
    device: "desktop",
  };

  function initViz() {
    new tableau.Viz(ref.current, url, options);
  }

  useEffect(() => {
    initViz();
  }, []);

  return (
    <div ref={ref} className="dashboard" style={{ padding: "75px" }}></div>
  );
}

export default Location;

