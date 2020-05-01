import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";

import { data } from "./data";

const Map = () => {
  return (
    <ResponsiveHeatMap
      data={data}
      keys={[
        "col1",
        "col2",
        "col3",
        "col4",
        "col5",
        "col6",
        "col7",
        "col8",
        "col9",
        "col10",
      ]}
      indexBy="row"
      margin={{ top: 5, right: 60, bottom: 10, left: 60 }}
      minValue={10}
      maxValue={10}
      forceSquare={true}
      // colors="reds"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      cellOpacity={200}
      cellBorderWidth={2}
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
          // lineWidth: 0,
          spacing: 7,
        },
      ]}
      fill={[{ id: "lines" }]}
      animate={false}
      motionStiffness={0}
      motionDamping={0}
      isInteractive={true}
      cellHoverOthersOpacity={0.1}
    />
  );
};

export default Map;
