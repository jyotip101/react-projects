import React, { useEffect } from 'react'
import { useState } from 'react'

const ColorList = ({ rgb, weight, hexColor, index }) => {
  const [copyColor, setCopyColor] = useState(false)

  const copyToClipbords = (hexColor) => {
    setCopyColor(true)
    navigator.clipboard.writeText(`#${hexColor}`)
  }

  useEffect(() => {
    const time = setInterval(() => {
      setCopyColor(false)
    }, 3000)

    return () => clearTimeout(time)
  }, [copyColor])

  const bg = rgb.join(',')
  return (
    <div
      style={{
        backgroundColor: `rgb(${bg})`,
        color: `${index > 11 ? '#fff' : '#000'}`,
      }}
      className='color-item'
      onClick={() => copyToClipbords(hexColor)}
    >
      <p>{weight}%</p>
      <p>#{hexColor}</p>
      <br />
      <p style={{ textAlign: 'center', fontSize: '80%' }}>
        {copyColor ? 'Copy To Clipbords' : null}
      </p>
    </div>
  )
}

export default ColorList
