//import React from 'react'

export default function Catalyst({ state, send }) {
    

  if (state.matches('catalyst_earth')) {
    return (
      <div>
        Catalyst Earth
        <button onClick={() => send({type: "CONTINUE"})}>continue</button>
      </div>
    );
  }
  if (state.matches('catalyst_country')) {
    return (
      <div>
        Catalyst Country
        <button onClick={() => send({type: "CONTINUE"})}>continue</button>
      </div>
    );
  }
  
  return (
    <div>catalyst</div>
  )
}
