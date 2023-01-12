import * as React from "react"

function Geo() {
  return (
    <svg
      width={16}
      height={22}
      viewBox="0 0 16 22"
      fill="none"
    >
      <path
        d="M15 8c0 1.923-1.02 4.44-2.563 6.913-1.329 2.13-2.967 4.104-4.437 5.468-1.47-1.364-3.108-3.337-4.437-5.468C2.02 12.44 1 9.923 1 8a7 7 0 0114 0z"
        stroke="#EB5757"
        strokeWidth={2}
      />
      <circle cx={8} cy={8.35693} r={2} stroke="#EB5757" strokeWidth={2} />
    </svg>
  )
}

export default Geo;
