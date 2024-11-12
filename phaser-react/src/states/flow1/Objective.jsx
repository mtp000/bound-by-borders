import React from "react"

export default function Objective({ send }) {
  return (
    <div>
      <h1> Objective </h1>
      <p> Your goal is to immigrate to the US from Costa Rica. How would you like to proceed? </p>
      <button onClick={() => send({ type: "ILLEGAL_OPTION_SELECTED" })}>Illegal Route</button>
      <button onClick={() => send({ type: "LEGAL_OPTION_SELECTED" })}>Legal Route</button>
    </div>
  )
}
