import React from 'react'

export default function JobsAvailable({ send }) {
  return (
    <>
        <h1>Jobs Available</h1>

        <p>An English-speaking call center promises good pay but is highly competitive.</p>
        <p>A job at the carnicería is almost guarenteed but hours are long.</p>

        <button onClick={() => send({type: "CALL_CENTER"})}>Apply at English call center</button>
        <button onClick={() => send({type: "CARNICERIA"})}>Work at carnicería</button>

        <button onClick={() => send({ type: "RESTART" })}>Considering the illegal route</button>

    </>
  )
}
