//import React from 'react'

export default function Catalyst({ state, send }) {
    

  if (state.matches('catalyst_earth')) {
    return (
      <div>
        <h1> Catalyst Earth </h1>
        <p> Political corruption and rumors of fraud in the most recent election has cause much social unrest in Costa Rica. There are protests daily, and they often end in violence. Rivaling cartels are using the circumstances to gain political power and control over more territory. </p>
        <button onClick={() => send({type: "CONTINUE"})}> Continue</button>
      </div>
    );
  }
  if (state.matches('catalyst_country')) {
    return (
      <div>
        <h1> Catalyst Country </h1>
        <p> Having just graduated high school, you are envisioning a better future as the current landscape becomes more hopeless everyday. You dream of escaping to somewhere with better opportunities. </p>
        <button onClick={() => send({type: "CONTINUE"})}> Continue</button>
      </div>
    );
  }
  
  return (
    <div> Error: create error page later </div>
  )
}
