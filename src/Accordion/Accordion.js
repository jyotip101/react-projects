import React from 'react'
import QuesAndAns from './QuesAndAns'
import Data from './Data'
import './Accordion.css'
import { useState } from 'react/cjs/react.development'
const Accordion = () => {
  const [data, setData] = useState(Data)

  return (
    <>
      <section>
        <h1>Questions And Answers About REST API</h1>
        <article>
          {data.map((qa) => {
            return <QuesAndAns key={qa.id} {...qa} />
          })}
        </article>
      </section>
    </>
  )
}

export default Accordion
