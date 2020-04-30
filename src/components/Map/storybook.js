import React from "react";
// import { storiesOf } from "@storybook/react";
// import { generateCountriesData } from "@nivo/generators";
// import Map from "./index";

// const CustomCell = ({
//   x,
//   y,
//   width,
//   height,
//   color,
//   opacity,
//   borderWidth,
//   borderColor,
//   textColor,
// }) => (
//   <g transform={`translate(${x}, ${y})`}>
//     <path
//       fill={color}
//       fillOpacity={opacity}
//       strokeWidth={borderWidth}
//       stroke={borderColor}
//       d={`
//                 M0 -${Math.round(height / 2)}
//                 L${Math.round(width / 2)} ${Math.round(height / 2)}
//                 L-${Math.round(width / 2)} ${Math.round(height / 2)}
//                 L0 -${Math.round(height / 2)}
//             `}
//     />
//     <text
//       dominantBaseline="central"
//       textAnchor="middle"
//       style={{ fill: textColor }}

//     >

//     </text>
//   </g>
// );

// const keys = ["SQ1", "SQ2", "SQ3", "SQ4", "SQ5", "SQ6", "SQ7", "SQ8", "SQ9"];
// const commonProperties = {
//   width: 900,
//   height: 500,
//   margin: { top: 60, right: 80, bottom: 60, left: 80 },
//   data: generateCountriesData(keys, { size: 9, min: 0, max: 100 }),
//   indexBy: "row",
//   keys,
// };

// const stories = storiesOf("Map", module);

// stories.add("default", () => <Map {...commonProperties} />);

// stories.add("square cells", () => (
//   <Map
//     {...commonProperties}
//     forceSquare={true}
//     axisTop={{
//       orient: "top",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: -55,
//       legend: "",
//       legendOffset: 36,
//     }}
//   />
// ));

// stories.add("circle cells", () => (
//   <Map
//     {...commonProperties}
//     cellShape="circle"
//     padding={2}
//     enableGridY={true}
//   />
// ));

// // stories.add("alternative colors", () => (
//   <Map {...commonProperties} colors="BrBG" />
// ));

// stories.add("variable cell size", () => (
//   <Map
//     {...commonProperties}
//     colors="BuPu"
//     cellShape="circle"
//     padding={2}
//     sizeVariation={0.6}
//     enableGridX={true}
//     enableGridY={true}
//   />
// ));

// stories.add("Custom cell component", () => (
//   <Map
//     {...commonProperties}
//     cellShape={CustomCell}
//     padding={4}
//     colors="GnBu"
//     labelTextColor="inherit:darker(1.6)"
//   />
// ));
