import React from 'react'

export default function Insufficient({ send }) {
  return (
    <>
        <h1>Insufficient</h1>

        <p>Congratulations! You meet the basic requirements for a student visa. However, you must:</p>

        <ul>
          <li>demonstrate proficiency in English</li>
          <li>provide proof of sufficient financial resources to cover your tuition and living expenses while studying in the U.S.</li>
        </ul>
        
        <button onClick={() => send({type: "LEARN_ENGLISH"})}>Learn English</button>
        <button onClick={() => send({type: "GET_A_JOB"})}>Get a job</button>

        <button onClick={() => send({ type: "RESTART" })}>Considering the illegal route</button>

    </>
  )
}
