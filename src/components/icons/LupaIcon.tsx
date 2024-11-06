import * as React from "react"
import { SVGProps } from "react"
export const LupaIcon = (props: SVGProps<SVGSVGElement>) => {
   let { className } = props
   if (!className) {
      className = ''
   }
   
   return(
   
<svg width="24" height="24" {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`${className} inline-block cursor-pointer ml-1 mr-1`}>
<g clipPath="url(#clip0_370_5214)">
<path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12.8232 5.2002C16.0339 5.2002 18.6357 7.80352 18.6357 11.0142C18.6357 14.2248 16.0339 16.8267 12.8232 16.8267C11.8516 16.8267 10.9359 16.589 10.1309 16.1675C10.1317 16.1712 10.133 16.1755 10.1338 16.1792L7.51172 18.7998L5.36426 16.6509L7.89258 14.1211C7.89676 14.1192 7.90158 14.1185 7.90576 14.1167C7.33802 13.2188 7.00928 12.1549 7.00928 11.0142C7.00928 7.8035 9.61258 5.2002 12.8232 5.2002ZM12.8232 7.78272C11.039 7.78272 9.5918 9.2299 9.5918 11.0142C9.5918 12.7984 11.039 14.2441 12.8232 14.2441C14.6075 14.2441 16.0532 12.7984 16.0532 11.0142C16.0532 9.2299 14.6075 7.78272 12.8232 7.78272Z" fill="#0073CF"/>
</g>
<defs>
<clipPath id="clip0_370_5214">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

)}