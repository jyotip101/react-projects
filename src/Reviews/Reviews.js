import React from 'react'
import { useState } from 'react/cjs/react.development'

import './Reviews.css'
import { reviews } from './ReviewsData'

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, url, text } = reviews[index]

  const preUser = () => {
    setIndex((index) => {
      let newIndex = index <= 0 ? 3 : index - 1
      return newIndex
    })
  }
  const nextUser = () => {
    setIndex((index) => {
      let newIndex = index >= 3 ? 0 : index + 1
      return newIndex
    })
  }
  const randomUser = () => {
    let randomUser = Math.floor(Math.random() * reviews.length)
    let user = randomUser === index ? randomUser + 1 : randomUser
    setIndex(user)
  }
  return (
    <>
      <h1>Our Reviews</h1>
      <section>
        <div className='img-contanier'>
          <i className=' material-icons'>format_quote</i>
          <div className='img-item'>
            <img src={url} alt={name} />
          </div>
        </div>
        <h5>{name} </h5>
        <h3>{job} </h3>
        <p className='text'>{text} </p>
        <div className='arroBtn'>
          <button onClick={() => preUser()} className='remove'>
            <i className='material-icons'>navigate_before</i>
          </button>
          <button onClick={() => nextUser()} className='remove'>
            <i className='material-icons'>navigate_next</i>
          </button>
        </div>
        <button onClick={() => randomUser()} className='btn'>
          Surprise me
        </button>
      </section>
    </>
  )
}

export default Reviews
