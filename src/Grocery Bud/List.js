import React, { useState } from 'react'

const List = ({ items, deleteList }) => {
  // const [edit, setEdit] = useState(false)
  // const [deleteItem, setDeleteItem] = useState('')
  return (
    <>
      {items.map((item) => {
        const { text, id } = item
        return (
          <div key={id} className='list-contant'>
            <p className='items'>{text}</p>
            <div className='list-btn'>
              <button className='btn' type='submit'>
                <span className='material-icons'>edit</span>
              </button>
              <button
                onClick={() => deleteList(id)}
                className='btn'
                type='submit'
              >
                <span className='material-icons'>delete</span>
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default List
