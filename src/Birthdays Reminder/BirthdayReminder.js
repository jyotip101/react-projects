import React, { useState } from 'react'

import './BirthdayReminder.css'
import data from './Data'
import List from './List'

const BirthdaysReminder = () => {
  const [user, setUser] = useState(data)

  return (
    <>
      <section className='section'>
        <h1>{user.length} Birthdays Today</h1>

        <List user={user} />

        <button onClick={() => setUser([])} className='btn'>
          <i className='material-icons'>clear</i>
          Clear All
        </button>
      </section>
    </>
  )
}

export default BirthdaysReminder
