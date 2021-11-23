import React, { useEffect, useState } from 'react'

import './Tours.css'

import Loading from './Loading'
import ToursList from './ToursList'

const url = 'https://picsum.photos/v2/list?page=4&limit=5'

const Tours = () => {
  const [isLoading, setisLoading] = useState(true)
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(url)
      const tourData = await response.json()

      setData(tourData)
      setisLoading(false)
    } catch (error) {
      setisLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (data.length === 0) {
    return (
      <>
        <h1>no tour Lift</h1>

        <button onClick={getData} className='btn'>
          refresh
        </button>
      </>
    )
  }
  const removeTour = (id) => {
    const newToue = data.filter((tour) => tour.id !== id)

    setData(newToue)
  }
  return (
    <>
      <h1>Our Tours</h1>
      <div className='contant'>
        {data.map((item) => {
          return <ToursList key={item.id} {...item} removeTour={removeTour} />
        })}
      </div>
    </>
  )
}
export default Tours
