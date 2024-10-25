import * as React from "react";
const Play = (props : any) => (
  <svg
    width={43}
    height={43}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={21.475}
      cy={21.8236}
      r={20.475}
      stroke="#7261FF"
      strokeWidth={1.05}
    />
    <circle cx={21.475} cy={21.8237} r={18.375} fill="#7261FF" />
    <path
      d="M15.7 13.9487L27.95 21.8237L15.7 29.6987V13.9487Z"
      stroke="white"
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Play;
