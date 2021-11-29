import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

// get list from local storage
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

const GroceryBud = () => {
  const [alert, setAlert] = useState({
    show: false,
    color: '',
    bgColor: '',
    mesg: '',
  })

  const [list, setList] = useState(getLocalStorage())
  const [isEdit, setIsEdit] = useState(false)
  const [editID, setEditID] = useState(null)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      // empty input
      showAlert(true, '#ff0000d0', '#ff000028', 'Please Enter Value')
    } else if (text && isEdit) {
      // edit item
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, text: text }
          }
          return item
        })
      )
      setText('')
      setEditID(null)
      setIsEdit(false)
      showAlert(true, '#008000d0', '#00800028', 'item change')
    } else {
      // add new item in list
      const newlist = { text: text, id: new Date().getTime().toString() }
      setList([...list, newlist])
      showAlert(true, '#008000d0', '#00800028', 'one item added')
      setText('')
    }
  }
  // Edit list item
  const editItemOfList = (id) => {
    const newEditItem = list.find((item) => item.id === id)
    setIsEdit(true)
    setEditID(id)
    setText(newEditItem.text)
  }
  //  delete item of list
  const deleteList = (id) => {
    let newList = list.filter((oldList) => oldList.id !== id)
    setList(newList)
    showAlert(true, '#ff0000d0', '#ff000028', 'one item is deleted')
  }
  // clear all items of list
  const clearAllList = () => {
    setList([])
    showAlert(true, '#ff0000d0', '#ff000028', 'all items is deleted')
  }
  // show alert
  const showAlert = (show = false, color = '', bgColor = '', mesg = '') => {
    setAlert({ show, color, bgColor, mesg })
  }
  // add list in local storage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <>
      <div className='containers  '>
        <div className='contant '>
          {/* display when alert is true */}
          {alert.show && <Alert {...alert} showAlert={showAlert} />}
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
              {isEdit ? 'Edit' : 'Add'}
            </button>
          </form>
          {/* display only when item are present in list */}
          {list.length > 0 && (
            <div className='lists-contaner'>
              <List
                items={list}
                editItemOfList={editItemOfList}
                deleteList={deleteList}
                list={list}
              />
              <button onClick={() => clearAllList()} className='btn btn-clear'>
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
