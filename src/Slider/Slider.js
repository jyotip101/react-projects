import React, { useState, useEffect } from 'react'
import './Slider.css'
import Data from './Data'

const Slider = () => {
  const [reviews, setReviews] = useState(Data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = reviews.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, reviews])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <main>
        <div className='title'>
          <h1>
            <span>/</span> Reviews
          </h1>
        </div>
        <div className='reviews-items'>
          {reviews.map((items, personIndex) => {
            const { id, url, name, text, job } = items

            let position = 'nextSlide'
            if (personIndex === index) {
              position = 'activeSlide'
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === reviews.length - 1)
            ) {
              position = 'lastSlide'
            }
            return (
              <article key={id} className={`reviews-contant ${position}`}>
                <div className='img-contant'>
                  <img src={url} alt={name} />
                </div>
                <h1>{name}</h1>
                <h4>{job}</h4>
                <p className='text'>{text}</p>
                <i className=' material-icons icon'>format_quote</i>
              </article>
            )
          })}
          <button className='prev' onClick={() => setIndex(index - 1)}>
            <i className='material-icons '>navigate_before</i>
          </button>
          <button className='next' onClick={() => setIndex(index + 1)}>
            <i className='material-icons'>navigate_next</i>
          </button>
        </div>
      </main>
    </>
  )
}

export default Slider
