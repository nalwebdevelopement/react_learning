import React from 'react'
import {useState} from 'react'

const Getname = () => {
    const [name,setName] = useState("Nalini")
    const[displayvalue, SetDisplayValue] = useState("")


const getValue = (e) =>{
    setName(e.target.value)
}

const handleClick = () => {
   SetDisplayValue(name)
};
   


  return (
    <div>
      <input type="text" name="text1" onChange={getValue}/>
      <button onClick={handleClick}> getmyName</button>
      <p> Enteredvalue: {displayvalue}</p>
    </div>
  )
}


export default Getname
