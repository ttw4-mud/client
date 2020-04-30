import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";

import { data } from "./data";

const Map = () => {
  return (
    <ResponsiveHeatMap
      data={data}
      keys={["col1", "col2", "col3"]}
      indexBy="row"
      margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
      minValue={10}
      maxValue={10}
      forceSquare={true}
      // colors="reds"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      // cellOpacity={200}
      cellBorderWidth={4}
      cellBorderColor="#AA2A0D"
      enableLabels={false}
      labelTextColor="#494949"
      defs={[
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(0, 0, 0, 0.1)",
          rotation: -45,
          lineWidth: 4,
          spacing: 7,
        },
      ]}
      // fill={[{ id: "lines" }]}
      // animate={false}
      // motionStiffness={0}
      // motionDamping={0}
      isInteractive={false}
      // cellHoverOthersOpacity={0.1}
    />
  );
};

export default Map;
