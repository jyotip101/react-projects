import React from 'react'
import './Color.css'
import ColorList from './ColorList'

const Color = () => {
  return (
    <>
      <section>
        <form className='form-contant'>
          <div className='input-field'>
            <label htmlFor='color'>Color Generator</label>
            <input type='text' name='color' id='color' />
            <button className='btn'>Generator</button>
          </div>
        </form>
        <ColorList />
      </section>
    </>
  )
}

export default Color
