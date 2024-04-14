import React from 'react'
import Courses from './Courses'
import Certificates from './Certificates'
import RightMainComponent from './RightMainComponent'
import './MainComponent.css'

function MainComponent() {
  return (
    <div className='maincomponents'>
      <Courses />
      <RightMainComponent />
    </div>
  )
}

export default MainComponent