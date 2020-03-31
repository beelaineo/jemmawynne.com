import * as React from 'react'

let dynamicStyles = null

function addAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style')
    dynamicStyles.type = 'text/css'
    document.head.appendChild(dynamicStyles)
  }

  dynamicStyles.sheet.insertRule(body, dynamicStyles.length)
}

addAnimation(`
  @keyframes spin { 
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
`)

const spinnerStyles = {
  width: '20px',
  height: '20px',
  borderRadius: '15px',
  border: '2px solid #156cff',
  borderTopColor: 'transparent',
  animation: '3.5s spin infinite linear',
}

export const Loading = () => <div style={spinnerStyles} />
