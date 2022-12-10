import * as React from "react"

function Human() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
     
    >
      <path
        d="M5 20v-4h14v4"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={12} cy={9} r={4} stroke="#fff" strokeWidth={2} />
    </svg>
  )
}

export default Human