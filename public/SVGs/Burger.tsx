import * as React from "react";
const Burger = (props : any) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.76184 6L20.7618 6M10.2618 12L20.7618 12M4.76184 18L20.7618 18"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default Burger;
