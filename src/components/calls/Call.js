import React from 'react'
import Header from '../common/header/Header'
import Sidebar from '../common/sidebar/Sidebar'
import RightFold from './right-fold/RightFold'
import Leftfold from './left-fold/Leftfold'
import "./calls.css";

function Call() {
  return (
    <div className='calls-container'>
      <Header /> 
      <div className='calls-body'>
        <div className='calls-sidebar'>
          <Sidebar/>
        </div>
        <div className='calls-leftFold'>
          <Leftfold/>
        </div>
        <div className='calls-rightFold'>
          <RightFold/>
        </div>
      </div>
    </div>
  )
}

export default Call
