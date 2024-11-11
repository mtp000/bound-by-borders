import React from 'react'

export default function LearnEnglish({ send }) {
  return (
    <>
        <h1>Learn English</h1>

        <p>There is a local English class, but the tuition is half of what you make per month.</p>

        <p>You can attempt to learn on your own, but it takes twice as long to achieve proficiency.</p>

        <button onClick={() => send({type: "ENROLL_CLASS"})}>Enroll in an English class</button>
        <button onClick={() => send({type: "LEARN_ALONE"})}>Learn on your own with online resources</button>

        <button onClick={() => send({ type: "RESTART" })}>Considering the illegal route</button>

    </>
  )
}
