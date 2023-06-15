import React, { createElement } from "react";

/**
 * With JSX
 */
// const Hello = () => {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Hello World</h1>
//     </div>
//   );
// };

/**
 * Without JSX
 */
const Hello = () => {
  return React.createElement(
    "div",
    null,
    createElement("h1", { style: { color: "red" } }, "Hello Vishwas")
  );
};
export default Hello;
