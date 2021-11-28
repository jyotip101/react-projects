import React, { useEffect } from 'react'
import { useState } from 'react'
import './GroceryBud.css'
import List from './List'

const GroceryBud = () => {
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      setError(true)
    } else if (text && isEdit) {
      // edit
    } else {
      const newlist = { text: text, id: new Date().getTime().toString() }
      setList([...list, newlist])
      setText('')
    }
  }

  const deleteList = (id) => {
    let newList = list.filter((oldList) => oldList.id != id)
    setList(newList)
  }

  useEffect(() => {
    const timeIntravel = setInterval(() => {
      setError(false)
    }, 3000)

    return () => clearInterval(timeIntravel)
  }, [error])
  return (
    <>
      <div className='containers  '>
        <div className='contant '>
          {error && (
            <p className='error' style={{ color: 'red' }}>
              Please Enter Value
            </p>
          )}
          <h1 className=''>Grocery Bud</h1>
          <form className=' form-contant' onSubmit={handleSubmit}>
            <div className='input-fields  '>
              <input
                type='text'
                className='form-control'
                placeholder='eg:- Orange'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <button className='col btn btn-light ' type='submit'>
              Submit
            </button>
          </form>
          {list.length > 0 && (
            <div className=''>
              <List items={list} deleteList={deleteList} />
              <button onClick={() => setList([])} className='btn btn-clear'>
                Clear All Items
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default GroceryBud
