import React from 'react'

export default function Broke({ send }) {
  return (
    <>
        <h1>Broke</h1>

        <p>The high costs of English classes leaves you broke. </p>

        <button onClick={() => send({type: "LEARN_ALONE"})}>Learn on your own with online resources</button>

        <button onClick={() => send({ type: "RESTART" })}>Considering the illegal route</button>
    </>
  )
}
