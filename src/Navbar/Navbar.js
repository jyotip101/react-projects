import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { nav, sociallIcon } from './navData'

const Navbar = () => {
  const [showLink, setShowLink] = useState(false)
  const linkContanerRef = useRef(null)
  const linkRef = useRef(null)

  useEffect(() => {
    const linkHeight = linkRef.current.getBoundingClientRect().height
    if (showLink) {
      linkContanerRef.current.style.height = `${linkHeight}px`
    } else {
      linkContanerRef.current.style.height = '0px'
    }
  }, [showLink])

  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <span className='material-icons'>logo_dev</span>
            <button
              className='menu-button'
              onClick={() => setShowLink(!showLink)}
            >
              <i className='material-icons'>{`${
                showLink ? 'close' : 'drag_handle'
              }`}</i>
            </button>
          </div>
          <div className='links-container' ref={linkContanerRef}>
            <ul className='links' ref={linkRef}>
              {nav.map((item) => {
                const { id, text, url } = item
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className='social-icons'>
            {sociallIcon.map((item) => {
              const { id, url, icon } = item
              return (
                <li key={id}>
                  <a href={url}>
                    <i className='material-icons'>{icon}</i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <span className='material-icons'>logo_dev</span>
            <button
              className='menu-button'
              onClick={() => setShowLink(!showLink)}
            >
              <i className='material-icons'>{`${
                showLink ? 'close' : 'drag_handle'
              }`}</i>
            </button>
          </div>
          <div className='links-container' ref={linkContanerRef}>
            <ul className='links' ref={linkRef}>
              {nav.map((item) => {
                const { id, text, url } = item
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className='social-icons'>
            {sociallIcon.map((item) => {
              const { id, url, icon } = item
              return (
                <li key={id}>
                  <a href={url}>
                    <i className='material-icons'>{icon}</i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
