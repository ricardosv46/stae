import * as React from "react"
import { SVGProps } from "react"
export const ReenvioIcon = (props: SVGProps<SVGSVGElement>) => {
    let { className } = props
   if (!className) className = ""
    return(
    
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} inline-block cursor-pointer`}
    {...props}
  >
    <path
      d="M16 17L14.575 15.6L19.175 11L14.575 6.4L16 5L22 11L16 17ZM2 19V15C2 13.6167 2.48767 12.4377 3.463 11.463C4.43833 10.4883 5.61733 10.0007 7 10H13.175L9.575 6.4L11 5L17 11L11 17L9.575 15.6L13.175 12H7C6.16667 12 5.45833 12.2917 4.875 12.875C4.29167 13.4583 4 14.1667 4 15V19H2Z"
      fill="#0073CF"
    />
  </svg>
)}