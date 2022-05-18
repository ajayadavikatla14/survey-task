import React, { useEffect, useRef, useState } from 'react';
import data from './data';
import Star from './Star';
import './App.css';
import Welcome from './Welcome';


const App = () => {
  const [index,setIndex]=useState(0);
  const [surveyMode,setSurveyMode]=useState(false);
  const [exit,setExit]=useState(false);
  const dataLen=data.length-1;
  const [comments,setComments]=useState('')
  const didMount = useRef(false);
  const [getter,setGetter]=useState(true);

  useEffect(() => {
    if (didMount.current) {
      if(exit===true){
        console.log('I run only if exit  changes.');
        const timeOut=setTimeout(() => {
          setExit(false);
          setSurveyMode(false);
        }, 5000);

        return()=>clearTimeout(timeOut);
      }
      
    } else {
      didMount.current = true;
    }
  }, [exit]);

  const prevData=(radios)=>{
    if(index<1){
      setIndex(data.length-1);
      return;
    }
    setIndex(index-1)

    // console.log(radios);
      radios.name=false;
  }

  const nextData=(radios)=>{
    if(index>data.length-2){
      setIndex(0);
      return;
    }
    
    setIndex(index+1);
    // console.log(radios);
      radios.name=false;
      setGetter(false)
  }

  
  return (
    <>
      
        <div className={`${exit ?  'hide-total' : null }`}>
        <div className="main">
        {surveyMode ? null :
         <div className="welcome">
            <Welcome setSurveyMode={setSurveyMode} />
        </div>
         }
      </div>
      <div className={`survey ${surveyMode ? null : 'mode'} `}>
        <div className="container">
        <div className="btns-grp">
              <div className="prev-next">
                <button className='prevBtn' onClick={()=>prevData(data[index].radios)} >Prev</button>
                <button className='NextBtn' onClick={()=>nextData(data[index].radios)} >Next</button>
              </div>
           </div>
          <div className="qno">
              {index+1}/{data.length}
              
            </div>
            <div className="question">
               {index+1}.{data[index].q}
            </div>
            <div className="radios">
                <Star radios={data[index].radios} getter={getter} setGetter={setGetter} setComments={setComments} />
            </div>     


        </div>
          <div className="submitData">
            {dataLen === index ?
              <div className="confirm">
                <button className='submit-data' onClick={()=>{const confirmbox=window.confirm("Do You Want To Submit ? ")
                if (confirmbox === true) {
                  setExit(true);
                  localStorage.setItem('Feedback : ',comments)
                  console.log('Feedback :',comments);
                }
              }}
              >submit</button>
              </div>
              : null}
            </div>
      </div>
      </div>
      
      
      <div className="exit">
              {exit ? <div className="exited">
                 Thank You For Participating The Survey..!!
               </div>
               : null 
                }
        </div>






    </>
  )
}

export default App
















