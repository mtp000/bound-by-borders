import React from "react"
import cost from '../../../public/assets/cost.png'

export default function CostOfCoyote({ send }) {
  
  return (
    <div>
      <div>
        <h1> Cost is $12,000. Upfront $6,000. Agreed? </h1>
        <p> You don&#39;t have enough to pay the coyote&#39;s price. How do you want to proceed? </p>
        <img src={cost} alt="cost of coyote" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />

      </div>

      <div>
        <button onClick={() => send({type: "CONTINUE"})}> Borrow from loan sharks. </button>
        <button onClick={() => send({type: "CONTINUE"})}> Sell all valuables </button>
        <button onClick={() => send({ type: "RESTART" })}>Rethinking illegal immigration</button>

      </div>
    </div>
  )

}
