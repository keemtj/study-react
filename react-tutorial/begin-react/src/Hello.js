import React from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <div style={{ color }}>
      {/* {isSpecial ? <b>스페셜하다</b> : <b>스페셜하지 않다</b>} */}
      {isSpecial && <b>*</b>}
      안녕하십니까 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "",
  color: "blue",
  // isSpecial: false,
};

export default Hello;
