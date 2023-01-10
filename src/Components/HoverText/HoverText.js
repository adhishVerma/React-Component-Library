import React from 'react'
import './style.css'

const HoverText = () => {
  return (
    <div className='container'>
      <div className='text'>
        <div className="line">
          <p className='word'>A</p>
          <p className='word'>coder</p>
          <p className='word'>making</p>
        </div>
        <div className="line">
          <p className='word'>react</p>
          <p className='word'>components</p>
        </div>
        <div className='line'> <p className='word fancy'>
            <span className='letter'>@</span>
            <span className='letter'>H</span>
            <span className='letter'>e</span>
            <span className='letter'>l</span>
            <span className='letter'>i</span>
            <span className='letter'>x</span>
          </p></div>
      </div>
    </div>
  )
}

export default HoverText
