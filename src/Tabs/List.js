import React from 'react'

const List = ({ value, person }) => {
  const { name, job, url, text } = person[value]
  return (
    <>
      <div className='person-contant'>
        <div className='profile'>
          <div className='img-contant'>
            <img src={url} alt={name} />
          </div>
          <div className='name-contant'>
            <h4>{job}</h4>
            <h1>{name}</h1>
          </div>
        </div>
        {text.map((txt, index) => {
          return (
            <div key={index} className='text-contant'>
              <i className='material-icons icons'>double_arrow</i>
              <p>{txt}</p>
            </div>
          )
        })}
        <button className='btn more-info'>more info</button>
      </div>
    </>
  )
}

export default List
