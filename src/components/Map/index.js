import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";

import { data } from "./data";

const Map = () => {
  return (
    <ResponsiveHeatMap
      data={data}
      keys={[
        "hot dog",
        "burger",
        "sandwich",
        "kebab",
        "fries",
        "donut",
        "junk",
        "sushi",
        "ramen",
        "curry",
        "udon",
      ]}
      indexBy="country"
      margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
      minValue={22}
      maxValue={63}
      forceSquare={true}
      colors="greys"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      cellOpacity={1}
      cellBorderWidth={4}
      cellBorderColor="#565d56"
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
      fill={[{ id: "lines" }]}
      animate={true}
      motionStiffness={80}
      motionDamping={9}
      isInteractive={false}
      cellHoverOthersOpacity={0.1}
    />
  );
};

export default Map;
