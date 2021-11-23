import React from 'react'
import { useState } from 'react/cjs/react.development'

const QuesAndAns = ({ question, answer }) => {
  const [ans, setAns] = useState(false)

  return (
    <div className='items'>
      <div className='item'>
        <p>{question} </p>
        <button onClick={() => setAns(!ans)} className='remove'>
          <i className='material-icons'>{ans ? 'remove' : 'add'}</i>
        </button>
      </div>
      <p>{ans && answer}</p>
    </div>
  )
}

export default QuesAndAns
