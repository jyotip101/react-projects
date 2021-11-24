import React from 'react'

const List = ({ data }) => {
  return (
    <>
      <main>
        {data.map((item) => {
          const { id, url, name } = item
          return (
            <article key={id}>
              <img src={url} alt={name} />
              <div className='name'>
                <h1>{name} </h1>
                <h1>$23 </h1>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                placeat modi reprehenderit dicta, accusantium dolor molestiae
              </p>
            </article>
          )
        })}
      </main>
    </>
  )
}

export default List
