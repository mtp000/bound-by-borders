import React from 'react'

export default function LearnEnglish({ send }) {
  return (
    <>
        <h1>Learn English</h1>

        <button onClick={() => send({type: "LEARN_ALONE"})}>Learn on your own with online resources</button>
        <button onClick={() => send({type: "ENROLL_CLASS"})}>Enroll in an English class</button>

    </>
  )
}
