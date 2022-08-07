import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      fill="none"
      viewBox="0 0 23 23"
    >
      <circle cx="11.5" cy="11.5" r="11.5" fill="#00050D"></circle>
      <path
        fill="#00050D"
        fillRule="evenodd"
        d="M11.5 7.667v7.666-7.666z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.5 7.667v7.666"
      ></path>
      <path
        fill="#00050D"
        fillRule="evenodd"
        d="M15.334 11.5H7.667h7.667z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.334 11.5H7.667"
      ></path>
    </svg>
  );
}

export default Icon;
