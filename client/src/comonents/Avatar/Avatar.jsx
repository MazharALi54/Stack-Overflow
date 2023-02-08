import React from 'react'

const Avatar = ({children, backgroundColor,px,py,color,fontSize,cursor,borderRadius}) => {
  const style={
    backgroundColor,
    padding : `${py} ${px}`,
    color: color || 'black',
    textAlign: "center",
    fontSize,
    cursor: cursor || null,
    borderRadius,
    textDecoration: "none"

  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar