import React from 'react'
import Certificates from './Certificates'
import Achivements from './Achivements'
import './MainComponent'

function RightMainComponent() {
  return (
    <div className='rightMainComponent'>
      <div className="title">
        <h2>Documents</h2>
      </div>
      <div>
      <Certificates />
      </div>
      <div>
        <Achivements />
      </div>
    </div>
  )
}

export default RightMainComponent