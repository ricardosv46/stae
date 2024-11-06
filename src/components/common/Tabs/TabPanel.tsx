import React, { HtmlHTMLAttributes, ReactNode } from 'react'
interface TabPanelProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children: ReactNode
}
export const TabPanel = ({ children, ...props }: TabPanelProps) => {
    return <div {...props}>{children}</div>
}
