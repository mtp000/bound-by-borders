import React from 'react'

export default function Insufficient({ send }) {
  return (
    <>
        <h1>Insufficient</h1>

        <p>Congratulations, you meet the basic requirements for a student visa. However, you must demonstrate proficiency in English and prove that you have sufficient financial resources to cover your tuition and living expenses while studying in the U.S.</p>
        
        <button onClick={() => send({type: "LEARN_ENGLISH"})}>Learn English</button>
        <button onClick={() => send({type: "GET_A_JOB"})}>Get a job</button>

    </>
  )
}
