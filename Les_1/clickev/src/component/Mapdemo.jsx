import React from 'react'

function Mapdemo() {
    const no = [-1,-3,-4,5,5]
    const nos = no.map((n) =>( {no: n}) )
    console.log(nos);
    const nos1 = no.filter(n=> (n>= 0)).map(n => ({no:n}))
    console.log(nos1)
    const nos2 = no.map(n => ({no:n +10}))
    console.log(nos2)
  return (
    <div>
      
    </div>
  )
}

export default Mapdemo
