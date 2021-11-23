import React from 'react'

const List = ({ user }) => {
  return (
    <>
      {user.map((users) => {
        const { id, name, age, url } = users
        return (
          <div key={id} className='items'>
            <div className='item '>
              <div className='circular-img'>
                <img src={url} alt={name} />
              </div>
              <p>
                {name} <span> {age}</span>
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default List
