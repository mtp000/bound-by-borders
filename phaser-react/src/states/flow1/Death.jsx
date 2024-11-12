import React from "react"
import death from '../../../public/assets/death.png'


export default function Death({ send }) {
  return (
    <div>
      <div>
        <h1>Death</h1>
          <p>It&#39;s been a long journey through the desert. You ran out of water. You have died from heat exhaustion.</p>
          <img src={death} alt="death" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />

      </div>

      <div>
        <button onClick={() => send({type: "CONTINUE"})}>Continue</button>

      </div>
    </div>
  )
}
