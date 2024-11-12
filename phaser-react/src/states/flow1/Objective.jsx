import React from "react"
import costaRica from '../../../public/assets/costaRica.png'

export default function Objective({ send }) {
  return (
    <div>
      <div>
        <h1> Objective </h1>
        <p> Your goal is to immigrate to the US from Costa Rica. How would you like to proceed? </p>
        <img src={costaRica} alt="Costa Rica" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />
      </div>

      <div>
        <button onClick={() => send({ type: "ILLEGAL_OPTION_SELECTED" })}>Illegal Route</button>
        <button onClick={() => send({ type: "LEGAL_OPTION_SELECTED" })}>Legal Route</button>
      </div>
    </div>

    
  )
}
