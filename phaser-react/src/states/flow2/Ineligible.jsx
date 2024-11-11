import React from 'react'

export default function Ineligible({ send }) {
  return (
    <>
        <h1>Ineligible</h1>
        <button onClick={() => send({type: "CHOOSE_OTHER_VISA"})}>Choose another visa</button>
       
    </>
  )
}
