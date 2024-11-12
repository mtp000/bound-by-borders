import React from "react"

export default function DaysPass({ send }) {
  return (
    <div>
        <h1>Days Pass</h1>

        <p>Days pass as you travel by boat to Nicaragua, on foot through the jungles of Honduras, arriving by horseback to Guatemala.</p>
        <button onClick={() => send({type: "CONTINUE"})}>Continue</button>
        <button onClick={() => send({ type: "RESTART" })}>Rethinking illegal immigration</button>
    </div>
  )
}
