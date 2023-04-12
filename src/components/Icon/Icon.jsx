import React from "react";
import "./icon.scss";

export default function Icon({ i, useToggleBehavior }) {
  let className = `icon ${i}`;
  let style = {};

  if (useToggleBehavior) {
    className += " toggle";
    style = {...style, ...useToggleBehavior};
  }

  return <i style={style} className={className}></i>;
}
