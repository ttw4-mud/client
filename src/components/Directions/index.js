import React from "react";

//on keyboard press
const Movement = ({ moves }) => {
  return (
    <div>
      <div onClick={() => moves("n")} />
      <div onClick={() => moves("s")} />
      <div onClick={() => moves("e")} />
      <div onClick={() => moves("w")} />
    </div>
  );
};

export default Movement;

Movement.defaultProps = {
  moves: () => "moved",
};
