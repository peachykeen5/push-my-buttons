import React, { useState } from "react";

export const Button = ({ importance, label, handleClick }) => {
  return <button className={`Button__${importance}`} onClick={handleClick}>{label}</button>;
};
