import React, { useState, useEffect } from 'react'

export default function Catalyst({ state, send }) {
    const [counter, setCounter] = useState(() => {
      // Retrieve counter from localStorage or default to 0
      return parseInt(localStorage.getItem('gameStartCounter')) || 0;
    });
  
    useEffect(() => {
      // Save the counter to localStorage whenever it changes
      localStorage.setItem('gameStartCounter', counter);
    }, [counter]);

  const handleContinue = () => {
    if (state.matches('catalyst_earth')) {
      setCounter(prevCount => prevCount + 1);
      console.log(counter);
    }
    send({type: "CONTINUE"});
  };

  if (state.matches('catalyst_earth')) {
    return (
      <div>
        <h1> Catalyst Earth </h1>
        <p> Political corruption and rumors of fraud in the most recent election has cause much social unrest in Costa Rica. There are protests daily, and they often end in violence. Rivaling cartels are using the circumstances to gain political power and control over more territory. </p>
        <button onClick={handleContinue}> Continue</button>
      </div>
    );
  }
  else if (state.matches('catalyst_country')) {
    return (
      <div>
        <h1> Catalyst Country </h1>
        <p> Having just graduated high school, you are envisioning a better future as the current landscape becomes more hopeless everyday. You dream of escaping to somewhere with better opportunities. </p>
        <button onClick={() => send({type: "CONTINUE"})}> Continue</button>
      </div>
    );
  }
  else {
    return (
    <div> Error: create error page later </div>
  )
  }
  
}
