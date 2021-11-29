import React, { useEffect } from 'react'

const Alert = ({ color, bgColor, mesg, showAlert, list }) => {
  // remove alert box after 3sec
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert()
    }, 3000)

    return () => clearTimeout(timeOut)
  }, [list])
  return (
    <>
      <p
        className='Alert'
        style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
      >
        {mesg}
      </p>
    </>
  )
}

export default Alert
