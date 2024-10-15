import React from 'react'
import {useState} from 'react'

function Inc() {
    const [count, setCount] = useState(10)
    function  increment()  {
        setCount((count) => {return count + 1})
    }
    function decrement(){
        setCount((count) => {return count -1 })
    }
  return (
    <div>
      <button onClick = { increment}> + </button>
      <p> {count} </p>
      {/* <input type="text" id="text" name="first"/> */}
      <button onClick = { decrement}> - </button>
    </div>
  )
}

export default Inc
