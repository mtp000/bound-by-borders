import React from 'react'

export default function Insufficient({ send }) {
  return (
    <>
        <h1>Insufficient</h1>
        
        <button onClick={() => send({type: "LEARN_ENGLISH"})}>Learn English</button>
        <button onClick={() => send({type: "GET_A_JOB"})}>Get a job</button>

    </>
  )
}
