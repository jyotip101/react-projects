import React, { useState } from 'react'

const Data = [
  {
    id: 1,
    name: 'sam',
    age: 34,
  },
  {
    id: 2,
    name: 'rama',
    age: 24,
  },
  {
    id: 3,
    name: 'max',
    age: 10,
  },
  {
    id: 4,
    name: 'sara',
    age: 14,
  },
  {
    id: 5,
    name: 'join',
    age: 30,
  },
]

const BirthdaysReminder = () => {
  const [user, setUser] = useState(Data)

  const removeUser = (id) => {
    setUser((oldUser) => {
      const newUser = oldUser.filter((oldUser) => oldUser.id !== id)
      return newUser
    })
  }

  return (
    <>
      <h1>5 Birthdays Today</h1>
      <section className='section'>
        {user.map((data) => {
          const { id, name, age } = data
          return (
            <div key={id} className='items'>
              <div className='item '>
                <i className='material-icons'>account_circle</i>
                <p>
                  {name} <span> {age}</span>
                </p>
              </div>
              <button onClick={() => removeUser(id)} className='remove'>
                <i className='material-icons'>delete</i>
              </button>
            </div>
          )
        })}
      </section>
      <button onClick={() => setUser([])} className='btn'>
        <i className='material-icons'>clear</i>
        Clear All
      </button>
    </>
  )
}

export default BirthdaysReminder
