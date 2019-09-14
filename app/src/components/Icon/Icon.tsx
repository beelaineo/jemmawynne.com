import * as React from 'react'

/**
 * Search SVG
 */

const icons = {
  search: () => (
    <g>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
    </g>
  ),
  bag: () => (
    <g>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z" />
    </g>
  ),
}

interface IconProps {
  icon: string
  width?: string
  height?: string
}

export const Icon = ({ icon, width, height }: IconProps) => {
  const SvgInner = icons[icon]
  if (!SvgInner) {
    console.warn(`There is no SVG for icon "${icon}"`)
    return null
  }
  return (
    <svg
      height={height || '1em'}
      width={width || '1em'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <SvgInner />
    </svg>
  )
}
