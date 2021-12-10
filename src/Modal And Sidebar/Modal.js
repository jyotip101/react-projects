import React from 'react'
import './Modal.css'
import { useGlobalContext } from './Context'
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <>
      <div className={`${isModalOpen ? 'show-modal' : 'hide-modal'}`}>
        <div className='modal-contant'>
          <button className='close-button' onClick={closeModal}>
            <i className='material-icons'>close</i>
          </button>
          <h1>model contant</h1>
        </div>
      </div>
    </>
  )
}

export default Modal
