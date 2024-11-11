import React from 'react'

export default function ChooseVisas({ send }) {
  return (
    <>
        <h1>Choose Visas</h1>
        <button onClick={() => send({type: "STUDENT"})}>Student</button>
        <button onClick={() => send({type: "DIVERSITY"})}>Diversity (eg lottery)</button>
        <button onClick={() => send({type: "FIANCE"})}>Fiancé</button>
        <button onClick={() => send({type: "FAMILY"})}>Family-sponsored</button>
    </>
  )
}
