import React, { useState } from 'react'

const List = ({ items, deleteList, editItemOfList }) => {
  return (
    <>
      {items.map((item) => {
        const { text, id } = item
        return (
          <div key={id} className='list-contant'>
            <p className='items'>{text}</p>
            <div className='list-btn'>
              <button
                onClick={() => editItemOfList(id)}
                className='btn'
                type='submit'
              >
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
