import React, { useState } from 'react'

import './Tabs.css'
import List from './List'
import Data from './Data'

const Tabs = () => {
  const [person, setPerson] = useState(Data)
  const [value, setValue] = useState(0)

  return (
    <>
      <main>
        <h1 className='title'>my team</h1>
        <article>
          <header>
            {person.map((jobs, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className='btn active'
                >
                  {jobs.job}
                </button>
              )
            })}
          </header>

          <List value={value} person={person} />
        </article>
      </main>
    </>
  )
}

export default Tabs
