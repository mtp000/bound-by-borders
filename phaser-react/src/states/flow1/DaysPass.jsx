import React from "react"
import daysPass from '../../../public/assets/daysPass.png'


export default function DaysPass({ send }) {
  return (
    <div>
      <div>
        <h1>Days Pass</h1>
        <p>Days pass as you travel by boat to Nicaragua, on foot through the jungles of Honduras, arriving by horseback to Guatemala.</p>
        <img src={daysPass} alt="calendar with days marked in June" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />


      </div>

      <div>
        <button onClick={() => send({type: "CONTINUE"})}>Continue</button>
        <button onClick={() => send({ type: "RESTART" })}>Rethinking illegal immigration</button>
      </div>

    </div>
  )
}
