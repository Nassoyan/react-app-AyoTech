import * as React from "react"

function Box() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      
    >
      <path
        d="M1 5h3l5 11h9l3-7H10"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={9.5} cy={19.5} r={1.5} fill="#fff" />
      <circle cx={17.5} cy={19.5} r={1.5} fill="#fff" />
    </svg>
  )
}

export default Box