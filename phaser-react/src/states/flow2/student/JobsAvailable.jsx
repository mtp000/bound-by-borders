import React from 'react'

export default function JobsAvailable({ send }) {
  return (
    <>
        <h1>Jobs Available</h1>

        <button onClick={() => send({type: "CALL_CENTER"})}>Work at English call center</button>
        <button onClick={() => send({type: "CARNICERIA"})}>Work at carnicería</button>

    </>
  )
}
