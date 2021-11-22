import React, { useEffect, useState } from 'react'

const url = 'https://picsum.photos/v2/list?page=4&limit=5'

const OurTours = () => {
  const [isLoading, setisLoading] = useState(true)
  const [isError, setisError] = useState(false)
  const [data, setData] = useState([])
  const [readMore, setReadMore] = useState(false)
  const getData = async () => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          setisLoading(false)
          setisError(true)
        }
      })
      .then((datas) => {
        console.log(datas)
        setData(datas)
        setisLoading(false)
        setisError(false)
      })
      .catch((error) => console.log('error' + error))
  }
  useEffect(() => {
    getData()
  }, [])

  const removeData = (id) => {
    let newData = data.filter((oldData) => oldData.id !== id)
    setData(newData)
  }

  if (isLoading) {
    return <h1 style={{ fontSize: '200%' }}>Loading ...</h1>
  }
  if (isError) {
    return <h1 style={{ fontSize: '200%' }}>Error...</h1>
  }
  if (data.length === 0) {
    return (
      <>
        <h1>no tour Lift</h1>
        <button type='submit' onClick={getData} className='btn'>
          referse
        </button>
      </>
    )
  }

  return (
    <>
      <h1 style={{ fontSize: '200%' }}>Our Tours</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {data.map((item) => {
          const { id, author, height, download_url } = item
          return (
            <div
              key={id}
              className='section'
              style={{
                width: 'fit-content',
                padding: '0 0 1rem 0',
                margin: '2rem 1rem',
                maxWidth: '400px',
                alignItems: 'stretch',
              }}
            >
              <img
                src={download_url}
                alt={author}
                style={{
                  width: '100%',
                  borderTopLeftRadius: '5px',
                  borderTopRightRadius: '5px',
                }}
              />
              <h1
                style={{
                  fontSize: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 0.5rem',
                }}
              >
                {author}{' '}
                <span style={{ color: 'var(--main-color)' }}>${height}</span>
              </h1>
              <p
                style={{
                  fontSize: '90%',
                  fontWeight: '400',
                  textAlign: 'justify',
                  padding: '0 0.5rem',
                }}
              >
                {readMore
                  ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis aperiam culpa delectus excepturi minus laborum quas nostrum saepe non vero dolorum alias neque laboriosam pariatur, laudantium expedita tempora, quos repellendus nesciunt qui molestiae sed eaque reprehenderit! Autem laborum facilis nam consectetur beatae ad repellat dolor! Amet doloribus fuga earum.'
                  : `${'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis aperiam culpa delectus excepturi minus laborum quas nostrum saepe non vero dolorum alias neque laboriosam pariatur, laudantium expedita tempora, quos repellendus nesciunt qui molestiae sed eaque reprehenderit! Autem laborum facilis nam consectetur beatae ad repellat dolor! Amet doloribus fuga earum.'.substring(
                      0,
                      200
                    )}...`}
                <button
                  onClick={() => setReadMore(!readMore)}
                  className='remove'
                  style={{ display: 'contents', margin: '0' }}
                >
                  {readMore ? 'read less' : 'read more'}
                </button>
              </p>
              <button
                onClick={() => removeData(id)}
                style={{
                  border: '2px solid var(--main-color)',
                  background: 'transparent',
                  color: 'var(--main-color)',
                }}
                className='btn'
              >
                Not Intersted
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default OurTours
