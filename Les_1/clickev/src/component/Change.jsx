import React from 'react'
import {useState} from 'react'

const Change = () => {

    const [name,setName] = useState("Earn")
    function changeText()
    {
        const name=["Earn","Grow","Happy"]
        const ints =    Math.floor(Math.random() * 3)
        setName(name[ints]);

    }
  return (
    <div>
      <p> pls {name} subsrcribe</p>
      <button onClick={changeText}>click</button>
    </div>
  )
}

export default Change
