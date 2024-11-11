import React from 'react'

export default function Broke({ send }) {
  return (
    <>
        <h1>Broke</h1>

        <button onClick={() => send({type: "LEARN_ALONE"})}>Learn on your own with online resources</button>
    </>
  )
}
