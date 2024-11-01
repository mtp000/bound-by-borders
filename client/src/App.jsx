import { useState } from 'react'
import { useMachine } from '@xstate/react'
import { gameplayMachine } from './gameplay'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [state, send] = useMachine(gameplayMachine);

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

  if (state.matches('catalyst_objective')) {
    return (
      <div>
        Catalyst Objective
        <button onClick={() => send({type: "CONTINUE"})}>continue</button>
      </div>
    );
  }

  if (state.matches('decision_AB')) {
    return (
      <div>
        Decision AB
        <button onClick={() => send({type: "ILLEGAL_OPTION_SELECTED"})}>continue</button>
        <button onClick={() => send({type: "LEGAL_OPTION_SELECTED"})}>restart</button>
      </div>
    );
  }

  

  if (state.matches('completed_objective')) {
    return (
      <div>
        Completed Objective
      </div>
    );
  }

  return (
    <>
    incomplete state
    </>
  )
}

export default App
