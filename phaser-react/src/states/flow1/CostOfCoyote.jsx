//import React from 'react'

export default function CostOfCoyote({ send }) {
  return (
    <div>
        <h1> The cost of coyote is $12,000.</h1>
        <button onClick={() => send({type: "CONTINUE"})}>continue</button>
    </div>
  )

}
