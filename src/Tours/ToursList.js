import React, { useState } from 'react'

const ToursList = ({ id, author, height, download_url, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <div className='section'>
        <img src={download_url} alt={author} />
        <h1>
          {author} <span>${height}</span>
        </h1>
        <p>
          {readMore
            ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis aperiam culpa delectus excepturi minus laborum quas nostrum saepe non vero dolorum alias neque laboriosam pariatur, laudantium expedita tempora, quos repellendus nesciunt qui molestiae sed eaque reprehenderit! Autem laborum facilis nam consectetur beatae ad repellat dolor! Amet doloribus fuga earum.'
            : `${'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis aperiam culpa delectus excepturi minus laborum quas nostrum saepe non vero dolorum alias neque laboriosam pariatur, laudantium expedita tempora, quos repellendus nesciunt qui molestiae sed eaque reprehenderit! Autem laborum facilis nam consectetur beatae ad repellat dolor! Amet doloribus fuga earum.'.substring(
                0,
                200
              )}...`}
          <button onClick={() => setReadMore(!readMore)} className='remove'>
            {readMore ? 'read less' : 'read more'}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className='btn'>
          Not Intersted
        </button>
      </div>
    </>
  )
}

export default ToursList
