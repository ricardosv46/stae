import * as React from "react"
import { SVGProps } from "react"

export const AddImageIcon = (props: SVGProps<SVGSVGElement>) => {
const { fill } = props
let fillColor ='#0073CF'
if (fill) {
   fillColor = fill
}
return (
   <svg width="20" height="20" viewBox="0 0 20 20" {...props} fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block cursor-pointer ml-1 mr-1">
   <path d="M10 16C10 16.7 10.13 17.37 10.35 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 0.9 0.9 0 2 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V10.35C17.37 10.13 16.7 10 16 10V2H2V16H10ZM10.96 9.29L8.21 12.83L6.25 10.47L3.5 14H10.35C10.75 12.88 11.47 11.91 12.4 11.21L10.96 9.29ZM17 15V12H15V15H12V17H15V20H17V17H20V15H17Z"  fill={`${fillColor}`} />
   </svg>
   )

}
