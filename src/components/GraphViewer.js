import React, { useEffect, useState } from "react";
import apiUrl from "../config";

const GraphViewer = ({ filename }) => {
  const [graphSrc, setGraphSrc] = useState("");

  useEffect(() => {
    const graphUrl = `${apiUrl}/get-graph/${filename}`;
    setGraphSrc(graphUrl);
  }, [filename]);

  return (
    <div>
      <h2>Graph for {filename}</h2>
      {graphSrc && <img src={graphSrc} alt={`Graph for ${filename}`} />}
    </div>
  );
};

export default GraphViewer;
