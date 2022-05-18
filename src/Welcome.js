import React from 'react';
import './App.css'

const Welcome = ({setSurveyMode}) => {
  return (
    <>
        <div className="welcome-screen">
             Hi User !! Welcome To The Survey..
           <div className="start-btns">
                <button onClick={()=>setSurveyMode(true)} className='start-btn' >START</button>
           </div>
        </div>
    </>
  )
}

export default Welcome