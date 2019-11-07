import React from "react";
export const Student = ({
  name,
  company,
  background = "Defaullt background"
}) => (
  <div className="student">
    <h3>{name}</h3>
    <p>{company}</p>
    <span>{background}</span>
  </div>
);
