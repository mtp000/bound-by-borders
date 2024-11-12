import React from "react"
import money from '../../../public/assets/money.png'


export default function EnoughMoney({ send }) {
  return (
    <div>
      <div>
        <h1> Enough Money </h1>
        <p> You managed to gather enough money to pay the coyote&#39;s price.</p>
        <img src={money} alt="$6000" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />

      </div>

      <div>
        <button onClick={() => send({type: "CONTINUE"})}> Start Journey </button>
        <button onClick={() => send({ type: "RESTART" })}>Rethinking illegal immigration</button>

      </div>
    </div>
  )
}
