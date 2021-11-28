import React, { useEffect, useState } from 'react'

import Values from 'values.js'

import './Color.css'
import ColorList from './ColorList'

const Color = () => {
  const [color, setColor] = useState('')
  // const [weightValue, setWeightValue] = useState('')
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState(new Values('#ff0000').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      // let weights = weightValue === '' || weightValue < 0 ? 10 : weightValue
      let colors = new Values(color).all(10)
      // setWeightValue(weights)
      setColorList(colors)
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  useEffect(() => {
    const timeIntravel = setInterval(() => {
      setError(false)
    }, 3000)

    return () => clearInterval(timeIntravel)
  }, [error])

  return (
    <>
      <section>
        <form className='form-contant' onSubmit={handleSubmit}>
          <div className='input-field'>
            <label htmlFor='color'>Color Generator</label>
            <input
              type='text'
              className={error ? 'error' : null}
              name='color'
              id='color'
              value={color}
              placeholder='#ff0000'
              onChange={(e) => setColor(e.target.value)}
            />
            {/* <input
              type='number'
              className='numbers'
              id='numbers'
              name='numbers'
              placeholder='10%'
              value={weightValue}
              onChange={(e) => setWeightValue(e.target.value)}
            /> */}
            <button type='submit' className='btn'>
              Generator
            </button>
          </div>
        </form>

        <div className='color-list'>
          {colorList.map((colorSets, index) => {
            return (
              <ColorList
                key={index}
                {...colorSets}
                index={index}
                hexColor={colorSets.hex}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Color
