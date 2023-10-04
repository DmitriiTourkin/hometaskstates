import React from "react";

function IconSwitch(props) {
  return (
    <div className="icon-switch" onClick={props.onSwitch}>
      <i className="material-icons">{props.icon}</i>
    </div>
  );
}

export default IconSwitch;