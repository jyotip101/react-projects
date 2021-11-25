import React from 'react'
import './Lorem.css'
import Data from './Data'
import { useState } from 'react'

const Lorem = () => {
  const [count, setCount] = useState(0)
  const [lorems, setLorems] = useState([])
  const setParagraph = () => {
    console.log('click')
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    let number = parseInt(count)
    if (number < 0) {
      number = 1
    }
    if (number > 6) {
      number = 6
    }
    setLorems(Data.slice(0, number))
  }
  return (
    <>
      <main>
        <div className='title'>
          <h1>Lorem Ipsum Generator</h1>
        </div>
        <form className='form-contant' onSubmit={handleSubmit}>
          <div className='input-field'>
            <label htmlFor='paragraph'>paragraph:</label>
            <input
              type='number'
              name='paragraph'
              id='paragraph'
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <button className='btn'>Generate</button>
        </form>
        {lorems.map((lorem, index) => {
          return <p key={index}>{lorem}</p>
        })}
      </main>
    </>
  )
}

export default Lorem
