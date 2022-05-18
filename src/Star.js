import React from 'react';
import './App.css'

const Star = ({radios,setComments,name}) => {
  // console.log(radios);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log(name , value);
    localStorage.setItem(name,value);
 }

  return (
    <>
       <form action="" className="raios">
       <div className="stars">
     {
       radios.map((item,index)=>{
         const {type,value,name}=item;
         return <div key={index} className='each-radio' > 
          {(type==='textarea') ?  
            <textarea rows="5" cols="40" onChange={(e)=>setComments(e.target.value)} className='comments' />
            : 
              <label htmlFor={name} className='radios-checked' >
              <input type={type} value={value}  name={name} onChange={(e)=>handleChange(e)} className='inpt-fileds'   /> 
              
              </label>
              
           }  
            
         </div>
       })
     }
     </div>
     </form>
    
    </>
  )
}

export default Star